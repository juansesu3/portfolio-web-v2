import { NextResponse } from "next/server";
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { MongoClient } from "mongodb";
import { franc } from "franc";

// --- Inicializar modelo OpenAI ---
const model = new ChatOpenAI({
  modelName: "gpt-4o",
  temperature: 0.5,
});

// --- Perfil profesional de Juan ---
const professionalProfile = `
Juan Sebastián Suárez is a Full-Stack Developer with over 4 years of experience.
Specialties:
- Frontend: Next.js, React, Tailwind CSS, intuitive interface design.
- Backend: FastAPI, Node.js, API integration, MongoDB and PostgreSQL databases.
- Artificial Intelligence: conversational agents, recommendation systems, process automation.
- SaaS project architecture and scalable solutions.
- Digital consultancy experience: understands client needs and provides complete solutions.
`;

// --- Función para detectar idioma ---
function detectLanguage(text: string): "en" | "es" | "fr" {
  const langCode = franc(text, { minLength: 3 });
  switch (langCode) {
    case "eng": return "en";
    case "spa": return "es";
    case "fra": return "fr";
    default: return "en"; // fallback a inglés
  }
}

// --- Conexión global a MongoDB ---
let cachedClient: MongoClient | null = null;
async function connectToMongo() {
  if (cachedClient) return cachedClient;
  const client = new MongoClient(process.env.MONGODB_URI!);
  await client.connect();
  cachedClient = client;
  return client;
}

// --- API POST ---
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { query, userUUID } = body;

    if (!query || !userUUID) {
      return NextResponse.json(
        { error: "Missing 'query' or 'userUUID'" },
        { status: 400 }
      );
    }

    // --- Detectar idioma ---
    const detectedLang = detectLanguage(query);

    // --- Preparar Mongo ---
    interface ChatMessage {
      sender: "user" | "bot";
      text: string;
      time: string;
    }
    interface Conversation {
      userUUID: string;
      messages: ChatMessage[];
    }
    const client = await connectToMongo();
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection<Conversation>("conversations");

    // --- Traer últimos mensajes para contexto ---
    const conversation = await collection.findOne({ userUUID });
    const lastMessages = conversation?.messages.slice(-10) || [];
    const contextText = lastMessages
      .map(msg => `${msg.sender === "user" ? "User" : "Bot"}: ${msg.text}`)
      .join("\n");

    // --- Construir prompt final ---
    const basePrompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        `
You are Sofia, the conversational assistant of Juan Sebastián Suárez, a Full-Stack Developer.
Your objectives:

1. Present Juan as an expert in frontend, backend, system integration, and AI.
2. Each response should naturally include a mini-presentation of Juan (skills, projects, and how he can add value).
3. Help the client understand their needs through clear questions and step-by-step guidance.
4. Suggest concrete solutions tailored to the client.
!!!IMPORTANT!!!
Always respond in the exact language in which the user asks the question.
Do NOT switch languages under any circumstance.
The language for this conversation is: ${detectedLang}
!!!IMPORTANT!!!
5. Use examples of technologies Juan masters: Next.js, TypeScript, React.js, FastAPI, MongoDB, conversational AI, API integration.
6. Maintain a professional, friendly, and trustworthy tone.
7. Ask open-ended questions to identify client needs while always offering guidance.
8. Never invent false information about Juan.
9. Respond in a way that acts as a "conversational mini-portfolio" that convinces the user to work with Juan.

Information about Juan:
${professionalProfile}
`
      ],
      ["human", "{inputText}"],
    ]);

    const chain = RunnableSequence.from([basePrompt, model]);

    // --- Combinar contexto + pregunta actual ---
    const finalInput = {
      inputText: `${contextText}\n\nCurrent question: ${query}`,
    };

    // --- Ejecutar la cadena de IA ---
    const response = await chain.invoke(finalInput);
    const botResponseText = response.content;

    // --- Guardar mensaje del usuario ---
    await collection.updateOne(
      { userUUID },
      {
        $push: {
          messages: {
            sender: "user",
            text: query,
            time: new Date().toISOString(),
          },
        },
      },
      { upsert: true }
    );

    // --- Guardar mensaje del bot ---
    await collection.updateOne(
      { userUUID },
      {
        $push: {
          messages: {
            sender: "bot",
            text: typeof botResponseText === "string" ? botResponseText : JSON.stringify(botResponseText),
            time: new Date().toISOString(),
          },
        },
      }
    );

    return NextResponse.json({ response: botResponseText });

  } catch (err) {
    console.error("Chatbot API error:", err);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

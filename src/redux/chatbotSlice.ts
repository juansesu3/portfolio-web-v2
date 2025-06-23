import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface Product {
  lang: string;
  slug: string;
  name: string;
  price?: number;
  image_url: string[];
}

interface ChatMessage {
  sender: "user" | "bot";
  text: string;
  time: string;
  product?: {
    name: string;
    price?: number;
    slug: string;
    image_url: string[];
  };
  secondaryProducts?: Product[];
}

interface ChatState {
  currentView: string;
  isChatStarted: boolean; // Indica si el chat ha sido iniciado alguna vez
  isChatWindowOpen: boolean; // Indica si la ventana del chat está actualmente abierta
  messages: ChatMessage[];
  isBackToMenu: boolean; // Nuevo estado para manejar el renderizado condicional
  userUUID: string | null;
}

const initialState: ChatState = {
  currentView: "menu",
  isChatStarted: false,
  isChatWindowOpen: false,
  messages: [],
  isBackToMenu: false, // Inicializado como falso
  userUUID: null,
};

const chatbotSlice = createSlice({
  name: "chatbot",
  initialState,
  reducers: {
    startChatR: (state) => {
      state.isChatStarted = true;
    },
    finishChatR: (state) => {
      state.isChatStarted = false;
    },
    openChatWindow: (state) => {
      state.isChatWindowOpen = true;
    },

    closeChatWindow: (state) => {
      state.isChatWindowOpen = false;
    },
    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      state.messages.push(action.payload);
    },
    goToMenu: (state) => {
      state.currentView = "menu";
    },
    goToAgentProfile: (state) => {
      state.currentView = "agent_profile";
    },
    startChat: (state) => {
      state.currentView = "chatStarted";
      if (!state.userUUID) {
        state.userUUID = uuidv4(); // Generar UUID solo si no existe
      }
    },
    clearMessages: (state) => {
      state.messages = []; // Limpia el historial de mensajes
    },
    removeUUID: (state) => {
      state.userUUID = null;
    },
  },
});

export const {
  openChatWindow,
  closeChatWindow,
  addMessage,
  goToMenu,
  startChatR,
  startChat,
  goToAgentProfile,
  clearMessages,
  finishChatR,
  removeUUID,
} = chatbotSlice.actions;

export default chatbotSlice.reducer;
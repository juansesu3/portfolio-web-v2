import  { Schema, model, models } from "mongoose";

const messageSchema = new Schema({
  userUUID: { type: String, required: true }, // para identificar al usuario
  sender: { type: String, enum: ["user", "bot"], required: true },
  text: { type: String, required: true },
  time: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const conversationSchema = new Schema({
  userUUID: { type: String, required: true },
  messages: [messageSchema],
});

export const Conversation = models.Conversation || model("Conversation", conversationSchema);

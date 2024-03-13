// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  // change this to the message you want to be sent to the user when they first open the chatbot
  initialMessages: [
    createChatBotMessage(
      `Hi, Welcome to Tae's Chatbot! I'm here to help you with any questions you have about Tae's projects and skills. Type "projects" to see a list of projects, or "skills" to see a list of skills. If you have any other questions, feel free to ask! 🤖`
    ),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#646C7C",
    },
    chatButton: {
      backgroundColor: "#464646",
    },
  },
};

export default config;

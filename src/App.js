import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import ActionProvider from "./components/ActionProvider";
import MessageParser from "./components/MessageParser";
import config from "./components/Config";

// we're using react-chatbot-kit to create the chatbot. See their docs here: https://fredrikoseberg.github.io/react-chatbot-kit-docs/docs
// we're using tailwindcss to style
// we're using OpenAI via langchain to process messages

function App() {
  return (
    <div className="App flex justify-center h-screen bg-slate-900">
      {/* Add the Chatbot component to the header */}
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
        headerText="TAEBOT"
        placeholderText="Ask me a question..."
      />
    </div>
  );
}

export default App;

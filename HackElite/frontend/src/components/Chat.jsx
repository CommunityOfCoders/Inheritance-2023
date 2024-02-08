import React, { useState, useEffect, useRef } from "react";
import chaticon from "../assets/images/chaticon.png";
import axiosClient from "../api/axiosClient";
const Chat = ({ onClose }) => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  var index = 0;
  const [inputMessage, setInputMessage] = useState("");
  const messagesRef = useRef(null);
  const handleInputChange = (e) => setInputMessage(e.target.value);

  // We can set the logic here.
  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const userMessage = { text: inputMessage, sender: "user", key: index++ };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      axiosClient
        .post("http://localhost:3000/qna", { question: inputMessage })
        .then((response) => {
          const responseData = response.data;
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: responseData, sender: "bot", key: index++ },
          ]);
          setInputMessage("");
        });
    }
  };
  const handleKeyPress = (event) => {
    // look for the `Enter` keyCode
    if (event.keyCode === 13 || event.which === 13) {
      handleSendMessage();
    }
  };

  useEffect(() => {
    // Scroll to the bottom when messages change.
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    // Main Div
    <>
      {/* Chat Button */}
      <button
        type="button"
        className="absolute bottom-5 right-5 w-30 h-16 px-4 bg-white rounded-lg text-black font-medium shadow-lg transform transition-transform duration-300 hover:scale-110"
        onClick={() => {
          setShowChat(!showChat);
          if (!messages)
            setMessages([
              { text: "Welcome! How can I assist you?", sender: "bot" },
            ]);
        }}
      >
        <img alt="chat-icon" src={chaticon} className="h-10 inline mr-2" />
        QnA
      </button>

      {/* Chat Interface. */}
      <div
        className={`${
          showChat ? "block" : "hidden"
        } fixed z-10 bottom-32 right-5 rounded-lg shadow-lg shadow-black`}
        id="Chat"
      >
        <div className="flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-lg">
          {/* Chat Messages. */}
          <div
            className="flex-1 px-4 py-2 overflow-y-auto max-h-64 mt-2"
            ref={messagesRef}
          >
            {messages.map((message) => (
              <div
                className={`${
                  message.sender === "bot"
                    ? "text-white bg-blue-700 border-2 rounded-lg"
                    : "text-black bg-green-400  border-2 rounded-lg"
                } ${
                  message.sender === "bot" ? "text-left" : "text-right"
                } mb-2 max-w-xs p-2`}
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="flex items-center border-t border-gray-300 p-2">
            <input
              type="text"
              value={inputMessage}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="flex-1 outline-none focus:outline-black rounded bg-blue-100 p-2 mr-2"
              onKeyPress={handleKeyPress}
            />

            {/* Send And Close Buttons. */}
            <button
              type="button"
              className="py-2 px-4 bg-black rounded-lg text-white font-medium hover:bg-white hover:text-black hover:border-black hover:border-x-2 shadow-lg mr-2 transition duration-300"
              onClick={handleSendMessage}
            >
              Send
            </button>
            <button
              type="button"
              className="py-2 px-4 bg-red-500 rounded-lg text-white hover:bg-white hover:text-red-600  hover:border-red-600 hover:border-x-2 transition duration-300"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;

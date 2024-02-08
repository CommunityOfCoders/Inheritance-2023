import React from "react";
import { useState } from "react";
import Chat from "./Chat";
function Card({ title, description, thumbnailUrl, onRemove, onDownload }) {
  const [showChatButton, setChatButton] = useState(false);

  const showChat = () => {
    setChatButton(true);
  };

  return (
    // Card.
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-xl shadow-blue-900 bg-white flex flex-col">
        {/* Image. */}
        <img className="w-full flex-shrink-0" src={thumbnailUrl} alt={title} />

        {/* Card Header. */}
        <div className="flex-grow px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description.slice(0, 50)}</p>
        </div>

        {/* Remove And Download Buttons. */}
        <div className="px-6 pt-4 pb-2 flex justify-between">
          <button
            type="button"
            className="py-2 px-4 bg-red-600 rounded-lg text-white hover:bg-white hover:text-red-600 hover:border-red-600 hover:border-x-2 duration-300 shadow-lg"
            onClick={onRemove}
          >
            <i className="fa-solid fa-x mr-4" />
            Remove
          </button>

          <button
            type="button"
            className="py-2 px-4 bg-black rounded-lg text-white font-medium hover:bg-white hover:text-black hover:border-black hover:border-x-2 transition duration-300 shadow-lg"
            onClick={() => {
              showChat();
              onDownload();
            }}
          >
            <i className="fa-solid fa-download" /> Download
          </button>
        </div>
      </div>

      {showChatButton && (
        <Chat isOpen={true} onClose={() => setChatButton(false)} />
      )}
    </>
  );
}

export default Card;

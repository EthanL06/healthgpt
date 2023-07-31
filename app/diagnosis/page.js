"use client";

import { useEffect, useState, useRef } from "react";

const Diagnosis = () => {
  const [messagesArray, setMessagesArray] = useState([
    {
      text: "Hello, I am HealthGPT, an AI-powered patient diagnosis tool.",
      isUser: false,
    },
    {
      text: "I will ask you a series of questions to help diagnose your patient.",
      isUser: false,
    },
  ]);

  const chatRef = useRef(null);

  const handleMessageSend = (e) => {
    const input = document.getElementById("message-input");

    if (input.value.trim() === "") return;
    setMessagesArray([...messagesArray, { text: input.value, isUser: true }]);

    // Clear input
    input.value = "";
  };

  useEffect(() => {
    // Scroll to bottom of chat
    chatRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messagesArray]);

  return (
    <div className="w-full sm:w-[40rem] font-medium pt-12">
      {messagesArray.map((message, index) => (
        <TextBubble text={message.text} isUser={message.isUser} key={index} />
      ))}

      <div className="flex items-center gap-x-4 mt-6" ref={chatRef}>
        <input
          id="message-input"
          type="text"
          placeholder="Ask for more information..."
          className="input input-bordered w-full shadow"
          autoComplete="off"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleMessageSend();
            }
          }}
        />

        <button
          onClick={handleMessageSend}
          className="btn btn-square btn-ghost text-gray-500 flex items-center justify-center"
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

const TextBubble = ({ text, isUser }) => {
  return (
    <div className={`chat ${isUser ? "chat-end" : "chat-start"}`}>
      <div
        className={`chat-bubble ${
          isUser ? "chat-bubble-primary" : "bg-[#D1D5DB] text-[#212121]"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

const SendIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      />
    </svg>
  );
};
export default Diagnosis;

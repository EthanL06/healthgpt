"use client";

import { useEffect, useState, useRef } from "react";

const Diagnosis = () => {
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const [messagesArray, setMessagesArray] = useState([
    {
      text: "Hello, I am HealthGPT, an AI-powered patient diagnosis tool.",
      isUser: false,
    },
    {
      text: "Enter in all relevant information regarding the patient.",
      isUser: false,
    },
  ]);

  const chatRef = useRef(null);

  const handleMessageSend = (e) => {
    const input = document.getElementById("message-input").value;

    if (input.trim() === "") return;
    setMessagesArray([...messagesArray, { text: input, isUser: true }]);

    document.getElementById("message-input").value = "";

    // Send message to backend
    fetch("api/query", {
      method: "POST",
      body: JSON.stringify({
        message: message,
      }),
    }).then((res) => {
      console.log(res);
      res.json().then((data) => {
        console.log(data);
        setMessagesArray([
          ...messagesArray,
          { text: input, isUser: true },
          { text: data.text, isUser: false },
        ]);
      });
    });
  };

  useEffect(() => {
    // Scroll to bottom of chat
    chatRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messagesArray]);

  return (
    <div className="w-full sm:w-[40rem] font-medium pt-12 px-4">
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
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleMessageSend();
            }
          }}
          disabled={true}
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
    <div
      className={`chat ${
        isUser ? "chat-end" : "chat-start"
      } whitespace-pre-wrap`}
    >
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

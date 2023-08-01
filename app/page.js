"use client";

import { useEffect, useState, useRef } from "react";

const Diagnosis = () => {
  const [message, setMessage] = useState("");
  const [showExample, setShowExample] = useState(true);

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
    setShowExample(false);
    const input = document.getElementById("message-input").value;

    if (input.trim() === "") return;
    setMessagesArray([...messagesArray, { text: input, isUser: true }]);

    document.getElementById("message-input").value = "";
    // Send message to backend
    fetch("api/query", {
      method: "POST",
      body: JSON.stringify({
        message: input,
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
    <div className="w-full sm:w-[40rem] font-medium pt-6 px-4">
      {messagesArray.map((message, index) => (
        <TextBubble text={message.text} isUser={message.isUser} key={index} />
      ))}

      {showExample && (
        <div className="flex w-full justify-center mt-4">
          <button
            onClick={(e) => {
              document.getElementById("message-input").value =
                "A 50-year-old male presents with a history of recurrent kidney stones and osteopenia. He has been taking high-dose vitamin D supplements due to a previous diagnosis of vitamin D deficiency. Laboratory results reveal hypercalcemia and hypercalciuria. What is the likely diagnosis, and what is the treatment?";

              handleMessageSend(e);
            }}
            className="btn btn-outline border-brand text-brand"
          >
            Try An Example Prompt
          </button>
        </div>
      )}

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
          disabled={messagesArray[messagesArray.length - 1].isUser}
        />

        {messagesArray[messagesArray.length - 1].isUser ? (
          <div className="loading loading-dots loading-lg text-brand"></div>
        ) : (
          <button
            onClick={handleMessageSend}
            className="btn btn-square btn-ghost text-gray-500 flex items-center justify-center"
          >
            <SendIcon />
          </button>
        )}
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

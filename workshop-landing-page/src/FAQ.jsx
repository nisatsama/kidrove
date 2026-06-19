import { useState, useRef, useEffect } from "react";

export default function FAQ() {
  const faqData = [
    {
      question: "Do I need prior coding experience?",
      keywords: ["coding", "experience", "beginner", "knowledge"],
      answer:
        "No, this workshop is beginner-friendly. We start from basics and gradually move into AI & robotics concepts.",
    },
    {
      question: "Will I get a certificate?",
      keywords: ["certificate", "certification", "proof"],
      answer:
        "Yes, participants who complete the workshop will receive a certificate of completion.",
    },
    {
      question: "Is this live or recorded?",
      keywords: ["live", "recorded", "session", "class"],
      answer:
        "All sessions are live and interactive with real-time doubt solving.",
    },
    {
      question: "What do I need to join?",
      keywords: ["laptop", "internet", "requirements", "join"],
      answer:
        "Just a laptop and internet connection. All tools will be provided during the workshop.",
    },
  ];

  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi 👋 I'm your AI workshop assistant. Ask me anything about the workshop!",
    },
  ]);

  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleQuestionClick = (item) => {
    setMessages((prev) => [
      ...prev,
      { role: "user", text: item.question },
      { role: "bot", text: item.answer },
    ]);
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setInput("");

    setTimeout(() => {
      const foundFAQ = faqData.find(
        (faq) =>
          faq.keywords?.some((keyword) =>
            userMessage.toLowerCase().includes(keyword.toLowerCase()),
          ) || faq.question.toLowerCase().includes(userMessage.toLowerCase()),
      );

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: foundFAQ
            ? foundFAQ.answer
            : "🤖 I couldn't find an exact answer for that question. Please leave your details in the registration form and our team will contact you shortly.",
        },
      ]);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-pink-50 to-blue-100 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}

        <div className="grid md:grid-cols-3 gap-6">
          {/* FAQ Suggestions */}
          <div>
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl border border-white shadow-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">⚡</span>
                <h3 className="font-bold text-indigo-600">Quick Questions</h3>
              </div>

              <div className="space-y-3">
                {faqData.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionClick(item)}
                    className="
                      w-full text-left p-4 rounded-2xl
                      bg-gradient-to-r from-white to-indigo-50
                      border border-indigo-100
                      hover:shadow-lg hover:scale-[1.02]
                      hover:border-indigo-300
                      transition-all duration-300
                      group
                    "
                  >
                    <div className="flex gap-3">
                      <span className="text-pink-500 group-hover:scale-110 transition">
                        ✨
                      </span>

                      <span className="text-sm text-gray-700 group-hover:text-indigo-700">
                        {item.question}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Assistant */}
          <div className="md:col-span-2">
            <div
              className="
                h-[600px]
                flex flex-col
                rounded-3xl
                overflow-hidden
                bg-white/70
                backdrop-blur-xl
                border border-white
                shadow-2xl
              "
            >
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-xl">
                    🤖
                  </div>

                  <div>
                    <h3 className="font-bold text-white">Workshop Assistant</h3>

                    <p className="text-xs text-white/80">
                      Online • Ready to help
                    </p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`
                        max-w-[80%]
                        px-4 py-3
                        rounded-2xl
                        shadow-md
                        text-sm
                        leading-relaxed
                        ${
                          msg.role === "user"
                            ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-br-md"
                            : "bg-white text-gray-700 border border-pink-100 rounded-bl-md"
                        }
                      `}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="border-t bg-white/80 p-4">
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Ask about certificates, classes, timings..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    className="
                      flex-1
                      px-4
                      py-3
                      rounded-2xl
                      border
                      border-indigo-200
                      focus:outline-none
                      focus:ring-2
                      focus:ring-indigo-400
                      bg-white
                    "
                  />

                  <button
                    onClick={handleSendMessage}
                    className="
                      px-6
                      py-3
                      rounded-2xl
                      font-semibold
                      text-white
                      bg-gradient-to-r
                      from-indigo-500
                      to-blue-500
                      hover:scale-105
                      shadow-lg
                      transition-all
                    "
                  >
                    🚀 Send
                  </button>
                </div>

                <p className="text-center text-xs text-gray-500 mt-3">
                  Powered by Workshop FAQ Assistant 🎯
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

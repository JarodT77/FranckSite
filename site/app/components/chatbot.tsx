"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content:
    "Salut ! 👋 Bienvenue sur Souffle Libre. Je suis Clope-Free, là pour t'aider à trouver la meilleure façon d'écraser ta dernière clope — pour de bon.\n\nDis-moi, qu'est-ce qui t'amène aujourd'hui ? Tu veux arrêter de fumer, tu y réfléchis, ou tu as déjà commencé et tu cherches un coup de pouce ?",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [messages, isOpen]);

  async function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = { role: "user", content: trimmed };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setMessages([...updatedMessages, { role: "assistant", content: data.message }]);
    } catch {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: "Désolé, une erreur est survenue. Essaie à nouveau dans quelques instants.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="w-87.5 sm:w-100 bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
          style={{ height: "520px" }}>
          {/* Header */}
          <div className="bg-red-400 px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <span className="text-white text-lg">🚭</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold font-poppins text-sm leading-tight">Clope-Free</p>
              <p className="text-red-100 text-xs font-poppins">Assistant Souffle Libre</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
              aria-label="Fermer le chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 rounded-full bg-red-400 flex items-center justify-center shrink-0 mr-2 mt-1">
                    <span className="text-xs">🚭</span>
                  </div>
                )}
                <div
                  className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm font-poppins whitespace-pre-wrap leading-relaxed ${
                    msg.role === "user"
                      ? "bg-red-400 text-white rounded-br-sm"
                      : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="w-7 h-7 rounded-full bg-red-400 flex items-center justify-center shrink-0 mr-2 mt-1">
                  <span className="text-xs">🚭</span>
                </div>
                <div className="bg-white border border-gray-100 shadow-sm px-4 py-3 rounded-2xl rounded-bl-sm">
                  <Loader2 className="w-4 h-4 text-red-400 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-4 py-3 bg-white border-t border-gray-100 flex gap-2 items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Écris ton message..."
              disabled={isLoading}
              className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-base sm:text-sm font-poppins text-gray-800 placeholder-gray-400 outline-none focus:border-red-300 focus:ring-2 focus:ring-red-100 transition-all disabled:opacity-60"
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              className="w-9 h-9 bg-red-400 hover:bg-red-500 disabled:opacity-40 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors shrink-0"
              aria-label="Envoyer"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="w-14 h-14 bg-red-400 hover:bg-red-500 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95"
        aria-label={isOpen ? "Fermer le chat" : "Ouvrir le chat"}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
}

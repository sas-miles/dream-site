"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useChat } from "ai/react";

import UserModal from "./UserModal";
import { useIsChatActive, useSmartBarStore } from "~/store/smartbarStore";

function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [],
    id: "chat",
    body: {},
  });

  const { setIsChatActive } = useSmartBarStore();
  const isChatActive = useIsChatActive();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="flex h-[100%] w-[100%] flex-col items-center px-8 py-12">
      {!isChatActive && <UserModal />}
      <div className="stretch flex h-[100%] w-full items-center justify-center align-middle">
        <div className="rounded-sm text-white">
          {messages.map((m) => (
            <div key={m.id} className="whitespace-pre-wrap">
              {m.role === "user" ? "User: " : "AI: "}
              {m.content}
            </div>
          ))}
        </div>
      </div>

      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex w-full flex-col gap-6">
          <div className="flex w-full">
            <Input
              value={input}
              onChange={handleInputChange}
              className="rounded-sm border-slate-800 bg-slate-950 text-white"
            ></Input>
            <Button
              onClick={() => setIsChatActive(true)}
              type="submit"
              className="ml-2 rounded-sm bg-blue-600 px-4 py-2 text-white"
            >
              Send
            </Button>
          </div>
          <div className="flex justify-between gap-4">
            <Button className="flex-grow rounded-sm bg-gray-900 text-slate-400">
              Prompt one
            </Button>
            <Button className="flex-grow rounded-sm bg-gray-900 text-slate-400">
              Prompt two
            </Button>
            <Button className="flex-grow rounded-sm bg-gray-900 text-slate-400">
              Prompt three
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Chat;

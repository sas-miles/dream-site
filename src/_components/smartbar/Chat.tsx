"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ChevronRight, ChevronLeft, Menu } from "lucide-react";

import { useSmartBarStore } from "~/store/smartbarStore";
import { useSharedChat } from "~/hooks/useSharedChat";
import UserModal from "~/_components/smartbar/UserModal";
import { Input } from "../ui";

interface ChatProps {
  onToggleContextSideBar: () => void;
  isContextSideBarOpen: boolean;
  onToggleSiteNav: () => void;
}

function Chat({
  onToggleContextSideBar,
  isContextSideBarOpen,
  onToggleSiteNav,
}: ChatProps) {
  const { messages, input, handleInputChange, handleSubmit } = useSharedChat();
  const isChatActive = useSmartBarStore((state) => state.isChatActive);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <>
      <div className="flex items-center justify-between border-b border-slate-800 p-4">
        <Button
          onClick={onToggleSiteNav}
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Menu className="h-6 w-6" />
        </Button>
        <Button
          onClick={onToggleContextSideBar}
          variant="outline"
          className="ml-auto"
        >
          {isContextSideBarOpen ? (
            <>
              <ChevronRight className="mr-2 h-4 w-4" />
              Hide Context
            </>
          ) : (
            <>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Show Context
            </>
          )}
        </Button>
      </div>
      <div className="flex h-[100%] flex-col items-center px-8 py-12">
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
        <div className="border-b border-slate-800 p-4 md:hidden">
          <Button
            onClick={onToggleContextSideBar}
            variant="outline"
            className="flex w-full items-center justify-center"
          >
            {isContextSideBarOpen ? (
              <>
                <ChevronDown className="mr-2 h-4 w-4" />
                Hide Context
              </>
            ) : (
              <>
                <ChevronUp className="mr-2 h-4 w-4" />
                Show Context
              </>
            )}
          </Button>
        </div>
      </div>
    </>
  );
}

export default Chat;

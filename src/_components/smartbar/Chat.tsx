"use client";

import React, { useEffect, useRef } from "react";
import { useSmartBarStore } from "~/store/smartbarStore";
import UserModal from "~/_components/smartbar/UserModal";
import { Button, ScrollArea } from "~/_components/ui";
import { ChevronRight, ChevronLeft, Menu } from "lucide-react";
import { Input } from "~/_components/ui";
import { useSharedChat } from "~/hooks/useSharedChat";

interface ChatProps {
  onToggleContextSideBar: () => void;
  isContextSideBarOpen: boolean;
  onToggleSiteNav: () => void;
}

interface Message {
  id: string;
  role: string;
  content: string;
  toolInvocations?: { toolName: string }[];
}

function Chat({
  onToggleContextSideBar,
  isContextSideBarOpen,
  onToggleSiteNav,
}: ChatProps) {
  const { messages, input, handleInputChange, handleSubmit } = useSharedChat();
  const { isChatActive } = useSmartBarStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmitWrapper = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e, input);
  };

  return (
    <>
      <div className="flex items-center justify-between border-b border-slate-800 p-4 md:border-none">
        <Button
          onClick={onToggleSiteNav}
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Menu className="h-6 w-6" />
        </Button>
        <Button onClick={onToggleContextSideBar} className="md:hidden">
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
        <ScrollArea className="flex-grow overflow-y-auto">
          <div className="flex flex-col space-y-4">
            {messages.map((m: Message) => (
              <div key={m.id} className="whitespace-pre-wrap">
                <div className="font-bold">{m.role}</div>
                <p>
                  {m.content.length > 0 ? (
                    m.content
                  ) : (
                    <span className="font-light italic">
                      {"calling tool: " +
                        (m?.toolInvocations?.[0]?.toolName ?? "")}
                    </span>
                  )}
                </p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
        <form
          className="flex w-full items-center"
          onSubmit={handleSubmitWrapper}
        >
          <Input
            value={input}
            onChange={handleInputChange}
            className="rounded-sm border-slate-800 bg-slate-950 text-white"
          />
          <Button
            type="submit"
            className="ml-2 rounded-sm bg-blue-600 px-4 py-2 text-white"
          >
            Send
          </Button>
        </form>
      </div>
    </>
  );
}

export default Chat;

import { useChat } from "ai/react";
import { useCallback } from "react";
import { useSmartBarStore } from "~/store/smartbarStore";

export const useSharedChat = () => {
  const { setIsChatActive, setIsOpen } = useSmartBarStore();
  const chatProps = useChat({
    id: "chat",
    maxSteps: 3,
  });

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsChatActive(true);
      setIsOpen(true);
      chatProps.handleSubmit(e); // Directly pass the event
    },
    [setIsChatActive, setIsOpen, chatProps],
  );

  return { ...chatProps, handleSubmit };
};

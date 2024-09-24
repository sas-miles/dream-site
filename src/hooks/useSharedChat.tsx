import { useChat } from "ai/react";
import { useCallback } from "react";
import { useSmartBarStore } from "~/store/smartbarStore";
import { useAiContextStore } from "~/store/aiContextStore";

export const useSharedChat = () => {
  const { setIsChatActive, setIsOpen } = useSmartBarStore();
  const { context, setContext } = useAiContextStore();
  const chatProps = useChat({
    initialMessages: [],
    id: "chat",
    body: { context },
  });

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>, userMessage: string) => {
      e.preventDefault();
      setIsChatActive(true);
      setIsOpen(true);
      const combinedMessage = { context, userMessage };
      chatProps.handleSubmit(e, { body: combinedMessage }); // Pass the message within an object
    },
    [setIsChatActive, setIsOpen, chatProps, context],
  );

  return { ...chatProps, handleSubmit, setContext };
};

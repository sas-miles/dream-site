import { useChat } from "ai/react";
import { useCallback, useState } from "react";
import { useSmartBarStore } from "~/store/smartbarStore";

export const useSharedChat = () => {
  const { setIsChatActive, setIsOpen } = useSmartBarStore();
  const [context, setContext] = useState<string>("");
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

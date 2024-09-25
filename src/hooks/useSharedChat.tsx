import { useChat } from "ai/react";
import { useCallback } from "react";
import { useSmartBarStore } from "~/store/smartbarStore";
import { useAiContextStore } from "~/store/aiContextStore";

export const useSharedChat = () => {
  const { setIsChatActive, setIsOpen } = useSmartBarStore();
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return { messages, input, handleInputChange, handleSubmit };

  // const { context, setContext } = useAiContextStore();
  // const chatProps = useChat({
  //   // initialMessages: [],
  //   // id: "chat",
  //   // body: { context },
  //   maxSteps: 3,
  // });

  // const handleSubmit = useCallback(
  //   (e: React.FormEvent<HTMLFormElement>, userMessage: string) => {
  //     e.preventDefault();
  //     setIsChatActive(true);
  //     setIsOpen(true);
  //     // const combinedMessage = { context, userMessage };
  //     chatProps.handleSubmit(e); // Pass the message within an object
  //   },
  //   [setIsChatActive, setIsOpen, chatProps],
  // );

  // // return { ...chatProps, handleSubmit, setContext };
  // return { ...chatProps, handleSubmit };
};

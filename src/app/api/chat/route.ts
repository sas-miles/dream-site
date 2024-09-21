import { openai } from "@ai-sdk/openai";
import { streamText, convertToCoreMessages } from "ai";
import type { Message } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;
export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = (await req.json()) as { messages: Message[] };

  const result = await streamText({
    model: openai("gpt-4-turbo"),
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}

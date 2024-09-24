import { generateText } from "ai";
import { openaiModel } from "~/server/ai";
import { z } from "zod";
export default async function Page() {
  const res = await generateText({
    model: openaiModel,
    prompt: "What day is it today?",
    tools: {
      get_day: {
        description: "Get the day of the week",
        parameters: z.object({}),
        execute: async () => {
          const day = new Date().toLocaleDateString("en-US", {
            weekday: "long",
          });
          return day;
        },
      },
    },
  });

  console.log(res);

  return <div>Hello there</div>;
}

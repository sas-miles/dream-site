"use server";
import type { NewResourceParams } from "~/server/db/schema/resources";
import { insertResourceSchema, resources } from "~/server/db/schema/resources";
import { db } from "~/server/db";
import { generateEmbeddings } from "~/server/ai/embeddings";
import { embeddings as embeddingsTable } from "~/server/db/schema";

export const createResource = async (input: NewResourceParams) => {
  try {
    const { content } = insertResourceSchema.parse(input);

    const [resource] = await db
      .insert(resources)
      .values({ content })
      .returning();

    if (!resource) {
      throw new Error("Resource is undefined");
    }

    const embeddings = await generateEmbeddings(content);
    const mappedEmbeddings = embeddings.map((embedding) => ({
      resourceId: resource.id,
      ...embedding,
    }));

    await db.insert(embeddingsTable).values(mappedEmbeddings);

    return "Resource successfully created.";
  } catch (e) {
    if (e instanceof Error)
      return e.message.length > 0 ? e.message : "Error, please try again.";
  }
};

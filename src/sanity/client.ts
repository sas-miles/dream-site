import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "xuit33dd",
  dataset: "production",
  apiVersion: "v2022-03-07",
  useCdn: false,
});

import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "r2i29v6s",
  dataset: "production",
  apiVersion: "2025-07-09",
  useCdn: false,
});
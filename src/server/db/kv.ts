import { Redis } from "@upstash/redis";

export const kv = new Redis({
  url: "https://eu1-helpful-squid-39450.upstash.io",
  token: process.env.UPSTASH_TOKEN || "",
});

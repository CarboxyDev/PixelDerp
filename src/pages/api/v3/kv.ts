import type { NextApiRequest, NextApiResponse } from "next";
import { kv } from "../../../server/db/kv";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { key, value } = req.body;
    if (!key || !value) {
      res.status(400).send({ message: "Missing key or value" });
      return;
    }
    await kv.set(key, value);
    console.log(`[KV] SET: ${key} = ${value}`);
    res.status(200).send({ message: "Create kv" });
    return;
  }

  if (req.method === "GET") {
    const key = req.query.key;
    if (!key) {
      res.status(400).send({ message: "Missing key" });
      return;
    }
    const value = await kv.get(key as string);
    console.log(`[KV] GET: ${key} = ${value}`);
    res.status(200).send({ value });
    return;
  }
}

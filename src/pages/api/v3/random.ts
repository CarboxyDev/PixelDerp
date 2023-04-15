import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query, body, cookies, method } = req;
  if (method === "POST") {
    res.status(405).send({ message: "Method not allowed" });
    return;
  }

  const randomNumber = Math.floor(Math.random() * 10);

  res
    .status(200)
    .send({ message: "Fetch random number", number: randomNumber });
}

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

  const responseData = {
    time: new Date().toISOString(),
    server: {
      node: process.version,
      arch: process.arch,
      platform: process.platform,
      memory: process.memoryUsage(),
    },
  };

  res.status(200).send({ message: "Fetch info", data: responseData });
}

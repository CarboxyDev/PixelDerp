import type { NextApiRequest, NextApiResponse } from "next";
import { randint } from "../../../utils/util";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query, body, cookies, method } = req;
  if (method === "POST") {
    res.status(405).send({ message: "Method not allowed" });
    return;
  }

  let statData;

  if (query.type == "browsetime") {
    statData = {
      type: "browse-time",
      stat: {
        time: randint(10, 40).toString(),
        unit: "hours",
      },
    };
  }

  if (statData) {
    console.log("[+] Send stat " + query.type);
    res
      .status(200)
      .send({ message: "Successfully fetched stats", data: statData });
    return;
  }

  console.log("[x] Stat not found [" + query.type + "]");
  res.status(404).send({ message: "Not found" });
}

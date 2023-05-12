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

  const statTypes = [
    {
      type: "browsetime",
      figure: randint(10, 40),
      unit: "hours",
      remark:
        "The time you spent on this site, watching videos of cute fluffy cats",
    },
    {
      type: "moneyspent",
      figure: randint(20, 120),
      unit: "dollars",
      remark: "The amount of money you spent on cat merchandise",
    },
    {
      type: "visits",
      figure: randint(100, 500),
      unit: "visits",
      remark: "The number of times you visited this site",
    },
    {
      type: "friends",
      figure: randint(4, 22),
      unit: "friends",
      remark:
        "The number of people that decided you were good enough to be friends with",
    },
    {
      type: "logincount",
      figure: randint(2, 15),
      unit: "logins",
      remark:
        "The number of times you, in all your intellect, decided to login to this site",
    },
  ];

  const queryType = statTypes.find((stat) => stat.type == query.type);

  if (queryType) {
    const statData = {
      type: queryType.type,
      figure: queryType.figure.toString(),
      unit: queryType.unit,
      remark: queryType.remark,
    };
    console.log("[+] Send stat " + query.type);
    res
      .status(200)
      .send({ message: "Successfully fetched stats", data: statData });
    return;
  }

  console.log("[x] Stat not found [" + query.type + "]");
  res.status(404).send({ message: "Not found" });
}

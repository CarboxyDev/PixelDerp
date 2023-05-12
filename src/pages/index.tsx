import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import StatCard from "../components/StatCard";

type StatType = {
  figure: string;
  unit: string;
  remark: string;
};

const Home: NextPage = () => {
  const [stats, setStats] = useState<StatType[]>([]);

  useEffect(() => {
    const statNames = [
      "browsetime",
      "moneyspent",
      "visits",
      "friends",
      "logincount",
    ];
    // uses waterfall fetching - bad performance
    const compiledStats: StatType[] = [];
    const getStat = async () => {
      for (let i = 0; i < statNames.length; i++) {
        const res = await fetch("/api/v3/stats?type=" + statNames[i]);
        const responseData = await res.json();
        console.log(responseData);
        if (responseData.data) {
          compiledStats.push(responseData.data);
        }
      }
      setStats(compiledStats);
    };

    getStat();
  }, []);

  return (
    <>
      <Head>
        <title>PixelDerp</title>
      </Head>
      <main className="mx-20 flex flex-col items-center">
        <div className="mt-32">
          {stats.length > 0 && (
            <div className="grid grid-cols-3 gap-x-12 gap-y-12">
              {stats.map((stat: StatType, index) => (
                <StatCard
                  key={index}
                  statFigure={stat.figure}
                  statUnit={stat.unit}
                  remark={stat.remark}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;

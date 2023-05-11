import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import StatCard from "../components/StatCard";

type StatType = {
  figure: string;
  unit: string;
  remark: string;
} | null;

const Home: NextPage = () => {
  const [stat, setStat] = useState<StatType>(null);

  useEffect(() => {
    const getStat = async () => {
      const res = await fetch("/api/v3/stats?type=browsetime");
      const responseData = await res.json();
      console.log(responseData);
      if (responseData.data) {
        setStat(responseData.data.stat);
      }
    };

    getStat();
  }, []);

  return (
    <>
      <Head>
        <title>PixelDerp</title>
      </Head>
      <main className="flex flex-col items-center">
        <div className="mt-60">
          {stat && (
            <div className="grid grid-cols-3 gap-x-12">
              <StatCard
                statFigure={stat.figure}
                statUnit={stat.unit}
                remark={stat.remark}
              />
              <StatCard
                statFigure="20"
                statUnit="dollars"
                remark="This is the amount you spent on cat merchandise."
              />
              <StatCard
                statFigure="310"
                statUnit="visits"
                remark="The number of times you visited this website."
              />
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;

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
            <StatCard
              statFigure={stat.figure}
              statUnit={stat.unit}
              remark={stat.remark}
            />
          )}
        </div>
      </main>
    </>
  );
};

export default Home;

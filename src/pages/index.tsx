import { type NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import StatCard from "../components/StatCard";

const Home: NextPage = () => {
  useEffect(() => {
    const getStat = async () => {
      const res = await fetch("/api/v3/stats?type=browsetime");
      const data = await res.json();
      console.log(data);
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
          <StatCard
            statFigure="23"
            statUnit="Hours"
            content="The time you spent on this site, watching videos of cute fluffy cats"
          />
        </div>
      </main>
    </>
  );
};

export default Home;

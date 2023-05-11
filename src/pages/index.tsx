import { type NextPage } from "next";
import Head from "next/head";
import StatCard from "../components/StatCard";

const Home: NextPage = () => {
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

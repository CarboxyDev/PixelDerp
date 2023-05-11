import { type NextPage } from "next";
import Head from "next/head";
import Card from "../components/Card";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PixelDerp</title>
      </Head>
      <main className="flex flex-col items-center">
        <div className="mt-60">
          <Card />
        </div>
      </main>
    </>
  );
};

export default Home;

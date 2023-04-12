import { type NextPage } from "next";
import Head from "next/head";
import { useRef, useState } from "react";

const Home: NextPage = () => {
  const messageInputRef = useRef<HTMLInputElement>(null);
  const [items, setItems] = useState<any[]>([]);

  function sendMessage() {
    const message = messageInputRef.current?.value;
    if (!message) return;

    setItems([...items, message]);
    messageInputRef.current.value = "";
  }

  return (
    <>
      <Head>
        <title>PixelDerp</title>
      </Head>
      <main className="flex flex-col items-center">
        <div className="mt-64 flex w-120 flex-col items-center">
          <div className="flex h-28 w-full flex-row gap-x-4 rounded-2xl bg-gray-900 px-12 py-8">
            <input
              type="text"
              className="flex-1 appearance-none rounded-md bg-gray-800 px-4 text-gray-400 focus:outline-primary"
              ref={messageInputRef}
            />
            <button
              onClick={() => sendMessage()}
              className="w-24 rounded-md bg-primary"
            >
              Send
            </button>
          </div>
          <div className="my-4"></div>
          <div className="flex min-h-[240px] w-full flex-col gap-y-4 rounded-2xl bg-gray-900 px-8 py-8">
            {items.map((item) => {
              return (
                <>
                  <div className="">{item}</div>
                </>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

import { Html, Head, Main, NextScript } from "next/document";
import { clsx } from "clsx";

const Document = () => {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Random experimental stuff built using NextJS"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body
        className={clsx(
          "bg-slate-50 font-inter",
          process.env.DEV == "true" && "debug-screens"
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

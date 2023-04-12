import { getSession } from "next-auth/react";
import React from "react";
import LoginForm from "../components/LoginForm";

interface loginProps {
  session: any;
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  console.log(session);

  if (!session) {
    return {
      props: {
        session: null,
      },
    };
  }

  return {
    props: {
      session: "",
    },
  };
}

export default function login(props: loginProps) {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <LoginForm />
      </div>
    </>
  );
}

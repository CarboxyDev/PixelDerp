import { useSession } from "next-auth/react";
import React from "react";

interface DashboardProps {}

function Dashboard(props: DashboardProps) {
  async function logout() {
    //
  }

  const { data: session } = useSession();
  console.log(session);

  if (!session) {
    return <>You are not logged in.</>;
  }

  return (
    <>
      <button
        className="m-12 rounded-lg border border-primary bg-primary px-6 py-3 text-white transition duration-300 ease-in hover:border-primary hover:bg-transparent hover:text-primary active:scale-95"
        onClick={() => logout()}
      >
        Logout
      </button>
    </>
  );
}

export default function dashboard(props: DashboardProps) {
  return (
    <div>
      <Dashboard {...props}></Dashboard>
    </div>
  );
}

import React from "react";
import { supabase } from "../server/db/auth";

interface DashboardProps {}

export async function getServerSideProps() {
  const { data, error } = await supabase.auth.getSession();
  console.log(data);
  if (data.session === null) {
  }

  return {
    props: {},
  };
}

export default function dashboard(props: DashboardProps) {
  async function logout() {
    const error = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
    window.location.href = "/login";
  }

  return (
    <div>
      <div>
        <button
          className="m-12 rounded-lg border border-primary bg-primary px-6 py-3 text-white transition duration-300 ease-in hover:border-primary hover:bg-transparent hover:text-primary active:scale-95"
          onClick={() => logout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

import React from "react";

interface DashboardProps {}

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default function dashboard(props: DashboardProps) {
  async function logout() {
    //
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

import React from "react";

interface DashboardProps {}

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default function dashboard(props: DashboardProps) {
  return <div>dashboard</div>;
}

import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
 

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-10/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
      </div>


    </>
  );
}

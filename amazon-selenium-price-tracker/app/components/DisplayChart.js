"use client";
import React from "react";
import { Chart } from "react-charts";

const DisplayChart = ({data}) => {

    // useEffect(()=>{
    //     console.log(data)
    // },[]);

  const primaryAxis = React.useMemo(
    () => ({
      getValue: (datum) => datum.time,
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    () => [
      {
        getValue: (datum) => datum.price,
      },
    ],
    []
  );

  return (
    <div className="size-[40rem] mt-4">
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
        }}
      />
    </div>
  );
};

export default DisplayChart;

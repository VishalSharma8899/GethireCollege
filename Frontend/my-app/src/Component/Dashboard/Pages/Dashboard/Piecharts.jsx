import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import  { useRef } from 'react';


function Piecharts() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "pie",
      data: {
        labels: ["Label 1", "Label 2", "Label 3"],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: [
              "rgba(180, 223, 229, 1)",
              "rgba(48, 60, 108, 1)",
              "rgba(250, 151, 108, 1)",
            ],
          },
        ],
      },
    })
    return()=>{
      if(chartInstance.current)
      {
   chartInstance.current.destroy()
      }
    }
  },[]);

  return (
    <div>
      <canvas className="ml-20" ref={chartRef} style={{ width: "300px", height: "200px" }} />
    </div>
  );
}

export default Piecharts;

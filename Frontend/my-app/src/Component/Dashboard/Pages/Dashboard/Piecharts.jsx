import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

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
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-full ml-36 mb-2">
      <canvas
        className="mx-auto"
        ref={chartRef}
        style={{ width: "300px", height: "170px" }}
      />
    </div>
  );
}

export default Piecharts;

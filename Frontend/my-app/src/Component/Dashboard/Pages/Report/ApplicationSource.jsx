import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import PieCharts from './PieCharts';

function ApplicationSource() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));

  const [value, setValue] = useState(1); // Set the default value to 1
  const [activeButton, setActiveButton] = useState("File");
  const [showChart, setShowChart] = useState(false);

  const handleButtonClick = (chartType) => {
    setActiveButton(chartType);
    if (chartType === "Donut") {
      setShowChart(true);
    } else {
      setShowChart(false);
    }
  };

  return (
    <div className="p-4">
      <Box sx={{ width: '100%' }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 12">
            <Item className="m-3 flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <p className="text-black text-lg mb-4">Top Sources</p>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-black border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="px-4 py-2 text-left">Source</th>
                        <th className="px-4 py-2 text-left">Applications</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-2 flex items-center">
                          <span className="bg-blue-400 w-4 h-4 rounded-full mr-2"></span>
                          Added by Admin
                        </td>
                        <td className="px-4 py-2">{value}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex flex-wrap gap-2 mb-4">
                  <p
                    className={`rounded-lg px-4 py-2 cursor-pointer ${
                      activeButton === "File" ? "bg-black text-white" : "bg-gray-200 text-black"
                    }`}
                    onClick={() => handleButtonClick("File")}
                  >
                    File
                  </p>
                  <p
                    className={`rounded-lg px-4 py-2 cursor-pointer ${
                      activeButton === "Donut" ? "bg-black text-white" : "bg-gray-200 text-black"
                    }`}
                    onClick={() => handleButtonClick("Donut")}
                  >
                    Donut
                  </p>
                  <p
                    className={`rounded-lg px-4 py-2 cursor-pointer ${
                      activeButton === "Percentage" ? "bg-black text-white" : "bg-gray-200 text-black"
                    }`}
                    onClick={() => handleButtonClick("Percentage")}
                  >
                    Percentage
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  {showChart && <PieCharts />}
                </div>
              </div>
            </Item>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ApplicationSource;

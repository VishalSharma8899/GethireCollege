import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Box from '@mui/material/Box';

export default function Graph() {
  return (
    <Box sx={{ width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%' }}>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        height={300} // Adjusted to be responsive based on container height
        margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
        grid={{ vertical: true, horizontal: true }}
      />
    </Box>
  );
}

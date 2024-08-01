import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CountUp from 'react-countup';
import Graph from "./Graph";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'start',
  color: theme.palette.text.secondary,
  marginLeft: '3px'
}));

function AllJobs() {
  const [interview] = useState(9);
  const [totalViews] = useState(12);
  const [totalApplicants] = useState(14);

  return (
    <div>
      <p className='text-xl mt-2 font-semibold ml-5'>All Jobs</p>
      <div className='flex flex-col p-4 md:p-0'>
        <div className='mb-6 h-auto '>
          <Box className="ml-0 md:ml-6 " sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6} md={3}>
                <Item className='h-32 text-black flex flex-col items-start justify-center p-4 '>
                  <p>Total Views</p>
                  <CountUp className="text-2xl md:text-3xl font-bold" start={0} end={totalViews} delay={1} />
                  <p className='text-blue-500 cursor-pointer'>View</p>
                </Item>
              </Grid>
              <Grid xs={12} sm={6} md={3}>
                <Item className='h-32 flex flex-col text-black items-start justify-center p-4'>
                  <p>Total Applications</p>
                  <CountUp className="text-2xl md:text-3xl font-bold" start={0} end={totalApplicants} delay={1} />
                </Item>
              </Grid>
              <Grid xs={12} sm={6} md={3}>
                <Item className='h-32 flex flex-col items-start text-black justify-center p-4'>
                  <p>Total Conversion rate</p>
                  <p className='text-2xl md:text-3xl font-bold'>14.4%</p>
                </Item>
              </Grid>
              <Grid xs={12} sm={6} md={3}>
                <Item className='h-32 flex flex-col items-start justify-center text-black p-4'>
                  <p>Interview</p>
                  <CountUp className="text-2xl md:text-3xl font-bold" start={0} end={interview} delay={1} />
                  <p className='text-blue-500 cursor-pointer'>View</p>
                </Item>
              </Grid>
              <Grid xs={12} sm={6} md={3}>
                <Item className='h-32 flex flex-col items-start justify-center text-black p-4'>
                  <p>Offered</p>
                  <p className='text-2xl md:text-3xl font-bold'>5</p>
                  <p className='text-blue-500 cursor-pointer'>View</p>
                </Item>
              </Grid>
              <Grid xs={12} sm={6} md={3}>
                <Item className='h-32 flex flex-col items-start justify-center text-black p-4'>
                  <p>Hired</p>
                  <p className='text-2xl md:text-3xl font-bold'>6</p>
                  <p className='text-blue-500 cursor-pointer'>View</p>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
        <div className='bg-white m-3 rounded-xl h-80'>
          <Graph />
        </div>
      </div>
    </div>
  );
}

export default AllJobs;

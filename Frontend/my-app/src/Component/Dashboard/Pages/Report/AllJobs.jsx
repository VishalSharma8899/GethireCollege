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
    const [intereview, setInterview] = useState(9);
    const [totalViews, setTotalViews] = useState(12);
    const [totalApplicants, setTotalApplicants] = useState(14)
  return (
    <div>
        <p className='text-xl mt-2 font-semibold ml-5'>All Jobs</p>
        <div className='flex-col '>
            <div className=' mb-6 h-32'>
            <Box className="ml-6 " sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid xs={5}>
          <Item className='h-32 flex gap-20 text-black'>
            <div>
                <p>Total Views</p>
                <CountUp className="text-3xl text-black font-bold" start={0} end={totalViews} delay={1}/>
                <p className='text-blue-400 cursor-pointer'>View</p>
            </div>
            <div>
                <p>Total Applications</p>
                <CountUp className="text-3xl text-black font-bold" start={0} end={totalApplicants} delay={1}/>
            </div>
            <div>
                <p>Total Convsion rate</p>
                <p className='text-3xl text-black font-bold'>14.4%</p>
            </div>
          </Item>
        </Grid>
        <Grid xs={2}>
          <Item className='h-32 text-black'>
            <p>Interview</p>
            <CountUp className="text-3xl text-black font-bold" start={0} end={intereview} delay={1}/>
            <p className='text-blue-400 cursor-pointer'>View</p>
          </Item>
        </Grid>
        <Grid xs={2}>
          <Item className='h-32 text-black'>
          <p>Offered</p>
            <p className='text-3xl text-black font-bold'>5</p>
            <p className='text-blue-400 cursor-pointer'>View</p>
          </Item>
        </Grid>
        <Grid xs={2}>
          <Item className='h-32 text-black'>
          <p>Hired</p>
            <p className='text-3xl text-black font-bold'>6</p>
            <p className='text-blue-400 cursor-pointer'>View</p>
          </Item>
        </Grid>
      </Grid>
    </Box>
            </div>
            <div className='bg-white m-3 rounded-xl  h-80'>
                  <Graph/>
            </div>
        </div>
    </div>
  )
}

export default AllJobs
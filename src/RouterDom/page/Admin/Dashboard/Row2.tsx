import React from 'react'
import DashboardBox from './DashboardBox'
import { CartesianGrid, LineChart, ResponsiveContainer, XAxis, YAxis,Tooltip, Legend, Line, ScatterChart, Scatter, Cell, AreaChart, Area } from 'recharts';


type Props = {}
const datapiechat = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const data = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];
const data1 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },

];
const Row2 = (props: Props) => {
  return (
   <>
    <DashboardBox sx={{ gridArea: "d" }} >
    <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data1}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
    <Area type="monotone" dataKey="uv"  stroke="#8884d8" fill="#8884d8" />
    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
    <Area type="monotone" dataKey="amt" stroke="#ffc658" fill="#ffc658" />

        
        </AreaChart>
      </ResponsiveContainer>
    


    </DashboardBox>
      <DashboardBox sx={{ gridArea: "e" }} >   
  
        
         </DashboardBox>

      {/* bieu do cot */}
   
      <DashboardBox sx={{ gridArea: "f" }} >  
      
      </DashboardBox>
   </>
  )
}

export default Row2
import React from 'react'
import DashboardBox from './DashboardBox'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

type Props = {}
const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

const Row3 = (props: Props) => {

 

  return (
    <>
       <DashboardBox sx={{ gridArea: "g" }} >7 </DashboardBox>
      <DashboardBox sx={{ gridArea: "h" }} >
        
      
         </DashboardBox>
    </>
  )
}

export default Row3
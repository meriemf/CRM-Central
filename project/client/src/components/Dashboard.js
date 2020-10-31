import React,{useState, useEffect} from 'react';
import '../App.css';
import { PieChart, Pie, Cell, Sector, BarChart,XAxis,YAxis,Tooltip,Legend,
CartesianGrid,Bar } from 'recharts';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
  margin-top: 5em;
  margin-left: 7em;
  margin-right: 20em;
  margin-bottom: 5em;
`;
const Dashboard = () => {

  const [data, setData] = useState([]);
useEffect(() => {
  Promise.all([
    axios.get('/dashboard'),
  ]).then((all) => {
    setData(all[0].data); 
    console.log(data)  
 });
}, []);


  // const data = [
  //   { name: 'Quality Review Completed', value: 40},
  //   { name: 'Quality Review in Progress', value: 30 }
  //   // { name: 'Group C', value: 300 },
  //   // { name: 'Group D', value: 200 },
  // ];




// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
//   cx, cy, midAngle, innerRadius, outerRadius, percent, index,
// }) => {
//    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

  
  //   return (

  //     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
  //     {`${(percent * 100).toFixed(0)}%`}
  //   </text>

  //   );
  // };

 
return (
  
  <Wrapper>
    <div style={{textAlign :"center"}}>
      <h1> Dashboard</h1>
    <div className = 'App'>

    <PieChart width={400} height={400}>
        <Pie dataKey="value" isAnimationActive={false} data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
       
        <Tooltip />
      </PieChart>

      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis /> 
        <Tooltip />
        <Legend/>
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
      </BarChart>
    </div>
        <div className = 'App' >
    {/* <BarChart
        width={300}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart> */}


      <BarChart
        width={300}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
         <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="name"  />
        <YAxis />
        <Tooltip />
        <Legend />  
        <Bar dataKey="value" fill="#8884d8" />
        {/* <Bar dataKey="value" fill="#82ca9d" /> */}
      </BarChart>
    </div>
    </div>
  </Wrapper>
)

};



export default Dashboard;










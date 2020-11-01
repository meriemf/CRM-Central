import React, { useState, useEffect } from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Bar, ResponsiveContainer, PieChart, Pie, Cell, Sector, Tooltip, Legend } from 'recharts';
import styled from 'styled-components';
import axios from 'axios';



const StyledChart1 = styled.div`
  height: 40%;
  width: 40%; 
  text-align: center; /* Aligns <a> inside of NavIcon div */
  background-color: #F5F5F5;
  margin: 10px 10px;
  padding: 12px 6px;
  border-radius: 5px;
  
`;
const Wrapper = styled.div`
  margin-top: 4em;
  margin-left: 8em;
  margin-right: 20em;
  margin-bottom: 5em;
`;
const Dashboard = () => {
  
  const [data1, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [data6, setData6] = useState([]);
  const [data7, setData7] = useState([]);
  
  
  useEffect(() => {
    Promise.all([
      axios.get('/dashboard'),
    ]).then((all) => {
    setData(all[0].data[0].rows[0].count);
    setData2(all[0].data[1].rows[0].count);
    setData3(all[0].data[2].rows[0].count);
    setData4(all[0].data[3].rows[0].count);
    setData5(all[0].data[4].rows[0].count);
    setData6(all[0].data[5].rows[0].sum);
    setData7(all[0].data[6].rows[0].sum);
    });
  }, []);

 const first = [
    { name: 'Quality reviews in progress', value: Number(data1) }, { name: 'Quality review completed', value: Number(data2) },
  ];
  
const COLORS = ['#FFC107', '#4CAF50', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
 
const second = [
  {
    name: 'Current', current: data3,
  },
  {
    name: 'Completed', completed: data4,
  },
  {
    name: 'Upcoming', upcoming: data5,
  },
 
];

const third = [
  { name: 'Revenue In Progress', value: data6  },
  { name: 'Revenue Completed', value: data7 },
];

return (
  
  <Wrapper>
  <div className ='App'>   
  {/* <h2>Dashboard</h2> */}
 
  <h5> Quality reviews </h5>
  <PieChart width={400} height={400}>
          <Pie
          data={first}
          cx={200}
          cy={200}
          label={renderCustomizedLabel}
          //labelLine={true}
          label
          labelLine={false}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          Legend
        >
          {
            first.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        {/* <Tooltip/> */}
        <Legend/>
  </PieChart>
 
  {/* <StyledChart1> */}
  <h5> Projects </h5>
  <ResponsiveContainer width = "40%" height= {400}>
  <BarChart
        width={500}
        height={300}
        data={second}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip style={{backgroundColor:"black"}}/>
        <Legend />
        <Bar dataKey="current" fill="#8884d8" barSize={80} />
        <Bar dataKey="completed" fill="#82ca9d" barSize={80} />
        <Bar dataKey="upcoming" fill="#4CAF50" barSize={80} />
  </BarChart>
  </ResponsiveContainer>
  {/* </StyledChart1> */}



<PieChart width={800} height={400} >
        <Pie
          data={third}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          label={renderCustomizedLabel}
          dataKey="value"
        >
          {
            third.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Tooltip />
        <Legend />
        </PieChart>
</div>
</Wrapper>
)

};

export default Dashboard;

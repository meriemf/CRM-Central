import React, { useState, useEffect } from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Bar, ResponsiveContainer, PieChart, Pie, Cell, Sector, Tooltip, Legend } from 'recharts';
import styled from 'styled-components';
import axios from 'axios';
import '../css/Dashboard.css'

const Wrapper = styled.div`
  margin-top: 6em;
  margin-left: 8em;
  margin-right: 8em;
  margin-bottom: 5em;
`;

const StyledChart1 = styled.div`
  height: 100%;
  width: 100%; 
  text-align: center;
  background-color: #ecede3;
  margin: 10px 10px;
  padding: 12px 6px;
  border-radius: 5px;
  box-shadow: 20px 8px 20px grey;
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
    { name: 'Quality Reviews in Progress', value: Number(data1) }, { name: 'Quality Reviews Completed', value: Number(data2) },
  ];
  
  const COLORS = ['#FFA500', '#20B2AA', '#FFBB28', '#FF8042'];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
      cx, cy, midAngle, innerRadius, outerRadius, percent, index,
    }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="black" textAnchor={x > cx ? 'end' : 'start'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
 
  const second = [
    {name: 'Current', Current: data3,},
    {name: 'Completed', Completed: data4,},
    {name: 'Upcoming', Upcoming: data5,},
  ];

  const third = [
    { name: 'Revenue In Progress($)', value: data6  },
    { name: 'Revenue Completed($)', value: data7 },
  ];

    return (
    <Wrapper>
      <h2 className="display-7">Dashboard</h2>
      <div className="flex-container">
        <div style={{flexGrow: 1}}>
          <StyledChart1 className='wrapper'>
            <h5> Quality Reviews </h5>
            <ResponsiveContainer width = "100%" height= {500}>
              <PieChart >
                <Pie
                data={first}
                cx={150}
                cy={200}
                label={renderCustomizedLabel}
                labelLine={false}
                outerRadius={100}
                dataKey="value"
                isAnimationActive={false}
                >
                {
                  first.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                }
                </Pie>
                {/* <Tooltip/> */}
                <Tooltip cursor={{fill: 'transparent'}}/>
                <Legend iconSize={15} width={300} height={160} layout='horizontal' horizontalAlign='center' verticalAlign='bottom'/>
              </PieChart>
            </ResponsiveContainer>
          </StyledChart1>
        </div>

        <div style={{flexGrow: 8}}>
          <StyledChart1 className='wrapper'>
            <h5> Projects </h5>
            <ResponsiveContainer width = "100%" height= {500}>
              <BarChart
                // width='80%'
                // height='50%'
                data={second}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
                >
                <CartesianGrid vertical={false}/>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip cursor={{fill: 'transparent'}}/>
                <Legend iconSize={15} />
                <Bar dataKey="Current" fill="#d95638" barSize={80} />
                <Bar dataKey="Completed" fill="#5694f0" barSize={80}/>
                <Bar dataKey="Upcoming" fill="#7eb356" barSize={80} />
              </BarChart>
            </ResponsiveContainer>
          </StyledChart1>
        </div>

        <div style={{flexGrow: 1}}>
          <StyledChart1 className='wrapper'>
          <h5> Revenue </h5>
          <ResponsiveContainer width = "100%" height= {500}>
            <PieChart width={400} height={400} >
              <Pie
                data={third}
                cx={150}
                cy={200}
                innerRadius={70}
                outerRadius={120}
                // fill="#8884d8"
                paddingAngle={5}
                label={renderCustomizedLabel}
                labelLine={false}
                dataKey="value"
                isAnimationActive={true}
              >
                {
                  third.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                }
              </Pie>
              <Tooltip />
              <Legend iconSize={15} width={300} height={160} layout='horizontal' horizontalAlign='center' verticalAlign='bottom'/>
            </PieChart>
            </ResponsiveContainer>
          </StyledChart1>
        </div>
      </div>
    </Wrapper>
  )
};

export default Dashboard;

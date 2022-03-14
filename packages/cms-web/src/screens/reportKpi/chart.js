import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Create, FlexForm, TextInput, required, translate, EditorInput, DateTimeInput } from 'bwork-libs';
import { Grid } from '@material-ui/core';
import compose from 'recompose/compose';
import { PasswordInput } from 'react-admin';
import { Chart } from "react-google-charts";
import {
  RadarChart,
  PolarGrid,
  PolarRadiusAxis,
  PolarAngleAxis,
  Radar,
  AreaChart,
  Area,
  Legend,
  Treemap,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  PieChart,
  Pie,
 
  ResponsiveContainer,
} from 'recharts';

//January, February, March, April, May, June, July, August, September, October, November, December



 const data = [
  ["Status", "Percentage"],
  ["Up time", 360000],
  ["Down time", 800],
  ["Maintain time", 600],
  
];

 const options = {
  backgroundColor: 'transparent',
  title: "System uptime",
};



const data3 = [
  {
    name: '01-01-2022',
    "Post job": 120000,
    "Bid job": 250000,
    "Negotiate contract": 100000,
  },
  {
    name: '02-01-2022',
    "Post job": 150000,
    "Bid job": 270000,
    "Negotiate contract": 80000,
  },
  {
    name: '03-01-2022',
     "Post job": 80000,
    "Bid job": 160000,
    "Negotiate contract": 90000,
  },
  {
    name: '04-01-2022',
   "Post job": 250000,
    "Bid job": 300000,
    "Negotiate contract": 150000,
  },
  {
    name: '05-01-2022',
    "Post job": 280000,
    "Bid job": 400000,
    "Negotiate contract": 130000,
  },
  {
    name: '06-01-2022',
    "Post job": 400000,
    "Bid job": 800000,
    "Negotiate contract": 400000,
  },
  {
    name: '07-01-2022',
    "Post job": 500000,
    "Bid job": 600000,
    "Negotiate contract": 450000,
  },
];

const data4 = [
  {
    name: '01-01-2022',
    "Post job (ms)": 40,
    "Bid job (ms)": 24,
    "Negotiate contract (ms)": 30,
  },
  {
    name: '02-01-2022',
    "Post job (ms)": 45,
    "Bid job (ms)": 16,
    "Negotiate contract (ms)": 38,
  },
  {
    name: '03-01-2022',
     "Post job (ms)": 20,
    "Bid job (ms)": 66,
    "Negotiate contract (ms)": 44,
  },
  {
    name: '04-01-2022',
   "Post job (ms)": 55,
    "Bid job (ms)": 66,
    "Negotiate contract (ms)": 50,
  },
  {
    name: '05-01-2022',
    "Post job (ms)": 23,
    "Bid job (ms)": 44,
    "Negotiate contract (ms)": 33,
  },
  {
    name: '06-01-2022',
    "Post job (ms)": 20,
    "Bid job (ms)": 66,
    "Negotiate contract (ms)": 44,
  },
  {
    name: '07-01-2022',
    "Post job (ms)": 11,
    "Bid job (ms)": 25,
    "Negotiate contract (ms)": 40,
  },
];



const data5 = [
  ["Status", "Percentage"],
  ["Proper access", 1000000],
  ["UnKnown access", 10000],
  ["Dropped access", 30000],
  
 
];

 const options5 = {
  backgroundColor: 'transparent',
  title: "Security",
};


class CreatePostJob extends Component {
  render() {
    const { props } = this;

    return (
      <div>
        <Grid middle container spacing={4} direction="row" justifyContent="center" alignItems="center" >
          <Grid middle item xs={12} sm={6} >
            <div>API calls</div>
            <br />
           {/*  <BarChart width={730} height={320} data={data3}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis/>
              <Tooltip />
              <Legend  />
              <Bar dataKey="Post job" fill="#8884d8" />
              <Bar dataKey="Bid job" fill="#82ca9d" />
              <Bar dataKey="Negotiate contract" fill="#82ca9d" />
              
            </BarChart> */}


            <AreaChart width={730} height={250} data={data3}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8d" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#ede90e" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#ede90e" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Legend  />
  <Area type="monotone" dataKey="Post job"  stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="Bid job"  stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv1)" />
  <Area type="monotone"dataKey="Negotiate contract"  stroke="#ede90e" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>

          </Grid>
        
          <Grid middle item xs={12} sm={6}>
          <div>API call average latency(ms)</div>
            <br />
          {/*   <BarChart width={730} height={320} data={data4}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Post job (ms)" fill="#8884d8" />
              <Bar dataKey="Bid job (ms)" fill="#82ca9d" />
              <Bar dataKey="Negotiate contract (ms)" fill="#8884d8" />
            </BarChart>{' '} */}

            <AreaChart width={730} height={250} data={data4}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8d" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#ede90e" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#ede90e" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Legend  />
  <Area type="monotone" dataKey="Post job (ms)"  stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="Bid job (ms)"  stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv1)" />
  <Area type="monotone"dataKey="Negotiate contract (ms)"  stroke="#ede90e" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>


          </Grid>


          <Grid middle item xs={12} sm={6}>


            
          <Chart
         
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
          </Grid>
          <Grid right item xs={12} sm={6}>
          <Chart
         
      chartType="PieChart"
      data={data5}
      options={options5}
      width={"100%"}
      height={"400px"}
    />
          </Grid>
        </Grid>
      </div>
    );
  }
}

CreatePostJob.propTypes = {
  translate: PropTypes.func,
  hasList: PropTypes.bool,
  hasShow: PropTypes.bool,
  hasCreate: PropTypes.bool,
  hasEdit: PropTypes.bool,
  staticcontext: PropTypes.any,
};
CreatePostJob.detaultProps = {
  hasList: true,
  hasShow: true,
  hasCreate: false,
  hasEdit: false,
};

const enhance = compose(translate);
export default enhance(CreatePostJob);

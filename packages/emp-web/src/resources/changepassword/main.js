import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Create, FlexForm, TextInput, required, translate, EditorInput, DateTimeInput } from 'bwork-libs';
import { Grid } from '@transactionfee-ui/core';
import compose from 'recompose/compose';
import { PasswordInput } from 'react-admin';
//January, February, March, April, May, June, July, August, September, October, November, December
const barchart1 = [
  {
    name: 'Jan',
    'job posts': 4000,
    'job bids': 8000,
    'contracted jobs': 4000,
    'completed contracts': 2000,
  },
  {
    name: 'Feb',
    'job posts': 4500,
    'job bids': 9000,
    'contracted jobs': 4000,
    'completed contracts': 3000,
  },
  {
    name: 'March',
    'job posts': 6000,
    'job bids': 9000,
    'contracted jobs': 5000,
    'completed contracts': 3500,
  },
  {
    name: 'April',
    'job posts': 8000,
    'job bids': 13000,
    'contracted jobs': 7000,
    'completed contracts': 4500,
  },
  {
    'job posts': 9000,
    'job bids': 14000,
    'contracted jobs': 7000,
    'completed contracts': 6500,
  },
  {
    name: 'June',
    'job posts': 9000,
    'job bids': 14000,
    'contracted jobs': 7000,
    'completed contracts': 6500,
  },
  {
    name: 'July',
    'job posts': 11000,
    'job bids': 16000,
    'contracted jobs': 8000,
    'completed contracts': 7500,
  },
];

const barchart2 = [
  {
    name: 'Jan',
    'total employers': 4000,
    'active employers': 2400,
    'total job seekers': 6000,
    'active job seekers': 4500,
  },
  {
    name: 'Feb',
    'total employers': 5000,
    'active employers': 3000,
    'total job seekers': 7000,
    'active job seekers': 5000,
  },
  {
    name: 'March',
    'total employers': 6000,
    'active employers': 4000,
    'total job seekers': 8000,
    'active job seekers': 6000,
  },
  {
    name: 'April',
    'total employers': 7000,
    'active employers': 5000,
    'total job seekers': 9000,
    'active job seekers': 7000,
  },
  {
    name: 'May',
    'total employers': 7000,
    'active employers': 5000,
    'total job seekers': 9000,
    'active job seekers': 7000,
  },
  {
    name: 'June',
    'total employers': 8000,
    'active employers': 6000,
    'total job seekers': 10000,
    'active job seekers': 8000,
  },
  {
    name: 'July',
    'total employers': 10000,
    'active employers': 8000,
    'total job seekers': 12000,
    'active job seekers': 9000,
  },
];
const radadata = [
  {
    subject: 'Job posts',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Job bids',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Selected bids',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Smart contracts',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Successful contracts',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Failed contracts',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const treemapData = [
  {
    name: 'axis',
    children: [
      {
        name: 'Haskell',
        size: 24593,
      },
      {
        name: 'Haskells',
        size: 1302,
      },
      {
        name: 'HaskellGridLine',
        size: 652,
      },
      {
        name: 'HaskellLabel',
        size: 636,
      },
      {
        name: 'CartesianHaskell',
        size: 6703,
      },
    ],
  },
  {
    name: 'controls',
    children: [
      {
        name: 'TooltipControl',
        size: 8435,
      },
      {
        name: 'SelectionControl',
        size: 7862,
      },
      {
        name: 'PanZoomControl',
        size: 5222,
      },
      {
        name: 'HoverControl',
        size: 4896,
      },
      {
        name: 'ControlList',
        size: 4665,
      },
      {
        name: 'ClickControl',
        size: 3824,
      },
      {
        name: 'ExpandControl',
        size: 2832,
      },
      {
        name: 'DragControl',
        size: 2649,
      },
      {
        name: 'AnchorControl',
        size: 2138,
      },
      {
        name: 'Control',
        size: 1353,
      },
      {
        name: 'IControl',
        size: 763,
      },
    ],
  },
  {
    name: 'marlowe',
    children: [
      {
        name: 'Marlowe',
        size: 30544,
      },
      {
        name: 'Script',
        size: 19382,
      },
      {
        name: 'Deploy',
        size: 19788,
      },
      {
        name: 'Dapp',
        size: 10349,
      },
      {
        name: 'EdgeSprite',
        size: 3301,
      },

      {
        name: 'ScaleBinding',
        size: 11275,
      },
      {
        name: 'TestNet',
        size: 9930,
      },
      {
        name: 'MainNet',
        size: 7147,
      },
    ],
  },
  {
    name: 'events',
    children: [
      {
        name: 'DataEvent',
        size: 7313,
      },
      {
        name: 'SelectionEvent',
        size: 6880,
      },
      {
        name: 'TooltipEvent',
        size: 3701,
      },
      {
        name: 'VisualizationEvent',
        size: 2117,
      },
    ],
  },
  {
    name: 'legend',
    children: [
      {
        name: 'Plutus',
        size: 20859,
      },
      {
        name: 'PlutusRange',
        size: 10530,
      },
      {
        name: 'PlutusItem',
        size: 4614,
      },
    ],
  },
  {
    name: 'operator',
    children: [
      {
        name: 'distortion',
        children: [
          {
            name: 'Distortion',
            size: 6314,
          },
          {
            name: 'BifocalDistortion',
            size: 4461,
          },
          {
            name: 'FisheyeDistortion',
            size: 3444,
          },
        ],
      },
      {
        name: 'encoder',
        children: [
          {
            name: 'PropertyEncoder',
            size: 4138,
          },
          {
            name: 'Encoder',
            size: 4060,
          },
          {
            name: 'ColorEncoder',
            size: 3179,
          },
          {
            name: 'SizeEncoder',
            size: 1830,
          },
          {
            name: 'ShapeEncoder',
            size: 1690,
          },
        ],
      },
      {
        name: 'filter',
        children: [
          {
            name: 'FisheyeTreeFilter',
            size: 5219,
          },
          {
            name: 'VisibilityFilter',
            size: 3509,
          },
          {
            name: 'GraphDistanceFilter',
            size: 3165,
          },
        ],
      },
      {
        name: 'IOperator',
        size: 1286,
      },
      {
        name: 'label',
        children: [
          {
            name: 'NativeToken',
            size: 9956,
          },
          {
            name: 'RadialLabeler',
            size: 3899,
          },
          {
            name: 'StackedAreaLabeler',
            size: 3202,
          },
        ],
      },
      {
        name: 'NFT',
        children: [
          {
            name: 'RadialTreeLayout',
            size: 12348,
          },
          {
            name: 'NodeLinkTreeLayout',
            size: 12870,
          },
          {
            name: 'CirclePackingLayout',
            size: 12003,
          },
          {
            name: 'CircleLayout',
            size: 9317,
          },
          {
            name: 'TreeMapLayout',
            size: 9191,
          },
          {
            name: 'StackedAreaLayout',
            size: 9121,
          },
          {
            name: 'NFT',
            size: 7881,
          },
          {
            name: 'AxisLayout',
            size: 6725,
          },
          {
            name: 'IcicleTreeLayout',
            size: 4864,
          },
          {
            name: 'DendrogramLayout',
            size: 4853,
          },
          {
            name: 'ForceDirectedLayout',
            size: 8411,
          },
          {
            name: 'BundledEdgeRouter',
            size: 3727,
          },
          {
            name: 'IndentedTreeLayout',
            size: 3174,
          },
          {
            name: 'PieLayout',
            size: 2728,
          },
          {
            name: 'RandomLayout',
            size: 870,
          },
        ],
      },
      {
        name: 'OperatorList',
        size: 5248,
      },
      {
        name: 'OperatorSequence',
        size: 4190,
      },
      {
        name: 'OperatorSwitch',
        size: 2581,
      },
      {
        name: 'Operator',
        size: 2490,
      },
      {
        name: 'SortOperator',
        size: 2023,
      },
    ],
  },
];

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
  ResponsiveContainer,
} from 'recharts';

class CreatePostJob extends Component {
  render() {
    const { props } = this;

    return (
      <div>
        <Grid middle container spacing={2} direction="row" justifyContent="center" alignItcardano="center" >
          <Grid middle item xs={12} sm={6} >
            <BarChart width={730} height={250} data={barchart1}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="job posts" fill="#8884d8" />
              <Bar dataKey="job bids" fill="#82ca9d" />
              <Bar dataKey="contracted jobs" fill="#82ca9d" />
              <Bar dataKey="completed contracts" fill="#82ca9d" />
            </BarChart>
          </Grid>

          <Grid middle item xs={12} sm={6}>
            <BarChart width={730} height={250} data={barchart2}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total employers" fill="#8884d8" />
              <Bar dataKey="active employers" fill="#82ca9d" />
              <Bar dataKey="total job seekers" fill="#8884d8" />
              <Bar dataKey="active job seekers" fill="#82ca9d" />
            </BarChart>{' '}
          </Grid>
          <Grid middle item xs={12} sm={6}>
            <RadarChart outerRadius={90} width={730} height={250} data={radadata}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 150]} />
              <Radar name="Employer" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Radar name="Job seeker" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
              <Legend />
            </RadarChart>
          </Grid>
          <Grid right item xs={12} sm={6}>
            <div style={{ textAlign: 'right', color: 'red', marginLeft: '60px' }}>
              <Treemap
                style={{ textAlign: 'right', color: 'red' }}
                width={660}
                fullWidth
                height={220}
                data={treemapData}
                dataKey="size"
                ratio={4 / 3}
                stroke="#fff"
                fill="#8884d8"
              />
            </div>
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

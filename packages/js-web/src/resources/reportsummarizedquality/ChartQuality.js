import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { translate } from 'bwork-libs';
import { Card, CardHeader, CardContent, Typography, withTheme } from '@material-ui/core';
import moment from 'moment-timezone';
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ZAxis, Cell, ResponsiveContainer, Legend } from 'recharts';
import config from '../../Config';

class ChartQuality extends Component {
  getKeyBarChart = data => {
    if (!data || !data.length) {
      return [];
    }
    let res = [];
    for (let key in data[0]) {
      if (key === 'time') continue;
      res.push(key);
    }
    return res;
  };
  getColor = alert => {
    if (alert === 1) {
      // canh bao nguy cap
      return config.color.status.criticalAlert;
    } else if (alert === 2) {
      // canh bao
      return config.color.status.alert;
    }
    return config.color.status.normal; // binh thuong
  };
  renderTooltip = props => {
    // console.log(props);
    const { active, payload } = props;
    const { translate, type } = this.props;

    if (active && payload && payload.length === 2) {
      const data = payload[0].payload;
      let logTime = data.logTime;
      return (
        <div style={{ backgroundColor: '#fff', border: '1px solid #999', margin: 0, padding: 5 }}>
          <span>
            {`${translate('generic.bworksSource')}: ${payload[1].name}`}
            <br />
            {`${translate('generic.time')}: ${
              type === 'hour' ? moment(logTime).format('HH:mm') : moment(logTime).format('DD/MM/YYYY')
            }`}
          </span>
        </div>
      );
    }

    return null;
  };

  hasLogRecord = src => {
    for (let i = 0; i < src.length; i++) {
      let data = src[i].data;
      if (data && data.length) return true;
    }
    return false;
  };
  render() {
    const { data, translate, type } = this.props;
    if (!data || !data.length) return null;
    //const domain = this.parseDomain();
    let has = this.hasLogRecord(data);
    return (
      <Card>
        <CardHeader title={data.name} style={{ paddingBottom: 0 }} />
        {!data.length && (
          <Typography style={{ paddingLeft: 10 }} variant="body1">
            {translate('generic.noLogData')}
          </Typography>
        )}
        <CardContent>
          {data.map(item => {
            if (!item.data || !item.data.length) {
              return (
                <Typography key={item.id} style={{ paddingLeft: 7, paddingBottom: 20 }} variant="body1">
                  {`${item.name}: ${translate('generic.noLogData')} `}
                </Typography>
              );
            }
            return (
              <Fragment key={item.id}>
                <ResponsiveContainer width={'100%'} height={130}>
                  <ScatterChart margin={{ top: 20, right: 0, bottom: 20, left: 30 }}>
                    <XAxis
                      type="category"
                      dataKey="logTime"
                      tickFormatter={time =>
                        type === 'hour' ? moment(time).format('HH:mm') : moment(time).format('DD/MM/YYYY')
                      }
                    />
                    <YAxis
                      dataKey="index"
                      name={item.name}
                      tick={false}
                      tickLine={false}
                      axisLine={false}
                      label={{ value: `${item.name}`, position: 'insideRight' }}
                    />
                    <ZAxis type="number" dataKey="value" range={[500, 500]} />
                    <Tooltip
                      cursor={{ strokeDasharray: '3 3' }}
                      wrapperStyle={{ zIndex: 100 }}
                      content={this.renderTooltip}
                    />
                    <Scatter data={item.data}>
                      {item.data.map(item => {
                        let color = this.getColor(item.alert);
                        return <Cell key={item.logTime} fill={color} padding={0} />;
                      })}
                    </Scatter>
                  </ScatterChart>
                </ResponsiveContainer>
              </Fragment>
            );
          })}
          {has && (
            <ResponsiveContainer width={'100%'} height={50}>
              <ScatterChart>
                <Legend
                  payload={[
                    {
                      id: 'normal',
                      value: translate('generic.statusAlert.normal'),
                      type: 'circle',
                      color: config.color.status.normal,
                    },
                    {
                      id: 'alert',
                      value: translate('generic.statusAlert.alert'),
                      type: 'circle',
                      color: config.color.status.alert,
                    },
                    {
                      id: 'critical',
                      value: translate('generic.statusAlert.critical'),
                      type: 'circle',
                      color: config.color.status.criticalAlert,
                    },
                  ]}
                />
              </ScatterChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>
    );
  }
}

ChartQuality.propTypes = {
  data: PropTypes.array.isRequired,
  translate: PropTypes.func,
  theme: PropTypes.object,
  type: PropTypes.string,
};

const enhance = compose(translate, withTheme)(ChartQuality);

export default enhance;

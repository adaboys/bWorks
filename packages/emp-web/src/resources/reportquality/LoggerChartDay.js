import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { translate } from 'bwork-libs';
import round from 'lodash/round';
import { Card, CardHeader, CardContent, Typography, withTheme } from '@material-ui/core';
import moment from 'moment-timezone';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, CartesianGrid, Label, Legend, Tooltip } from 'recharts';

class LoggerChartDay extends Component {
  // eslint-disable-next-line no-unused-vars
  getTicks = data => {
    const result = [];
    if (data && data.length > 1) {
      const min = data[0].logTime;
      const max = data[data.length - 1].logTime;
      const step = 60 * 60 * 1000;
      let current = min - (min % step);
      while (current < max) {
        result.push(current);
        current += step;
      }
    }
    return result;
  };

  renderChart({ logger, symbol, theme, translate }) {
    if (logger.data && logger.data.length) {
      return (
        <ResponsiveContainer width={'100%'} height={300}>
          <AreaChart data={logger.data} margin={{ top: 30, right: 5, bottom: 30, left: 5 }}>
            <XAxis
              dataKey="logTime"
              // scale="time"
              // // ticks={this.getTicks(logger.data)}
              tickFormatter={time => moment(time).format('L')}
              // type="number"
              // domain={['dataMin', 'dataMax']}
            />
            <YAxis yAxisId={symbol} scale="auto">
              <Label value={symbol.toUpperCase()} position="top" offset={10} />
            </YAxis>
            <CartesianGrid strokeDasharray="3 3" />
            <Legend />
            <Tooltip
              label="abc"
              labelFormatter={val => moment(val).format('L LT')}
              formatter={value => `${round(value[0], 1)} ~ ${round(value[1], 1)}`}
            />
            <Area
              id={symbol}
              yAxisId={symbol}
              dataKey={symbol}
              fill={theme.palette.primary.main}
              stroke={theme.palette.primary.main}
              // type="linear"
              dot={false}
              name={translate(`generic.symbol.${symbol}`)}
            />
          </AreaChart>
        </ResponsiveContainer>
      );
    }

    return translate('generic.noLogData');
  }
  render() {
    const { data, translate, theme, symbol } = this.props;
    if (!data) return null;
    return (
      <Card>
        <CardHeader title={data.name} style={{ paddingBottom: 0 }} />
        <CardContent>
          {data.loggers.map(logger => {
            return (
              <Fragment key={logger.id}>
                <Typography gutterBottom variant="subtitle1">
                  {`DataLogger: ${logger.name}`}
                </Typography>
                <Typography variant="body1" component="div">
                  {this.renderChart({ logger, symbol, theme, translate })}
                </Typography>
              </Fragment>
            );
          })}
        </CardContent>
      </Card>
    );
  }
}

LoggerChartDay.propTypes = {
  data: PropTypes.object.isRequired,
  translate: PropTypes.func,
  theme: PropTypes.object,
  symbol: PropTypes.string.isRequired,
};

const enhance = compose(translate, withTheme)(LoggerChartDay);

export default enhance;

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { translate } from 'bwork-libs';
// import round from 'lodash/round';
import { Card, CardHeader, CardContent, Typography, withTheme } from '@material-ui/core';
import moment from 'moment-timezone';
import { ResponsiveContainer, LineChart, XAxis, YAxis, Line, CartesianGrid, Label, Legend, Tooltip } from 'recharts';
// import format from '../../util/format';

class LoggerChartHour extends Component {
  // eslint-disable-next-line no-unused-vars
  getTicks = data => {
    // console.log('getTicks', data);
    const result = [];
    if (data && data.length > 1) {
      // Math.round(new Date().getTime() / 1000);
      const min = moment(data[0].logTime).format('X');
      const max = moment(data[data.length - 1].logTime).format('X');
      // console.log(min, max);
      const step = 60 * 60 * 1000;
      // let count = 0;
      let current = min - (min % step);
      while (current < max) {
        // console.log('==>>  ', count, ': ', current, step);
        result.push(moment(current).toDate());
        current += step;
        // count++;
      }
    }

    // console.log('result getTicks', result);
    return result;
  };
  render() {
    const { data, translate, theme, symbol } = this.props;
    // // console.log('LoggerChartHour prop', this.props);
    // // console.log('LoggerChartHour state', this.state);
    if (!data) return null;
    return (
      <Card>
        <CardHeader title={data.name} style={{ paddingBottom: 0 }} />
        {!data.loggers.length && (
          <Typography style={{ paddingLeft: 20 }} variant="body1">
            {translate('generic.noLogData')}
          </Typography>
        )}
        <CardContent>
          {data.loggers.map(logger => {
            return (
              <Fragment key={logger.id}>
                <Typography gutterBottom variant="body1">
                  {`DataLogger: ${logger.name}`}
                </Typography>
                {logger.data && logger.data.length ? (
                  <ResponsiveContainer width={'100%'} height={300}>
                    <LineChart data={logger.data} margin={{ top: 30, right: 5, bottom: 30, left: 0 }}>
                      <XAxis
                        dataKey="logTime"
                        // ticks={this.getTicks(logger.data)}
                        tickFormatter={time => moment(time).format('HH:mm')}
                        // domain={['dataMin', 'dataMax']}
                      />
                      <YAxis yAxisId={symbol} scale="auto">
                        <Label value={symbol.toUpperCase()} position="top" offset={10} />
                      </YAxis>
                      <CartesianGrid strokeDasharray="3 3" />
                      <Legend />
                      <Tooltip label="abc" labelFormatter={val => moment(val).format('L LT')} />
                      <Line
                        id={symbol}
                        yAxisId={symbol}
                        dataKey={symbol}
                        stroke={theme.palette.primary.main}
                        dot={false}
                        name={translate(`generic.symbol.${symbol}`)}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                ) : (
                  translate('generic.noLogData')
                )}
              </Fragment>
            );
          })}
        </CardContent>
      </Card>
    );
  }
}

LoggerChartHour.propTypes = {
  data: PropTypes.object.isRequired,
  symbol: PropTypes.string.isRequired,
  translate: PropTypes.func,
  theme: PropTypes.object,
};

const enhance = compose(translate, withTheme)(LoggerChartHour);

export default enhance;

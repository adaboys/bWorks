import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CustomPage, withDataProvider, translate, CUSTOM } from 'bwork-libs';
import moment from 'moment-timezone';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import config from '../../Config';
import ChartQuality from './ChartQuality';
import FilterReportbworksSource from '../../components/common/filter/FilterReportbworksSource';
const styles = theme => {
  return {
    paper: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    widthFormGroup: { float: 'left', paddingRight: '8px' },
  };
};
class ChartSymbol extends Component {
  formRefFilter = React.createRef();
  defaultFilter = {
    timeRange: {
      type: 'hour',
      from: moment()
        .startOf('day')
        .toDate(),
      to: moment()
        .endOf('day')
        .toDate(),
    },
    sourceGroup: 'all',
    bworksSource: 'all',
  };
  selectAll = config.selectAll;
  state = {
    chartData: [],
    chartType: 'hour',
  };

  queryReport = filter => {
    // console.log('get data', filter, this.state.selectedbworksParam);
    if (!filter) return;
    let cloneFilter = Object.assign({}, filter);
    cloneFilter.bworksParabudgetId = this.state.selectedbworksParam;
    delete cloneFilter.sourceGroup;
    return this.statistic(cloneFilter);
  };

  statistic = async filter => {
    const { dataProvider } = this.props;
    let res = await dataProvider(CUSTOM, 'bworkssources', {
      method: 'get',
      subUrl: 'getDataChartStatisticQuality',
      query: { filter: JSON.stringify(filter) },
    });

    this.safeSetState({
      chartType: filter.timeRange.type,
      chartData: res.data,
    });
  };

  componentWillUnmount() {
    this.unmount = true;
  }

  safeSetState = state => {
    if (this.unmount) return;
    this.setState(state);
  };

  render() {
    const { title, theme } = this.props;
    const { chartData, chartType } = this.state;
    // console.log('render', this.state);
    return (
      <CustomPage title={title}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <FilterReportbworksSource
              formName={'wsrc-filter-statistic-quality-chart'}
              queryReport={this.queryReport}
              typeTimes={['hour', 'day']}
              defaultFilter={this.defaultFilter}
              flgMaterial={false}
              flgDetail={false}
              flgChart={true}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <Grid item xs={12} sm={12}>
              <ChartQuality data={chartData} type={chartType} />
            </Grid>
          </Grid>
        </Grid>
      </CustomPage>
    );
  }
}
ChartSymbol.propTypes = {
  theme: PropTypes.object,
  translate: PropTypes.func,
  title: PropTypes.string,
  classes: PropTypes.object,
  dataProvider: PropTypes.func,
  resource: PropTypes.string,
};
ChartSymbol.detaultProps = {
  hasList: true,
  hasShow: true,
  hasCreate: false,
  hasEdit: false,
};

const enhance = compose(connect(null, {}), translate, withDataProvider, withTheme, withStyles(styles));

export default enhance(ChartSymbol);

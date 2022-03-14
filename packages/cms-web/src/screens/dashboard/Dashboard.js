import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { CustomPage, withDataProvider, CUSTOM } from 'bwork-libs';
import { Grid, withTheme } from '@transactionfee-ui/core';
import TopStatistic from './widget/TopStatistic';
import Table from './table.js';
import LatestStatus from './LatestStatus';
import Chart from './chart.js';


class Dashboard extends React.Component {
  state = { currentStatus: [], baseOnFlowload: false };
  componentDidMount() {
    this.loadStatus();
  }

  loadStatus = () => {
    const { dataProvider } = this.props;
    let { baseOnFlowload } = this.state;
    dataProvider(CUSTOM, 'bworksSources', {
      subUrl: 'dashboard',
      method: 'get',
      query: { mode: baseOnFlowload ? 'dataload' : 'bworksSource' },
    }).then(res => {
      if (res) {
        this.setState({ currentStatus: res.data });
      }
    });
  };

  onChangeDisPlay = (e, value) => {
    this.setState(
      {
        baseOnFlowload: value,
      },
      this.loadStatus,
    );
  };

  render() {
    const { theme } = this.props;
    const { currentStatus, baseOnFlowload } = this.state;
    return (
      <CustomPage title={'generic.pages.dashboard'}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TopStatistic />
          </Grid>
          <Grid item xs={12} md={12} style={{ display: 'flex' }}>
          <Chart />
          </Grid>
          
        </Grid>
      </CustomPage>
    );
  }
}

Dashboard.propTypes = {
  dataProvider: PropTypes.func.isRequired,
  theme: PropTypes.object,
};

const enhance = compose(withDataProvider, withTheme);

export default enhance(Dashboard);

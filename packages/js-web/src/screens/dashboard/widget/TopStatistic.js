import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, withTheme } from '@transactionfee-ui/core';
import { withDataProvider } from 'bwork-libs';
import { compose } from 'recompose';
import TotalSourceCapacity from './totalSourceCapacity';
import bworksSourceCount from './bworksSourceCount';
import FactoryStatisticWidget from './FactoryStatisticWidget';
import bworksSourceStatistic from './bworksSourceStatistic';

class TopStatistic extends Component {
  componentDidMount() {}
  render() {
    const { theme } = this.props;
    return (
      <Grid container spacing={2}>
        <Grid item sm={6} md={3} xs={12}>
          <TotalSourceCapacity />
        </Grid>
        <Grid item sm={6} md={3} xs={12}>
          <bworksSourceCount />
        </Grid>
        <Grid item sm={6} md={3} xs={12}>
          <bworksSourceStatistic />
        </Grid>
        <Grid item sm={6} md={3} xs={12}>
          <FactoryStatisticWidget />
        </Grid>
      </Grid>
    );
  }
}
TopStatistic.propTypes = {
  dataProvider: PropTypes.func,
  theme: PropTypes.object,
};

const enhance = compose(withTheme, withDataProvider);
export default enhance(TopStatistic);

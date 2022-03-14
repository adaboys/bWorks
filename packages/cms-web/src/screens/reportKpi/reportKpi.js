import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { CustomPage, withDataProvider, CUSTOM } from 'bwork-libs';
import { Grid, withTheme } from '@transactionfee-ui/core';

import Chart from './chart.js';


class Dashboard extends React.Component {
 

  render() {
   
    return (
      <CustomPage title={'generic.pages.dashboard'}>
        <Grid container spacing={2}>
       
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

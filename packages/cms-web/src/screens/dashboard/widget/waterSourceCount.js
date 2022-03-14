import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { translate, withDataProvider, CUSTOM } from 'bwork-libs';
import { bworksSourceIcon } from '../../../styles/Icons';
import StatisticWidget from './StatisticWidget';

class bworksSourceCount extends Component {
  constructor(props) {
    super(props);
    const { translate } = props;
    this.state = {
      title: translate('generic.emp.widget.jobSeeker'),
      
      data: {
        totalInService: {
          label: translate('generic.emp.widget.today'),
          value: 15000,
          status: 'critical',
        },
        totalInMaintain: {
          label: translate('generic.emp.widget.thisMonth'),
          value: 230000,
          status: 'low',
        },
        totalInBackup: {
          label: translate('generic.emp.widget.thisYear'),
          value: 2530000,
          status: 'ok',
        },
      },
    };
  }


  componentDidMount() {
 //   this.dashboardData();
 
  }
  render() {
    return <StatisticWidget icon={<bworksSourceIcon />} {...this.state} />;
  }
}

bworksSourceCount.propTypes = {
  translate: PropTypes.func,
  dataProvider: PropTypes.any,
};
const enhance = compose(translate, withDataProvider);
export default enhance(bworksSourceCount);

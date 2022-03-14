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
      title: translate('generic.emp.widget.bidJob'),
      
      data: {
        totalInService: {
          label: translate('generic.emp.widget.total'),
          value: 10,
          status: 'critical',
        },
        totalInMaintain: {
          label: translate('generic.emp.widget.biddingJob'),
          value: 4,
          status: 'low',
        },
        totalInBackup: {
          label: translate('generic.emp.widget.offeredJob'),
          value: 6,
          status: 'ok',
        },
      },
    };
  }

  dashboardData = () => {
    this.props
      .dataProvider(CUSTOM, 'bworksSources', {
        subUrl: 'dashboard',
        method: 'get',
        query: { mode: 'widget' },
      })
      .then(res => {
        let totalBackupSource = res.data.filter(item => item.id == 'totalBackupSource')[0].value;
        let totalInOperationSource = res.data.filter(item => item.id == 'totalInOperationSource')[0].value;
        let totalInMaintainSource = res.data.filter(item => item.id == 'totalInMaintainSource')[0].value;
        let data = Object.assign({}, this.state.data);
        data.totalInService.value = totalInOperationSource;
        data.totalInMaintain.value = totalInMaintainSource;
        data.totalInBackup.value = totalBackupSource;
        this.setState(data);
      });
  };

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

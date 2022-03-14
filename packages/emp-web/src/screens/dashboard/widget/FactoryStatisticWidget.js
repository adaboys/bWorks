import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { translate, withDataProvider, CUSTOM } from 'bwork-libs';
import blue from '@material-ui/core/colors/blue';
import { FactoryIcon } from '../../../styles/Icons';
import StatisticWidget from './StatisticWidget';

class FlowLoggerStatisticWidget extends Component {
  constructor(props) {
    super(props);
    const { translate } = props;
    this.state = {
      title: translate('generic.emp.widget.fund'),
             
      data: {
        count: {
          label: translate('generic.emp.widget.current'),
          value: 150000,
          status: 'normal',
        },
        currentQuantity: { label: translate('generic.emp.widget.withdraw'), value: 80000, status: 'normal' },
        designCapacity: { label: translate('generic.emp.widget.deposit'), value: 230000, status: 'normal' },
      },
    };
  }

  /* loadStatus = () => {
        const { dataProvider } = this.props;
        const { baseOnFlowLogger } = this.state;
        dataProvider(CUSTOM, 'bworksSource', {
            subUrl: 'dashboard',
            method: 'get',
            query: { mode: baseOnFlowLogger ? 'FlowLogger' : 'Dma' },
        }).then(res => {
            if (res) {
                this.setState({ currentStatus: res.data });
            }
        });
    };*/

  dashboardData = () => {
    this.props
      .dataProvider(CUSTOM, 'bworksSources', {
        subUrl: 'dashboard',
        method: 'get',
        query: { mode: 'widget' },
      })
      .then(res => {
        let totalFactory = res.data.filter(item => item.id == 'totalFactory')[0].value;
        let currentQuantity = res.data.filter(item => item.id == 'totalCurrentDailyVolumeFactory')[0].value;
        let designCapacity = res.data.filter(item => item.id == 'totalDailyCapacityFactory')[0].value;
        let data = Object.assign({}, this.state.data);
        data.count.value = totalFactory;
        data.currentQuantity.value = currentQuantity;
        data.designCapacity.value = designCapacity;
        this.setState(data);
      });
  };

  componentDidMount() {
   // this.dashboardData();
  }
  render() {
    return <StatisticWidget iconStyle={{ backgroundColor: blue[500] }} icon={<FactoryIcon />} {...this.state} />;
  }
}

FlowLoggerStatisticWidget.propTypes = {
  translate: PropTypes.func,
  dataProvider: PropTypes.any,
};
const enhance = compose(translate, withDataProvider);
export default enhance(FlowLoggerStatisticWidget);

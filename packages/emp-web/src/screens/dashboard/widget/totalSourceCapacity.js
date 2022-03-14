import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { translate, withDataProvider, CUSTOM } from 'bwork-libs';
import green from '@material-ui/core/colors/green';
import { QuantityIcon } from '../../../styles/Icons';
import StatisticWidget from './StatisticWidget';

class TotalSourceCapacity extends Component {
  constructor(props) {
    super(props);
    const { translate } = props;
    this.state = {
      title: translate('generic.emp.widget.postedJob'),
     
      data: {
        day: { label: translate('generic.emp.widget.today'), value: 2, status: 'ok' },
        month: { label: translate('generic.emp.widget.thisMonth'), value: 8, status: 'low' },
        year: { label: translate('generic.emp.widget.thisYear'), value: 40, status: 'ok' },
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
        let totalDailyCapacity = res.data.filter(item => item.id == 'totalDailyCapacity')[0].value;
        let totalMonthlyCapacity = res.data.filter(item => item.id == 'totalMonthlyCapacity')[0].value;
        let totalYearlyCapacity = res.data.filter(item => item.id == 'totalYearlyCapacity')[0].value;
        let data = Object.assign({}, this.state.data);
        data.day.value = totalDailyCapacity;
        data.month.value = totalMonthlyCapacity;
        data.year.value = totalYearlyCapacity;
        this.setState(data);
      });
  };

  componentDidMount() {
  //  this.dashboardData();
  }
  render() {
    return <StatisticWidget iconStyle={{ backgroundColor: green[500] }} icon={<QuantityIcon />} {...this.state} />;
  }
}

TotalSourceCapacity.propTypes = {
  translate: PropTypes.func,
  dataProvider: PropTypes.any,
};
const enhance = compose(translate, withDataProvider);
export default enhance(TotalSourceCapacity);

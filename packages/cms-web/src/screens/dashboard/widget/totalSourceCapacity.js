import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { translate, withDataProvider, CUSTOM } from 'bwork-libs';
import green from '@material-ui/core/colors/green';
import { QuantityIcon } from '../../../styles/Icons';
import StatisticWidget from './StatisticWidget';
import Icon from '@material-ui/icons/WorkOutline'
class TotalSourceCapacity extends Component {
  constructor(props) {
    super(props);
    const { translate } = props;
    this.state = {
      title: translate('generic.emp.widget.employer'),
     
      data: {
        day: { label: translate('generic.emp.widget.today'), value: 540, status: 'ok' },
        month: { label: translate('generic.emp.widget.thisMonth'), value: 12000, status: 'low' },
        year: { label: translate('generic.emp.widget.thisYear'), value: 120000, status: 'ok' },
      },
    };
  }


  componentDidMount() {
  //  this.dashboardData();
  }
  render() {
    return <StatisticWidget iconStyle={{ backgroundColor: green[500] }} icon={<Icon />} {...this.state} />;
  }
}

TotalSourceCapacity.propTypes = {
  translate: PropTypes.func,
  dataProvider: PropTypes.any,
};
const enhance = compose(translate, withDataProvider);
export default enhance(TotalSourceCapacity);

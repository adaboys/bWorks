import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CustomPage } from 'bwork-libs';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
// import ReportFilter from './reportFilter';
import ChartAndList from './chartAndList';
import FilterReportbworksSource from '../../components/common/filter/FilterReportbworksSource';
import moment from 'moment-timezone';
const styles = theme => {
  return {
    paper: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  };
};

class ReportMain extends Component {
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
  state = {
    filterCommon: {},
  };

  refController = React.createRef();
  queryReport = filter => {
    filter.selectedbworksParam = { id: filter.selectedbworksParam };
    this.setState({ filterCommon: filter });
    this.refController.current.updateFilter();
  };
  refChart = React.createRef();
  handlePrint = () => {
    this.refChart.current.handlePrint(this.state.filterCommon);
  };

  render() {
    const { theme, title } = this.props;
    return (
      <CustomPage title={title}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            {/* <ReportFilter queryReport={this.queryReport} handlePrint={this.handlePrint} /> */}
            <FilterReportbworksSource
              formName={'wsrc-filter-report-quality-detail'}
              defaultFilter={this.defaultFilter}
              queryReport={this.queryReport}
              handlePrint={this.handlePrint}
              hasPrint={false}
              typeTimes={['hour', 'day', 'month', 'year']}
              showbworksParabudget={true}
              flgMaterial={false}
              flgDetail={true}
              flgChart={false}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <ChartAndList
              {...this.props}
              refChart={this.refChart}
              refController={this.refController}
              filter={this.state.filterCommon}
            />
          </Grid>
        </Grid>
      </CustomPage>
    );
  }
}
ReportMain.propTypes = {
  theme: PropTypes.object,
  title: PropTypes.string,
};
ReportMain.detaultProps = {
  hasList: true,
  hasShow: true,
  hasCreate: false,
  hasEdit: false,
};

const enhance = compose(connect(null, {}), withTheme, withStyles(styles));

export default enhance(ReportMain);

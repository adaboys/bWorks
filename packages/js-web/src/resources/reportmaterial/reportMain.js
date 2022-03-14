import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CustomPage } from 'bwork-libs';
import { withStyles, withTheme } from '@transactionfee-ui/core/styles';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import { Grid } from '@transactionfee-ui/core';
// import ReportFilter from './reportFilter';
import ChartAndList from './chartAndList';
import FilterReportbworksSource from '../../components/common/filter/FilterReportbworksSource';
import config from '../../Config';
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
    sourceGroup: 'all',
    bworksSource: 'all',
    selectType: '1',
    selecttransactionfee: config.selecttransactionfee[0].id,
    selectCondition: config.filterConditions.filter(item => item.id == '1')[0].conditions.map(item => item.id),
  };
  state = {
    filterCommon: {},
  };

  refController = React.createRef();
  queryReport = filter => {
    this.setState({ filterCommon: filter });
    this.refController.current.updateFilter();
  };
  // refChart = React.createRef();
  handlePrint = () => {
    this.refChart.current.handlePrint();
  };

  render() {
    const { theme, title } = this.props;
    return (
      <CustomPage title={title}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            {/* <ReportFilter queryReport={this.queryReport} handlePrint={this.handlePrint} /> */}
            <FilterReportbworksSource
              formName={'wsrc-filter-report-transactionfee-detail'}
              defaultFilter={this.defaultFilter}
              queryReport={this.queryReport}
              handlePrint={this.handlePrint}
              hasPrint={false}
              flgtransactionfee={true}
              flgDetail={false}
              flgChart={false}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <ChartAndList
              {...this.props}
              // refChart={this.refChart}
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

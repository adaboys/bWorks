import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlexFormFilter, translate, SelectInput, withDataProvider, CUSTOM, Button } from 'bwork-libs';
import { withStyles, withTheme } from '@transactionfee-ui/core/styles';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import { Grid, Paper } from '@transactionfee-ui/core';
import moment from 'moment-timezone';
import SelectHourDayMonthYearFromTo from '../../components/commons/SelectHourDayMonthYearFromTo';
import { StatisticButtonIcon, PrintIcon } from '../../styles/Icons';
import config from '../../Config';

const styles = theme => {
  return {
    paper: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  };
};

class ReportFilter extends Component {
  getAllbworksGroups = () => {
    this.props.dataProvider(CUSTOM, 'bworkssourcegroups', { filter: { fields: { id: true, name: true } } }).then(res => {
      this.setState({ allbworksSourceGroups: [...res.data, ...this.selectAll] });
    });
  };

  getAllbworksSources = () => {
    this.props
      .dataProvider(CUSTOM, 'bworkssources', { filter: { fields: { id: true, name: true, bworksSourceGroupId: true } } })
      .then(res => {
        this.setState({ allbworksSources: [...res.data, ...this.selectAll] });
      });
  };

  getbworksParams = () => {
    this.props
      .dataProvider(CUSTOM, 'bworksparabudgets', { filter: { fields: { id: true, name: true, symbol: true } } })
      .then(res => {
        this.setState({ allbworksParams: res.data });
      });
  };

  constructor(props) {
    super(props);
    this.selectAll = config.selectAll;

    this.state = {
      allbworksSourceGroups: [],
      allbworksSources: [],
      allbworksParams: [],
      bworksSourceChoices: [],
      selectedbworksSources: [],
      selectedSourcebworksGroup: null,
      selectedbworksSource: null,
      selectedbworksParam: null,
      selectedParamSymbol: null,
      typeTime: 'month',
      valueTimeFrom: moment(new Date())
        .subtract(6, 'month')
        .format('YYYY-MM'),
      valueTimeTo: moment(new Date()).format('YYYY-MM'),
      filter: {},
    };
  }

  UNSAFE_componentWillMount() {
    this.getAllbworksGroups();
    this.getAllbworksSources();
    this.getbworksParams();
  }

  onChangeSourceGroup = (e, val) => {
    this.setState({ selectedSourcebworksGroup: val });
    if (val === this.selectAll[0].id) {
      this.setState({ bworksSourceChoices: this.state.allbworksSources });
    } else {
      this.setState({
        bworksSourceChoices: this.state.allbworksSources.filter(
          item => item.bworksSourceGroupId === val || item.id === 'all',
        ),
      });
    }
  };

  onChangebworksSource = (e, val) => {
    if (val !== this.selectAll[0].id) {
      let selectedbworksSources = [];
      selectedbworksSources.push({ id: val });
      this.setState({ selectedbworksSources: selectedbworksSources });
    } else {
      let selectedbworksSources = this.state.bworksSourceChoices.map(({ bworksSourceGroupId, name, ...rest }) => rest);
      this.setState({ selectedbworksSources: selectedbworksSources });
    }
  };

  onChangeTime = dataTime => {
    this.setState({
      typeTime: dataTime.typeTime,
      valueTimeFrom: dataTime.valueTimeFrom,
      valueTimeTo: dataTime.valueTimeTo,
    });
  };

  onChangebworksParabudget = (e, val) => {
    let selectedParamSymbol = this.state.allbworksParams.filter(item => item.id == val)[0].symbol;
    this.setState({ selectedbworksParam: val, selectedParamSymbol: selectedParamSymbol });
  };

  submitFilter = () => {
    let filter = {};
    filter.selectedbworksSources = this.state.selectedbworksSources.filter(item => item.id !== this.selectAll[0].id);
    filter.selectedbworksParam = this.state.selectedbworksParam;
    filter.selectedParamSymbol = this.state.selectedParamSymbol.toLowerCase();
    filter.typeTime = this.state.typeTime;
    filter.valueTimeFrom = this.state.valueTimeFrom;
    filter.valueTimeTo = this.state.valueTimeTo;
    this.props.queryReport(filter);
    this.setState({ filter: filter });
  };
  render() {
    const { translate, handlePrint } = this.props;
    return (
      <Paper>
        <FlexFormFilter formName={'reportSummarizedQuality'}>
          <Grid middle container>
            <SelectInput
              source="sourceGroup"
              label={translate('resources.reporttransactionfees.fields.selectGroup')}
              choices={this.state.allbworksSourceGroups}
              style={{ marginLeft: '5px' }}
              onChange={this.onChangeSourceGroup}
            />
            <SelectInput
              source="bworksSource"
              label={translate('resources.reporttransactionfees.fields.selectSource')}
              choices={this.state.bworksSourceChoices}
              style={{ marginLeft: '5px' }}
              onChange={this.onChangebworksSource}
              disabled={!this.state.selectedSourcebworksGroup}
            />
            <SelectInput
              source="bworksParam"
              label={translate('resources.reportqualities.fields.selectParabudget')}
              choices={this.state.allbworksParams}
              style={{ marginLeft: '5px' }}
              defaultValue={'flow'}
              onChange={this.onChangebworksParabudget}
            />

            <SelectHourDayMonthYearFromTo
              onChangeTime={this.onChangeTime}
              sourceTypeTime={'typeTime'}
              sourceDayFrom={'dayFrom'}
              sourceDayTo={'dayTo'}
              sourceMonthFrom={'monthFrom'}
              sourceMonthTo={'monthTo'}
              sourceYearFrom={'yearFrom'}
              sourceYearTo={'yearTo'}
              sourceHour={'hour'}
            />
            <Button
              label={translate('generic.statistic.labelButtonStatistic')}
              style={{ marginTop: '35px', marginLeft: '5px', width: '120px', align: 'right' }}
              onClick={this.submitFilter}
            >
              <StatisticButtonIcon />
            </Button>
            <Button
              label={translate('generic.print')}
              style={{ marginTop: '35px', marginLeft: '0px', width: '50px', align: 'right', float: 'left' }}
              onClick={handlePrint}
              disabled={Object.keys(this.state.filter).length === 0}
            >
              <PrintIcon />
            </Button>
          </Grid>
        </FlexFormFilter>
      </Paper>
    );
  }
}

ReportFilter.propTypes = {
  translate: PropTypes.func,
  classes: PropTypes.object,
  queryReport: PropTypes.func,
  dataProvider: PropTypes.any,
  handlePrint: PropTypes.func,
};
ReportFilter.defaultProps = {
  hasList: true,
  hasShow: true,
  hasCreate: false,
  hasEdit: false,
};
const enhance = compose(connect(null, {}), withTheme, withStyles(styles), translate, withDataProvider);

export default enhance(ReportFilter);

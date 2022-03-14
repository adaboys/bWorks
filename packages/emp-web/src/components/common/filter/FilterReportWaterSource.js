import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  FlexFormFilter,
  translate,
  SelectInput,
  withDataProvider,
  CUSTOM,
  Button,
  TimeRangeInput,
  SelectArrayInput,
} from 'bwork-libs';
import { withStyles, withTheme } from '@transactionfee-ui/core/styles';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import { Grid, Paper } from '@transactionfee-ui/core';
import { StatisticButtonIcon, PrintIcon } from '../../../styles/Icons';
import config from '../../../Config';
import get from 'lodash/get';
import { change } from 'redux-form';

const styles = theme => {
  return {
    paper: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    widthFormGroup: { float: 'left', paddingRight: '8px' },
  };
};

class FilterReportbworksSource extends Component {
  formRefFilter = React.createRef();
  constructor(props) {
    super(props);
    this.selectAll = config.selectAll;
    this.conditionTypes = config.filterConditions.map(({ conditions, ...rest }) => rest);
    this.filterConditions = config.filterConditions;

    this.state = {
      allbworksSourceGroups: [],
      allbworksSources: [],
      allbworksParams: [],

      bworksSourceChoices: [],
      selectedbworksSources: [],
      selectedSourcebworksGroup: null,
      selectedbworksSource: null,

      filter: {},
    };
  }
  componentDidMount() {
    const { showbworksParabudget, flgtransactionfee } = this.props;

    this.getAllbworksGroups();
    this.getAllbworksSources();

    if (showbworksParabudget) {
      this.getbworksParams();
    }

    if (flgtransactionfee) {
      let conditionChoices = this.filterConditions.filter(item => item.id == '1')[0].conditions;
      this.setState({ conditionChoices: conditionChoices, selectedConditionType: '1' }, () => this.submitFilter());
    }
  }

  getAllbworksGroups = () => {
    let { dataProvider } = this.props;
    dataProvider(CUSTOM, 'bworkssourcegroups', { filter: { fields: { id: true, name: true } } }).then(res => {
      this.setState({ allbworksSourceGroups: [...res.data, ...this.selectAll] });
    });
  };

  getAllbworksSources = () => {
    let { dataProvider, showbworksParabudget } = this.props;
    dataProvider(CUSTOM, 'bworkssources', {
      filter: { fields: { id: true, name: true, bworksSourceGroupId: true } },
    }).then(res => {
      if (showbworksParabudget) {
        this.setState({
          bworksSourceChoices: [...res.data, ...this.selectAll],
          allbworksSources: [...res.data, ...this.selectAll],
          selectedbworksSources: [...res.data, ...this.selectAll],
        });
      } else {
        this.setState(
          {
            bworksSourceChoices: [...res.data, ...this.selectAll],
            allbworksSources: [...res.data, ...this.selectAll],
            selectedbworksSources: [...res.data, ...this.selectAll],
          },
          () => this.submitFilter(),
        );
      }
    });
  };

  onChangeSourceGroup = (e, val) => {
    let { formName, change } = this.props;
    let { allbworksSources } = this.state;
    this.setState({ selectedSourcebworksGroup: val });

    //select all
    if (val === this.selectAll[0].id) {
      this.setState({ bworksSourceChoices: allbworksSources });
    } else {
      this.setState({
        bworksSourceChoices: allbworksSources.filter(item => item.bworksSourceGroupId === val || item.id === 'all'),
        selectedbworksSources: allbworksSources.filter(item => item.bworksSourceGroupId === val || item.id === 'all'),
      });
    }
    change(formName, 'bworksSource', 'all');
  };

  onChangebworksSource = (e, val) => {
    let { bworksSourceChoices } = this.state;
    if (val !== this.selectAll[0].id) {
      let selectedbworksSources = [];
      selectedbworksSources.push({ id: val });
      this.setState({ selectedbworksSources: selectedbworksSources });
    } else {
      let selectedbworksSources = bworksSourceChoices.map(({ bworksSourceGroupId, name, ...rest }) => rest);
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
    this.setState({ selectedbworksParam: { id: val } });
  };

  getbworksParams = () => {
    let { formName, change, dataProvider } = this.props;
    dataProvider(CUSTOM, 'bworksparabudgets', { filter: { fields: { id: true, name: true, symbol: true } } }).then(
      res => {
        change(formName, 'bworksParam', res.data[0].id);
        this.setState(
          {
            allbworksParams: res.data,
            selectedbworksParam: res.data[0].id,
            selectedParamSymbol: res.data[0].symbol.toLowerCase(),
          },
          () => this.submitFilter(),
        );
      },
    );
  };

  onChangebworksParabudget = (e, val) => {
    let selectedParamSymbol = this.state.allbworksParams.filter(item => item.id == val)[0].symbol.toLowerCase();
    this.setState({ selectedbworksParam: val, selectedParamSymbol: selectedParamSymbol });
  };

  onChangeSelectType = (e, val) => {
    const { change, formName } = this.props;
    let conditionChoices = this.filterConditions.filter(item => item.id == val)[0].conditions;

    change(
      formName,
      'selectCondition',
      conditionChoices.map(item => item.id),
    ); // set default

    this.setState({ conditionChoices: conditionChoices, selectedConditionType: val });
  };
  onChangeSelecttransactionfee = (e, val) => {
    const { change, formName } = this.props;
    //let conditionChoices = this.filterConditions.filter(item => item.id == val)[0].conditions;

    change(formName, 'selecttransactionfee', val); // set default

    // this.setState({ conditionChoices: conditionChoices, selectedConditionType: val });
  };
  onChangeCondition = (e, val) => {
    this.setState({ selectedConditions: val });
  };

  submitFilter = () => {
    let { selectedbworksSources, selectedParamSymbol, selectedbworksParam } = this.state;
    let { showbworksParabudget, flgtransactionfee, flgDetail, flgChart, queryReport } = this.props;

    let filter = {};

    let tmp = get(this.formRefFilter, 'current.props.values');
    // console.log('before format filter: ', tmp);

    // filter of chart
    if (flgChart) {
      // console.log('after format filter chart: ', tmp);
      tmp.selectedParamSymbol = selectedParamSymbol;
      queryReport(tmp);
    }

    let arr = [];
    for (let i = 0; i < selectedbworksSources.length; i++) {
      let item = selectedbworksSources[i];
      if (item.id !== this.selectAll[0].id) arr.push({ id: item.id });
    }
    if (!arr.length) return;

    // filter of list
    if (flgDetail) {
      filter.selectedbworksSources = arr;
      filter.typeTime = get(tmp, 'timeRange.type');
      filter.valueTimeFrom = get(tmp, 'timeRange.from');
      filter.valueTimeTo = get(tmp, 'timeRange.to');
      if (showbworksParabudget) {
        filter.selectedbworksParam = selectedbworksParam; // id
        filter.selectedParamSymbol = selectedParamSymbol; // name
      }
      // console.log('after format filter detail: ', filter);
      queryReport(filter);
    }

    // filter of report transactionfee
    if (flgtransactionfee) {
      filter.selectedbworksSources = arr;
      filter.conditionType = get(tmp, 'selectType');
      filter.selectConditions = get(tmp, 'selectCondition');
      filter.selecttransactionfee = get(tmp, 'selecttransactionfee');
      // console.log('after format filter transactionfee: ', filter);
      queryReport(filter);
    }
    // this.setState({ filter: filter });
  };
  render() {
    const {
      showbworksParabudget,
      translate,
      handlePrint,
      classes,
      typeTimes,
      formName,
      hasPrint,
      defaultFilter,
      flgtransactionfee,
    } = this.props;

    let { allbworksSourceGroups, bworksSourceChoices, allbworksParams, filter, conditionChoices } = this.state;

    return (
      <Paper>
        <FlexFormFilter formRef={this.formRefFilter} formName={formName} defaultValue={defaultFilter}>
          <Grid middle container>
            <SelectInput
              source="sourceGroup"
              label={translate('resources.reporttransactionfees.fields.selectGroup')}
              choices={allbworksSourceGroups}
              style={{ marginLeft: '5px', marginTop: '25px' }}
              onChange={this.onChangeSourceGroup}
            />
            <SelectInput
              source="bworksSource"
              label={translate('resources.reporttransactionfees.fields.selectSource')}
              choices={bworksSourceChoices}
              style={{ marginLeft: '5px', marginTop: '25px' }}
              onChange={this.onChangebworksSource}
            />
            {showbworksParabudget && (
              <SelectInput
                source="bworksParam"
                label={translate('resources.reportqualities.fields.selectParabudget')}
                choices={allbworksParams}
                style={{ marginLeft: '5px', marginTop: '25px' }}
                defaultValue={'flow'}
                onChange={this.onChangebworksParabudget}
              />
            )}
            {flgtransactionfee && (
              <Fragment>
                <SelectInput
                  source="selecttransactionfee"
                  label={translate('resources.reporttransactionfees.fields.selecttransactionfee')}
                  choices={config.selecttransactionfee}
                  style={{ marginLeft: '5px' }}
                  onChange={this.onChangeSelecttransactionfee}
                />

                <SelectInput
                  source="selectType"
                  label={translate('resources.reporttransactionfees.fields.selectType')}
                  choices={this.conditionTypes}
                  style={{ marginLeft: '5px' }}
                  onChange={this.onChangeSelectType}
                />

                <SelectArrayInput
                  label={translate('resources.reporttransactionfees.fields.selectCondition')}
                  choices={conditionChoices}
                  source="selectCondition"
                  style={{ marginLeft: '5px', width: '200px' }}
                  onChange={this.onChangeCondition}
                />
              </Fragment>
            )}

            {!flgtransactionfee && (
              <TimeRangeInput
                style={{ marginLeft: '5px', marginTop: '25px' }}
                fullWidth
                label={''}
                types={typeTimes}
                source={'timeRange'}
                formClassName={classes.widthFormGroup}
              />
            )}
            <Button
              label={translate('generic.statistic.labelButtonStatistic')}
              style={{ marginTop: '35px', marginLeft: '0px', width: '120px', align: 'right' }}
              onClick={this.submitFilter}
            >
              <StatisticButtonIcon />
            </Button>

            {hasPrint && (
              <Button
                label={translate('generic.print')}
                style={{ marginTop: '35px', marginLeft: '0px', width: '50px', align: 'right', float: 'left' }}
                onClick={handlePrint}
                disabled={Object.keys(filter).length === 0}
              >
                <PrintIcon />
              </Button>
            )}
          </Grid>
        </FlexFormFilter>
      </Paper>
    );
  }
}

FilterReportbworksSource.propTypes = {
  translate: PropTypes.func,
  classes: PropTypes.object,
  queryReport: PropTypes.func,
  dataProvider: PropTypes.any,
  handlePrint: PropTypes.func,
  change: PropTypes.func,
  formName: PropTypes.string.isRequired,
  typeTimes: PropTypes.array,
  hasPrint: PropTypes.bool,
  formRef: PropTypes.object,

  defaultFilter: PropTypes.object.isRequired,

  showbworksParabudget: PropTypes.bool, // show parabudget bworks

  flgtransactionfee: PropTypes.bool, // filter of report transactionfee
  flgChart: PropTypes.bool, // filter of chart
  flgDetail: PropTypes.bool, // filter of list
};
FilterReportbworksSource.defaultProps = {
  hasList: true,
  hasShow: true,
  hasCreate: false,
  hasEdit: false,
  hasPrint: false,
  showbworksParabudget: false,

  flgDetail: false,
  flgtransactionfee: false,
  flgChart: false,
};
const enhance = compose(connect(null, { change }), withTheme, withStyles(styles), translate, withDataProvider);

export default enhance(FilterReportbworksSource);

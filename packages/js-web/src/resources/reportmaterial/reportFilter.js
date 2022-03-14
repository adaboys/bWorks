import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  FlexFormFilter,
  translate,
  SelectInput,
  withDataProvider,
  CUSTOM,
  Button,
  SelectArrayInput,
} from 'bwork-libs';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import { Grid, Paper } from '@material-ui/core';
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

  constructor(props) {
    super(props);
    this.selectAll = config.selectAll;
    this.filterConditions = config.filterConditions;
    this.conditionTypes = config.filterConditions.map(({ conditions, ...rest }) => rest);
    this.state = {
      allbworksSourceGroups: [],
      allbworksSources: [],
      bworksSourceChoices: [],
      conditionChoices: [],
      selectedbworksSources: [],
      selectedSourcebworksGroup: null,
      selectedbworksSource: null,
      selectedConditionType: null,
      selectedConditions: [],
      filter: {},
    };
  }

  UNSAFE_componentWillMount() {
    this.getAllbworksGroups();
    this.getAllbworksSources();
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
      this.setState({ selectedbworksSources: this.state.bworksSourceChoices });
    }
  };

  onChangeSelectType = (e, val) => {
    let conditionChoices = this.filterConditions.filter(item => item.id == val)[0].conditions;
    this.setState({ conditionChoices: conditionChoices, selectedConditionType: val });
  };

  onChangeCondition = (e, val) => {
    this.setState({ selectedConditions: val });
  };

  submitFilter = () => {
    let filter = {};
    filter.selectedbworksSources = this.state.selectedbworksSources.filter(item => item.id !== this.selectAll[0].id);
    filter.conditionType = this.state.selectedConditionType;
    filter.selectConditions = this.state.selectedConditions;
    this.props.queryReport(filter);
    this.setState({ filter: filter });
  };

  render() {
    const { translate, handlePrint } = this.props;
    return (
      <Paper>
        <FlexFormFilter formName={'reportMaterialFilter'}>
          <Grid middle container>
            <SelectInput
              source="sourceGroup"
              label={translate('resources.reportmaterials.fields.selectGroup')}
              choices={this.state.allbworksSourceGroups}
              style={{ marginLeft: '5px' }}
              onChange={this.onChangeSourceGroup}
            />
            <SelectInput
              source="bworksSource"
              label={translate('resources.reportmaterials.fields.selectSource')}
              choices={this.state.bworksSourceChoices}
              style={{ marginLeft: '5px' }}
              onChange={this.onChangebworksSource}
              disabled={!this.state.selectedSourcebworksGroup}
            />
          </Grid>
          <Grid middle container>
            <SelectInput
              source="selectType"
              label={translate('resources.reportmaterials.fields.selectType')}
              choices={this.conditionTypes}
              style={{ marginLeft: '5px' }}
              onChange={this.onChangeSelectType}
            />

            <SelectArrayInput
              label={translate('resources.reportmaterials.fields.selectCondition')}
              choices={this.state.conditionChoices}
              source="selectCondition"
              style={{ marginLeft: '5px' }}
              disabled={!this.state.selectedConditionType}
              onChange={this.onChangeCondition}
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

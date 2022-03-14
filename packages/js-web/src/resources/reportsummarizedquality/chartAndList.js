import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  translate,
  List,
  Datagrid,
  TextField,
  CUSTOM,
  withDataProvider,
  DateField,
  NumberField,
  showDialog,
  PdfView,
} from 'bwork-libs';
import { Grid, Paper } from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import format from '../../util/format';
// import { StatisticButtonIcon } from '../../styles/Icons';
import config from '../../Config';
// import PdfViewData from '../reportflow/pdfView';

const styles = theme => {
  return {
    paper: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    relative: {
      position: 'relative !important',
    },
  };
};

class ChartAndList extends Component {
  state = {
    sumTotalbworksSource: 0,
    minValue: 0,
    maxValue: 0,
    avgValue: 0,
    sourceList: [],
    data: [],
    filter: {},
  };
  componentDidMount() {
    const { refChart } = this.props;
    if (refChart) {
      refChart.current = this;
    }
  }
  handlePrint() {
    this.props.showDialog(
      <PdfView name="generic.report.titleReportSummarizedQuality">{/* <PdfViewData /> */}</PdfView>,
    );
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    let { report, filter } = nextProps;
    if (report && report.list && report.data && report.list.ids.length > 0) {
      let sumTotalbworksSource = 0,
        minValue = 0,
        maxValue = 0,
        avgValue = 0;
      let avgFunc = array => array.reduce((a, b) => a + b, 0) / array.length;
      let ids = report.list.ids;
      let data = ids.map(id => report.data[id]);
      let rawSourceList = data.map(item => item.bworksSourceName);
      let sourceList = Array.from(new Set(rawSourceList));
      let minList = data.map(item => item.minValue);
      let avgList = data.map(item => item.avgValue);
      let maxList = data.map(item => item.maxValue);
      sumTotalbworksSource = sourceList.length;
      minValue = Math.min(...minList);
      maxValue = Math.max(...maxList);
      avgValue = avgFunc(avgList);

      this.setState({
        sumTotalbworksSource: sumTotalbworksSource,
        minValue: minValue,
        maxValue: maxValue,
        avgValue: avgValue,
        sourceList: sourceList,
        data: data,
        filter: filter,
      });
    }
  }
  // conduct data and print pdf
  handlePrint = () => {
    const { sumTotalbworksSource, minValue, avgValue, maxValue, data, sourceList, filter } = this.state;
    const { translate } = this.props;
    let templateData = {};
    templateData.reportName = translate('generic.report.titleReportSummarizedQuality');
    templateData.reportFilter = `${sourceList} || ${filter.selectedParamSymbol} ||${filter.valueTimeFrom}-${filter.valueTimeTo}`;
    templateData.sumData01 = translate('resources.reportsummarizedqualities.sumbworksSource', {
      val: format.number(sumTotalbworksSource, 2),
    });
    templateData.sumData02 = translate('resources.reportsummarizedqualities.minValue', {
      val: format.number(minValue, 2),
    });
    templateData.sumData03 = translate('resources.reportsummarizedqualities.avgValue', {
      val: format.number(avgValue, 2),
    });
    templateData.sumData04 = translate('resources.reportsummarizedqualities.maxValue', {
      val: format.number(maxValue, 2),
    });
    templateData.tableHeader = {
      column01: translate('resources.reportsummarizedqualities.fields.bworksSourceName'),
      column02: translate('resources.reportsummarizedqualities.fields.bworksParabudgetName'),
      column03: translate('resources.reportsummarizedqualities.fields.logTime'),
      column04: translate('resources.reportsummarizedqualities.fields.minValue'),
      column05: translate('resources.reportsummarizedqualities.fields.avgValue'),
      column06: translate('resources.reportsummarizedqualities.fields.maxValue'),
    };

    templateData.data = data.map(item =>
      Object.assign({}, item, { logTime: moment(item.logTime).format('DD-MM-YYYY HH:mm') }),
    );
    this.props
      .dataProvider(CUSTOM, 'ReportEngines', {
        method: 'POST',
        subUrl: 'generatePDF',
        body: {
          data: templateData,
          templateId: 'SumQualityReportTemplate',
          templateModel: 'SourceTemplate',
          fileModel: 'SourceFile',
        },
      })
      .then(res => this.props.showDialog(<PdfView url={`/api/PDFGetters/getPDF?filename=${res.data}`} />));
  };
  dataForChart() {
    let { sourceList, data } = this.state;
    let legendPayload = [];
    let scatterArray = [];
    let chartData = {};
    let key;
    switch (this.state.filter.typeTime) {
      case 'hour': {
        key = 'H:mm';
        break;
      }
      case 'day': {
        key = 'DD/MM/YYYY';
        break;
      }
      case 'month': {
        key = 'MM/YYYY';
        break;
      }
      case 'year': {
        key = 'MM/YYYY';
        break;
      }
    }

    let dataTemp = data.map(item => Object.assign({}, item, { logTime: moment(item.logTime).format(key) }));
    for (let i = 0; i < sourceList.length; i++) {
      legendPayload.push({ id: sourceList[i], value: sourceList[i], type: 'cross', color: config.color.basicChart[i] });
      scatterArray.push(
        <Scatter
          name={sourceList[i]}
          data={dataTemp.filter(item => item.bworksSourceName == sourceList[i])}
          fill={config.color.basicChart[i]}
          line
          shape="cross"
        />,
      );
    }

    chartData.legendPayload = legendPayload;
    chartData.scatterArray = scatterArray;
    return chartData;
  }

  render() {
    const { classes, translate, refController } = this.props;
    const { sumTotalbworksSource, minValue, avgValue, maxValue } = this.state;
    // let optionFormat;
    let subTitle = [
      {
        id: 1,
        content: translate('resources.reportsummarizedqualities.sumbworksSource', {
          val: format.number(sumTotalbworksSource, 2),
        }),
      },
      {
        id: 2,
        content: translate('resources.reportsummarizedqualities.minValue', { val: format.number(minValue, 2) }),
      },
      {
        id: 3,
        content: translate('resources.reportsummarizedqualities.avgValue', { val: format.number(avgValue, 2) }),
      },
      {
        id: 4,
        content: translate('resources.reportsummarizedqualities.maxValue', { val: format.number(maxValue, 2) }),
      },
    ];
    return (
      <Grid container>
        {/* <Grid item xs={12} sm={12}>
          <Paper>
            <ResponsiveContainer width="99%" aspect={3}>
              <ScatterChart margin={{ top: 20, right: 10, left: 10, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  type="category"
                  dataKey="logTime"
                  name={translate('resources.reportsummarizedqualities.time')}
                  padding={{ bottom: 20 }}
                  label={{
                    value: translate('resources.reportsummarizedqualities.time'),
                    position: 'insideBottomRight',
                    fontSize: '0.8em',
                    offset: 0,
                  }}
                  tick={{ fontSize: '0.8em' }}
                />
                <YAxis
                  type="number"
                  dataKey="avgValue"
                  name={translate('resources.reportsummarizedqualities.value')}
                  padding={{ top: 20 }}
                  label={{
                    value: translate('resources.reportsummarizedqualities.value'),
                    position: 'top',
                    fontSize: '0.8em',
                    offset: 0,
                  }}
                  tick={{ fontSize: '0.8em' }}
                />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend payload={this.dataForChart().legendPayload} />
                {this.dataForChart().scatterArray}
              </ScatterChart>
            </ResponsiveContainer>
          </Paper>
        </Grid> */}
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <List
              {...this.props}
              refController={refController}
              className="subheader"
              resource="reportsummarizedqualities"
              fixUrl="bworksSources/reportSummarizedQuality"
              title={translate('generic.report.titleReportSummarizedQuality')}
              bulkActions={false}
              subTitle={subTitle}
              sort={{ field: 'logTime', order: 'DESC' }}
              perPage={25}
            >
              <Datagrid>
                <TextField source="bworksSourceName" />
                <TextField source="bworksParabudgetName" />
                <DateField source="logTime" showTime={this.state.filter.typeTime == 'hour'} />
                <NumberField source="minValue" />
                <NumberField source="avgValue" />
                <NumberField source="maxValue" />
              </Datagrid>
            </List>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

ChartAndList.propTypes = {
  translate: PropTypes.func,
  classes: PropTypes.object,
  filter: PropTypes.object,
  refController: PropTypes.any,
  dataProvider: PropTypes.any,
};

const mapStateToProps = state => {
  return {
    report: state.admin.resources.reportsummarizedqualities,
  };
};

const enhance = compose(
  connect(mapStateToProps, { showDialog }),
  withTheme,
  withStyles(styles),
  translate,
  withDataProvider,
);

export default enhance(ChartAndList);

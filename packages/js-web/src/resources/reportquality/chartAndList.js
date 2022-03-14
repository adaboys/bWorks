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
  Storage,
} from 'bwork-libs';
// import isEqual from 'lodash/isEqual';
// import groupBy from 'lodash/groupBy';
import { Grid, Paper } from '@transactionfee-ui/core';
import { withStyles, withTheme } from '@transactionfee-ui/core/styles';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
// import moment from 'moment-timezone';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import format from '../../util/format';
// import config from '../../Config';
import ColoredFunctionField from './colorField';
import get from 'lodash/get';

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
    numberAlertCriticalHigh: 0,
    numberAlertHigh: 0,
    numberAlertLow: 0,
    numberAlertCriticalLow: 0,
    sourceList: [],
    data: [],
    filter: {},
  };

  // componentDidMount() {
  //   const { refChart } = this.props;
  //   if (refChart) {
  //     refChart.current = this;
  //   }
  // }

  // componentDidUpdate = prevProps => {
  //   // Only update the chart when one of the filter has been changed of arguments
  //   // Fetch data without limit
  //   const { filter: prevFilter = {} } = prevProps;
  //   const { filter: currentFilter = {}, dataProvider } = this.props;
  //   if (
  //     !isEqual(prevFilter.selectedParamSymbol, currentFilter.selectedParamSymbol) ||
  //     !isEqual(prevFilter.selectedbworksParam, currentFilter.selectedbworksParam) ||
  //     !isEqual(prevFilter.selectedbworksSources, currentFilter.selectedbworksSources) ||
  //     !isEqual(prevFilter.typeTime, currentFilter.typeTime) ||
  //     !isEqual(prevFilter.valueTimeFrom, currentFilter.valueTimeFrom) ||
  //     !isEqual(prevFilter.valueTimeTo, currentFilter.valueTimeTo)
  //   ) {
  //     dataProvider(CUSTOM, 'bworksSources', {
  //       method: 'GET',
  //       subUrl: 'reportQuality',
  //       fullUrl: true,
  //       filter: { where: currentFilter, order: ['logTime ASC'], skip: 0, limit: 100000 },
  //     }).then(({ data }) => {
  //       const rawSourceList = data.map(item => item.bworksSourceName);
  //       const sourceList = Array.from(new Set(rawSourceList));
  //       const numberAlertCriticalHigh = data.filter(item => item.alert == '1').length;
  //       const numberAlertHigh = data.filter(item => item.alert == '2').length;
  //       const numberAlertLow = data.filter(item => item.alert == '3').length;
  //       const numberAlertCriticalLow = data.filter(item => item.alert == '4').length;
  //       const sumTotalbworksSource = sourceList.length || 0;
  //       const chartData = this.processDataForChart(sourceList, data, currentFilter);
  //       this.setState({
  //         sumTotalbworksSource: sumTotalbworksSource,
  //         numberAlertCriticalHigh: numberAlertCriticalHigh,
  //         numberAlertHigh: numberAlertHigh,
  //         numberAlertLow: numberAlertLow,
  //         numberAlertCriticalLow: numberAlertCriticalLow,
  //         sourceList,
  //         data: chartData,
  //         filter: currentFilter,
  //       });
  //     });
  //   }
  // };

  // clusterRecordsByTimeLevel = (data, comparedKey, typeTime, valueTimeFrom, valueTimeTo) => {
  //   let key = null;
  //   let formattedData = data;
  //   let durationTimeUnit = null;
  //   let tooltipTimeFormat = null;
  //   let tooltipTimeEndFormat = null;
  //   if (typeTime === 'day') {
  //     key = 'YYYY-MM-DD';
  //     durationTimeUnit = 'day';
  //     tooltipTimeFormat = 'DD/MM/YYYY HH:mm';
  //     tooltipTimeEndFormat = 'HH:mm';
  //     if (moment(valueTimeTo).diff(moment(valueTimeFrom), 'day') <= 15) {
  //       key = 'DD/MM/YYYY HH:00';
  //       durationTimeUnit = 'hour';
  //     } else {
  //       key = 'DD/MM/YYYY';
  //     }
  //   } else if (typeTime === 'month') {
  //     key = 'YYYY-MM';
  //     durationTimeUnit = 'month';
  //     tooltipTimeFormat = 'DD/MM/YYYY';
  //     tooltipTimeEndFormat = 'DD/MM/YYYY';
  //     if (moment(valueTimeTo, key).diff(moment(valueTimeFrom, key), 'month') <= 36) {
  //       key = 'DD/MM/YYYY';
  //       durationTimeUnit = 'day';
  //       tooltipTimeFormat = 'DD/MM/YYYY HH:mm';
  //       tooltipTimeEndFormat = 'DD/MM/YYYY HH:mm';
  //     } else {
  //       key = 'MM/YYYY';
  //     }
  //   } else if (typeTime === 'year') {
  //     key = 'YYYY';
  //     durationTimeUnit = 'year';
  //     tooltipTimeFormat = 'MM/YYYY';
  //     tooltipTimeEndFormat = 'MM/YYYY';
  //     if (moment(valueTimeTo, key).diff(moment(valueTimeFrom, key), 'year') <= 80) {
  //       key = 'MM/YYYY';
  //       durationTimeUnit = 'month';
  //       tooltipTimeFormat = 'DD/MM/YYYY';
  //       tooltipTimeEndFormat = 'DD/MM/YYYY';
  //     }
  //   }
  //   const groupedData = groupBy(data, ({ logTime }) => moment(logTime).format(key));
  //   formattedData = Object.entries(groupedData)
  //     .map(([time, groupedRecords]) => {
  //       if (groupedRecords.length > 0) {
  //         let minRecord = groupedRecords[0];
  //         let maxRecord = groupedRecords[0];
  //         for (let record of groupedRecords) {
  //           if (record[comparedKey] > maxRecord[comparedKey]) {
  //             maxRecord = record;
  //           }
  //           if (record[comparedKey] < minRecord[comparedKey]) {
  //             minRecord = record;
  //           }
  //         }
  //         return { logTime: time, [comparedKey]: [minRecord[comparedKey], maxRecord[comparedKey]] };
  //       }
  //       return { [comparedKey]: [] };
  //     })
  //     .filter(datum => datum[comparedKey].length > 0);
  //   return { formattedData, xAxisTimeFormat: key, durationTimeUnit, tooltipTimeFormat, tooltipTimeEndFormat };
  // };

  // processDataForChart = (sourceList, data, filter) => {
  //   if (!data.length) {
  //     return { components: [], formattedData: [] };
  //   }
  //   const legendPayload = [];
  //   const components = [];
  //   const chartData = {};
  //   const { valueTimeFrom, valueTimeTo, selectedParamSymbol, typeTime } = filter;
  //   const filteredData = data.filter(item => item.alert !== '5');

  //   // Cluster data by time threshold
  //   const {
  //     formattedData,
  //     xAxisTimeFormat,
  //     durationTimeUnit,
  //     tooltipTimeFormat,
  //     tooltipTimeEndFormat,
  //   } = this.clusterRecordsByTimeLevel(filteredData, selectedParamSymbol, typeTime, valueTimeFrom, valueTimeTo);
  //   const timeFormattedData = formattedData.map(item => ({
  //     ...item,
  //     logTime: moment(item.logTime, xAxisTimeFormat).unix(),
  //   }));

  //   for (let i = 0; i < sourceList.length; i++) {
  //     legendPayload.push({ id: sourceList[i], value: sourceList[i], color: config.color.basicChart[i] });
  //     components.push(<Area dataKey={selectedParamSymbol} stroke={config.color.basicChart[i]} />);
  //   }

  //   chartData.legendPayload = legendPayload;
  //   chartData.components = components;
  //   chartData.formattedData = timeFormattedData.sort((a, b) => a.logTime - b.logTime);
  //   chartData.xAxisTimeFormat = xAxisTimeFormat;
  //   chartData.durationTimeUnit = durationTimeUnit;
  //   chartData.tooltipTimeFormat = tooltipTimeFormat;
  //   chartData.tooltipTimeEndFormat = tooltipTimeEndFormat;
  //   return chartData;
  // };

  // conduct data and print pdf
  handlePrint = filter => {
    const {
      sumTotalbworksSource,
      numberAlertCriticalHigh,
      numberAlertHigh,
      numberAlertLow,
      numberAlertCriticalLow,
      sourceList,
    } = this.state;
    const { translate } = this.props;
    let templateData = {};
    templateData.reportName = translate('generic.report.titleReportQuality');
    templateData.reportFilter = `${sourceList} || ${filter.selectedParamSymbol} ||${filter.valueTimeFrom}-${filter.valueTimeTo}`;
    templateData.sumData01 = translate('resources.reportqualities.sumbworksSource', {
      val: format.number(sumTotalbworksSource, 2),
    });
    templateData.sumData02 = translate('resources.reportqualities.numberAlertCriticalHigh', {
      val: format.number(numberAlertCriticalHigh, 2),
    });
    templateData.sumData03 = translate('resources.reportqualities.numberAlertHigh', {
      val: format.number(numberAlertHigh, 2),
    });
    templateData.sumData04 = translate('resources.reportqualities.numberAlertLow', {
      val: format.number(numberAlertLow, 2),
    });
    templateData.sumData05 = translate('resources.reportqualities.numberAlertCriticalLow', {
      val: format.number(numberAlertCriticalLow, 2),
    });
    templateData.tableHeader = {
      column01: translate('resources.reportqualities.fields.bworksSourceName'),
      column02: translate('resources.reportqualities.fields.bworksParabudgetName'),
      column03: translate('resources.reportqualities.fields.logTime'),
      column04: translate('resources.reportqualities.fields.alert'),
    };

    // templateData.data = data.map(item =>
    //   Object.assign(
    //     {},
    //     item,
    //     { logTime: moment(item.logTime).format('DD-MM-YYYY HH:mm') },
    //     { alert: translate(`resources.reportqualities.alert${item.alert}`) },
    //   ),
    // );
    const alertValues = Array.from({ length: 5 }, (v, i) => i + 1);
    templateData.alert = alertValues.map(item => translate(`resources.reportqualities.alert${item}`));
    this.props
      .dataProvider(CUSTOM, 'ReportEngines', {
        method: 'POST',
        subUrl: 'generatePDFnoLimit',
        body: {
          data: templateData,
          templateId: 'QualityReportTemplate',
          templateModel: 'SourceTemplate',
          fileModel: 'SourceFile',
          filter: { where: filter, order: ['logtime DESC '], limit: 1000 },
          model: 'bworksSource',
          remoteMethod: 'reportQuality',
        },
      })
      .then(res => {
        const accessToken = Storage.getToken();
        this.props.showDialog(
          <PdfView url={`/api/PDFGetters/getPDF?filename=${res.data}&access_token=${accessToken}`} />,
        );
      });
  };
  render() {
    // let a = 'hh';
    const { classes, translate, filter, refController } = this.props;
    const {
      sumTotalbworksSource,
      numberAlertCriticalHigh,
      numberAlertHigh,
      numberAlertLow,
      numberAlertCriticalLow,
      // data: {
      //   components,
      //   formattedData,
      //   legendPayload,
      //   xAxisTimeFormat,
      //   durationTimeUnit,
      //   tooltipTimeFormat,
      //   tooltipTimeEndFormat,
      // },
    } = this.state;
    // let optionFormat;
    let subTitle = [
      {
        id: 1,
        content: translate('resources.reportqualities.sumbworksSource', { val: format.number(sumTotalbworksSource, 2) }),
      },
      {
        id: 2,
        content: translate('resources.reportqualities.numberAlertCriticalHigh', {
          val: format.number(numberAlertCriticalHigh, 2),
        }),
      },
      {
        id: 3,
        content: translate('resources.reportqualities.numberAlertHigh', { val: format.number(numberAlertHigh, 2) }),
      },
      {
        id: 4,
        content: translate('resources.reportqualities.numberAlertLow', { val: format.number(numberAlertLow, 2) }),
      },
      {
        id: 5,
        content: translate('resources.reportqualities.numberAlertCriticalLow', {
          val: format.number(numberAlertCriticalLow, 2),
        }),
      },
    ];
    const selectedParamSymbol = get(this.props.filter, 'selectedParamSymbol', '');
    return (
      <Grid>
        {/* <Grid item xs={12} sm={12}>
          <Paper>
            <ResponsiveContainer width="99%" aspect={3}>
              <AreaChart margin={{ top: 20, right: 10, left: 10, bottom: 10 }} data={formattedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  type="number"
                  domain={['dataMin', 'dataMax']}
                  dataKey="logTime"
                  name={translate('resources.reportqualities.time')}
                  padding={{ bottom: 20 }}
                  label={{
                    value: translate('resources.reportqualities.time'),
                    position: 'insideBottomRight',
                    fontSize: '0.8em',
                    offset: 0,
                  }}
                  tick={{ fontSize: '0.8em' }}
                  tickFormatter={logTime =>
                    `${moment
                      .unix(logTime)
                      .startOf(durationTimeUnit)
                      .format(xAxisTimeFormat)}`
                  }
                  scale={'time'}
                />
                <YAxis
                  type="number"
                  dataKey={this.state.filter.selectedParamSymbol}
                  name={translate('resources.reportqualities.value')}
                  padding={{ top: 20 }}
                  label={{
                    value: translate('resources.reportqualities.value'),
                    position: 'top',
                    fontSize: '0.8em',
                    offset: 0,
                  }}
                  tick={{ fontSize: '0.8em' }}
                />
                <Tooltip
                  cursor={{ strokeDasharray: '3 3' }}
                  labelFormatter={logTime =>
                    `${moment
                      .unix(logTime)
                      .startOf(durationTimeUnit)
                      .format(tooltipTimeFormat)} ~ ${moment
                      .unix(logTime)
                      .endOf(durationTimeUnit)
                      .format(tooltipTimeEndFormat)}`
                  }
                />
                <Legend payload={legendPayload} />
                {components}
              </AreaChart>
            </ResponsiveContainer>
          </Paper>
        </Grid> */}
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <List
              {...this.props}
              refController={refController}
              className="subheader"
              resource="reportqualities"
              fixUrl="bworksSources/reportQuality"
              title={translate('generic.report.titleReportQuality')}
              bulkActions={false}
              subTitle={subTitle}
              sort={{ field: 'logTime', order: 'DESC' }}
              perPage={25}
              customFilter={{ where: filter, sort: { field: 'logTime', order: 'DESC' } }}
              exportExcelPermission={{ name: 'reportQuality', action: 'export' }}
              disableExportExcel={Object.keys(filter).length === 0}
              rootModel={'ReportbworksSourceQuality'}
              sourcesAndTranslations={{
                rootFields: {
                  bworksSourceName: { header: translate('resources.reportqualities.fields.bworksSourceName') },
                  bworksParabudgetName: { header: translate('resources.reportqualities.fields.bworksParabudgetName') },
                  logTime: { header: translate('resources.reportqualities.fields.logTime') },
                  [selectedParamSymbol]: { header: selectedParamSymbol },
                  alert: {
                    header: translate('resources.reportqualities.fields.alert'),
                    value: [...Array(5).keys()].reduce(
                      (acc, val) => ({ ...acc, [val + 1]: translate(`resources.reportqualities.alert${val + 1}`) }),
                      {},
                    ),
                  },
                },
              }}
            >
              <Datagrid>
                <TextField source="bworksSourceName" />
                <TextField source="bworksParabudgetName" />
                {/* <DateField source="logTime" showTime={this.state.filter.typeTime == 'hour'}  /> */}
                <DateField source="logTime" showTime />
                <NumberField source={selectedParamSymbol} label={translate(`generic.symbol.${selectedParamSymbol}`)} />
                <ColoredFunctionField
                  source="alert"
                  render={record => translate(`resources.reportqualities.alert${record.alert}`)}
                />
              </Datagrid>
            </List>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

ChartAndList.propTypes = {
  classes: PropTypes.object,
  dataProvider: PropTypes.any,
  filter: PropTypes.object,
  refChart: PropTypes.any,
  refController: PropTypes.any,
  showDialog: PropTypes.any,
  translate: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    report: state.admin.resources.reportqualities,
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

{
  /* <ExportExcelButton sources={['name', 'status', 'lastbudgetNumber', {GeoWard: {id: 'wardId', fields: ['fullName', 'description']}}]} rootModel={"employer"} /> */
}

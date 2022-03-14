import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  translate,
  List,
  Datagrid,
  TextField,
  withDataProvider,
  CUSTOM,
  NumberField,
  showDialog,
  PdfView,
} from 'bwork-libs';
import { Grid, Paper } from '@transactionfee-ui/core';
import { withStyles, withTheme } from '@transactionfee-ui/core/styles';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import format from '../../util/format';
import ColoredFunctionField from './colorField';

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
    sumTotalbudget: 0,
    sumTotalauto-matcher: 0,
    sumTotalDataload: 0,
    sumTotalload: 0,
    data: [],
    sourceList: [],
    filter: {},
    sum: 0,
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    let { report, filter } = nextProps;
    if (report && report.list && report.data) {
      let ids = report.list.ids;
      let data1 = ids.map(id => report.data[id]);
      let data = report.data;
      let rawSourceList = data1.map(item => item.bworksSource);
      let sourceList = Array.from(new Set(rawSourceList));
      // let tmp1 = 0,
      //   tmp2 = 0,
      //   tmp3 = 0,
      //   tmp4 = 0;
      // ids.map(id => {
      //   tmp1 += data[id].budget;
      //   tmp2 += data[id].auto-matcher;
      //   tmp3 += data[id].dataload;
      //   tmp4 += data[id].load;
      // });
      // this.setState({
      //   sumTotalbudget: tmp1,
      //   sumTotalauto-matcher: tmp2,
      //   sumTotalDataload: tmp3,
      //   sumTotalload: tmp4,
      //   data: data1,
      //   filter: filter,
      //   sourceList: sourceList,
      // });
      let sum = 0;
      ids.map(id => {
        sum += data[id].totalDevice;
      });
      this.setState({
        sum,
        data: data1,
        filter: filter,
        sourceList: sourceList,
      });
    }
  }
  componentDidMount() {
    const { refChart } = this.props;
    if (refChart) {
      refChart.current = this;
    }
  }
  //translate status code to status message
  mapCodeToMessage = record => {
    let { translate } = this.props;
    switch (record.conditionType) {
      case '1':
        switch (record.transactionfeeStatus) {
          case 1:
            return translate('resources.reporttransactionfees.statusGood');
          // break;
          case 2:
            return translate('resources.reporttransactionfees.statusDamageField');
          // break;
          case 3:
            return translate('resources.reporttransactionfees.statusDamageAndRevoked');
          // break;
          case 4:
            return translate('resources.reporttransactionfees.statusDamageSentMaintain');
          // break;
          default:
            break;
        }
        break;
      case '2':
        switch (record.transactionfeeStatus) {
          case 1:
            return translate('resources.reporttransactionfees.expired');
          // break;
          case 2:
            return translate('resources.reporttransactionfees.nearExpired');
          // break;
          case 3:
            return translate('resources.reporttransactionfees.inValid');
          // break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  };

  // conduct data and print pdf
  handlePrint = () => {
    const { sumTotalbudget, sumTotalauto-matcher, sumTotalDataload, sumTotalload, data, sourceList, filter } = this.state;
    const { translate } = this.props;
    let templateData = {};
    templateData.reportName = translate('generic.report.titleReporttransactionfee');
    templateData.reportFilter = `${sourceList} || ${filter.conditionType}-${filter.selectConditions}`;
    templateData.sumData01 = translate('resources.reporttransactionfees.sumTotalbudget', {
      val: format.number(sumTotalbudget, 0),
    });
    templateData.sumData02 = translate('resources.reporttransactionfees.sumTotalauto-matcher', {
      val: format.number(sumTotalauto-matcher, 0),
    });
    templateData.sumData03 = translate('resources.reporttransactionfees.sumTotalDataload', {
      val: format.number(sumTotalDataload, 0),
    });
    templateData.sumData04 = translate('resources.reporttransactionfees.sumTotalload', {
      val: format.number(sumTotalload, 0),
    });
    templateData.tableHeader = {
      column01: translate('resources.reporttransactionfees.fields.bworksSource'),
      column02: translate('resources.reporttransactionfees.fields.transactionfeeStatus'),
      column03: translate('resources.reporttransactionfees.fields.auto-matcher'),
      column04: translate('resources.reporttransactionfees.fields.budget'),
      column05: translate('resources.reporttransactionfees.fields.load'),
      column06: translate('resources.reporttransactionfees.fields.dataload'),
      column07: translate('resources.reporttransactionfees.fields.totalDevice'),
    };
    //templateData.data = data;
    templateData.data = data.map(item => Object.assign({}, item, { transactionfeeStatus: this.mapCodeToMessage(item) }));
    /* this.props.dataProvider(CUSTOM, 'ReportEngines', {
            method: 'POST',
            subUrl: 'generatePDF',
            body: { data: templateData,
                templateId: "transactionfeeReportTemplate",
                templateModel: "SourceTemplate",
                fileModel: "SourceFile",
            },
        }).then(res => this.props.showDialog(<PdfView url={`/api/PDFGetters/getPDF?filename=${res.data}`} />))

    };
*/

    this.props
      .dataProvider(CUSTOM, 'ReportEngines', {
        method: 'POST',
        subUrl: 'generatePDF',
        body: {
          data: templateData,
          templateId: 'transactionfeeReportTemplate',
          templateModel: 'SourceTemplate',
          fileModel: 'SourceFile',
        },
      })
      .then(res => this.props.showDialog(<PdfView url={`/api/PDFGetters/getPDF?filename=${res.data}`} />));
  };

  render() {
    const { translate, refController } = this.props;
    const { sumTotalbudget, sumTotalauto-matcher, sumTotalDataload, sumTotalload, sum, filter } = this.state;
    // let optionFormat;
    // let subTitle = [
    //   {
    //     id: 1,
    //     content: translate('resources.reporttransactionfees.sumTotalbudget', { val: format.number(sumTotalbudget, 0) }),
    //   },
    //   {
    //     id: 2,
    //     content: translate('resources.reporttransactionfees.sumTotalauto-matcher', { val: format.number(sumTotalauto-matcher, 0) }),
    //   },
    //   {
    //     id: 3,
    //     content: translate('resources.reporttransactionfees.sumTotalDataload', {
    //       val: format.number(sumTotalDataload, 0),
    //     }),
    //   },
    //   {
    //     id: 4,
    //     content: translate('resources.reporttransactionfees.sumTotalload', { val: format.number(sumTotalload, 0) }),
    //   },
    // ];
    let subTitle = [
      {
        id: 1,
        content: translate(filter.selecttransactionfee ? `resources.reporttransactionfees.sumTotal${filter.selecttransactionfee}` : '', {
          val: format.number(sum, 0),
        }),
      },
    ];

    return (
      <Paper>
        <Grid item xs={12} sm={12}>
          <List
            {...this.props}
            refController={refController}
            className="subheader"
            resource="reporttransactionfees"
            fixUrl="bworkssources/reporttransactionfee"
            title={translate('generic.report.titleReporttransactionfee')}
            bulkActions={false}
            subTitle={subTitle}
            perPage={25}
          >
            <Datagrid>
              <TextField source="bworksSource" sortable={false} />
              <ColoredFunctionField
                sortable={false}
                source="transactionfeeStatus"
                render={record => {
                  switch (record.conditionType) {
                    case '1':
                      switch (record.transactionfeeStatus) {
                        case 1:
                          return translate('resources.reporttransactionfees.statusGood');
                        // break;
                        case 2:
                          return translate('resources.reporttransactionfees.statusDamageField');
                        // break;
                        case 3:
                          return translate('resources.reporttransactionfees.statusDamageAndRevoked');
                        // break;
                        case 4:
                          return translate('resources.reporttransactionfees.statusDamageSentMaintain');
                        // break;
                        default:
                          break;
                      }
                      break;
                    case '2':
                      switch (record.transactionfeeStatus) {
                        case 1:
                          return translate('resources.reporttransactionfees.expired');
                        // break;
                        case 2:
                          return translate('resources.reporttransactionfees.nearExpired');
                        // break;
                        case 3:
                          return translate('resources.reporttransactionfees.inValid');
                        // break;
                        default:
                          break;
                      }
                      break;
                    default:
                      break;
                  }
                }}
              />
              {/*<NumberField source="auto-matcher" />
              <NumberField source="budget" />
              <NumberField source="load" />
              <NumberField source="dataload" /> */}
              <NumberField source="totalDevice" sortable={false} />
            </Datagrid>
          </List>
        </Grid>
      </Paper>
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
    report: state.admin.resources.reporttransactionfees,
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

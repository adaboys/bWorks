import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { MapMaterialNode, withDataProvider, URL_ONLY } from 'bwork-libs';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { push as pushAction } from 'react-router-redux';
class MapFlowLoggerStatus extends Component {
  state = { loggerURL: '' };
  iconLink = status => {
    let url = this.props.dataProvider(URL_ONLY, 'icons', {
      subUrl: 'dropView/FlowLoggerIcon',
      query: { status },
      ignoreToken: true,
      abc: 'xyz',
    }).url;
    return url;
  };
  // eslint-disable-next-line
  onClickLogger = flowLogger => {
    // this.props.push(`statisticFlowLogger/${flowLogger.id}`);
  };
  render() {
    const { currentStatus, dataProvider, getStatus } = this.props;
    if (currentStatus && currentStatus.length > 0) {
      return (
        <Fragment>
          {currentStatus.map(dma => {
            if (dma.flowLoggers && dma.flowLoggers.length > 0) {
              return dma.flowLoggers.map(flowLogger => {
                let status = getStatus(flowLogger);
                return (
                  <MapMaterialNode
                    key={flowLogger.id}
                    data={flowLogger}
                    model="FlowLogger"
                    onClick={() => this.onClickLogger(flowLogger)}
                    marker={{ options: {} }}
                    icon={this.iconLink(status)}
                    dataProvider={dataProvider}
                  />
                );
              });
            }
            return null;
          })}
        </Fragment>
      );
    }
    return null;
  }
}

MapFlowLoggerStatus.propTypes = {
  theme: PropTypes.object,
  currentStatus: PropTypes.array,
  getStatus: PropTypes.func,
  dataProvider: PropTypes.func,
  push: PropTypes.func,
};
const enhance = compose(withDataProvider, connect(null, { push: pushAction }));
export default enhance(MapFlowLoggerStatus);

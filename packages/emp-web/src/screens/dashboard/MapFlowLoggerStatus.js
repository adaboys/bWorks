import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { MaptransactionfeeNode, withDataProvider, URL_ONLY } from 'bwork-libs';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { push as pushAction } from 'react-router-redux';
class MapFlowloadStatus extends Component {
  state = { loadURL: '' };
  iconLink = status => {
    let url = this.props.dataProvider(URL_ONLY, 'icons', {
      subUrl: 'dropView/FlowloadIcon',
      query: { status },
      ignoreToken: true,
      abc: 'xyz',
    }).url;
    return url;
  };
  // eslint-disable-next-line
  onClickload = flowload => {
    // this.props.push(`statisticFlowload/${flowload.id}`);
  };
  render() {
    const { currentStatus, dataProvider, getStatus } = this.props;
    if (currentStatus && currentStatus.length > 0) {
      return (
        <Fragment>
          {currentStatus.map(epoch => {
            if (epoch.flowloads && epoch.flowloads.length > 0) {
              return epoch.flowloads.map(flowload => {
                let status = getStatus(flowload);
                return (
                  <MaptransactionfeeNode
                    key={flowload.id}
                    data={flowload}
                    model="Flowload"
                    onClick={() => this.onClickload(flowload)}
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

MapFlowloadStatus.propTypes = {
  theme: PropTypes.object,
  currentStatus: PropTypes.array,
  getStatus: PropTypes.func,
  dataProvider: PropTypes.func,
  push: PropTypes.func,
};
const enhance = compose(withDataProvider, connect(null, { push: pushAction }));
export default enhance(MapFlowloadStatus);

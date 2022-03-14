import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withDataProvider, CUSTOM } from 'bwork-libs';
import MapRenderWithConfig from '../../containers/map/MapRenderWithConfig';
import MapbworksSource from './MapbworksSource';

class MapStatus extends Component {
  state = {
    mapKmls: {},
    centerPointGeo: {},
    zoomLevel: null,
  };
  componentDidMount() {
    this.getMapInfo();
  }

  getMapInfo = () => {
    this.props
      .dataProvider(CUSTOM, 'srcconfigs', {
        filter: { where: { id: { inq: ['MapDefaultZoom', 'MapDefaultCenter'] } } },
      })
      .then(res => {
        let centerPointGeo = res.data.filter(item => item.id == 'MapDefaultCenter')[0];
        let zoomLevel = res.data.filter(item => item.id == 'MapDefaultZoom')[0];
        this.setState({ centerPointGeo: centerPointGeo.subValue, zoomLevel: zoomLevel.value });
      });
  };

  getStatus = data => {
    if (data.timeStatus != 'ok') {
      return data.timeStatus;
    }
    return data.status;
  };
  render() {
    return (
      <MapRenderWithConfig
        options={{ minHeight: '700px', height: 'auto' }}
        centerPointGeo={this.state.centerPointGeo}
        zoomLevel={this.state.zoomLevel}
      >
        <MapbworksSource />
      </MapRenderWithConfig>
    );
  }
}
MapStatus.propTypes = {
  dataProvider: PropTypes.func,
  currentStatus: PropTypes.array,
  baseOnFlowload: PropTypes.bool,
  theme: PropTypes.object.isRequired,
};
const enhance = compose(withDataProvider);
export default enhance(MapStatus);

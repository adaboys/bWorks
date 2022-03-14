import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withDataProvider, CUSTOM, MapRender } from 'bwork-libs';
import { commonConfig } from '../../actions/mapActions';
// mport MapRender from './MapRender';
class MapRenderWithConfig extends Component {
  componentDidMount() {
    const {
      dataProvider,
      config: { MapDefaultCenter: defaultCenter, MapDefaultCenter: defaultZoom },
      commonConfig,
    } = this.props;
    if (!defaultCenter || !defaultZoom) {
      // get config from server
      dataProvider(CUSTOM, 'srcconfigs', { rawFilter: { id: { inq: ['MapDefaultCenter', 'MapDefaultZoom'] } } }).then(
        res => {
          if (res && res.data) {
            let payloadConfig = {};
            res.data.map(item => {
              payloadConfig[item.id] = item.value;
            });
            commonConfig(payloadConfig);
          }
        },
      );
    }
  }
  render() {
    const {
      dataProvider,
      config: { MapDefaultCenter: defaultCenter, MapDefaultZoom: defaultZoom },
      commonConfig,
      zoomLevel,
      centerPointGeo,
      ...rest
    } = this.props;

    if (centerPointGeo && centerPointGeo.lat && centerPointGeo.lng && zoomLevel) {
      return <MapRender isPaper center={centerPointGeo} defaultZoom={zoomLevel} {...rest} />;
    } else if (!defaultCenter || !defaultZoom) {
      return null;
    } else {
      return <MapRender isPaper center={defaultCenter} defaultZoom={defaultZoom} {...rest} />;
    }
  }
}
MapRenderWithConfig.propTypes = {
  dataProvider: PropTypes.func,
  config: PropTypes.object,
  commonConfig: PropTypes.func,
  centerPointGeo: PropTypes.object,
  zoomLevel: PropTypes.number,
};

const mapStateToProps = state => {
  return {
    config: state.common,
  };
};
const mapDispatchToProps = { commonConfig };

export default compose(withDataProvider, connect(mapStateToProps, mapDispatchToProps))(MapRenderWithConfig);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withTheme } from '@material-ui/core';
import { Marker, InfoWindow } from 'react-google-maps';

//
// file nay khong xai
//
class Markeremployer extends Component {
  state = {
    showInfoWindow: false,
  };
  // eslint-disable-next-line
  handleMouseOver = e => {
    this.setState({
      showInfoWindow: true,
    });
  };
  // eslint-disable-next-line
  handleMouseExit = e => {
    this.setState({
      showInfoWindow: false,
    });
  };
  render() {
    const { infoemployer, icon } = this.props;
    const { showInfoWindow } = this.state;
    return (
      <Marker
        key={infoemployer.id}
        position={infoemployer.location}
        icon={icon}
        zIndex={200}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseExit}
      >
        {showInfoWindow && (
          <InfoWindow key={infoemployer.id}>
            <div>
              <h4>{infoemployer.name} </h4>
              <h5>{infoemployer.formattedAddress} </h5>
            </div>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

Markeremployer.propTypes = {
  data: PropTypes.array,
  theme: PropTypes.object,
  centerPointGeo: PropTypes.object,
  zoomLevel: PropTypes.number,
  infoemployer: PropTypes.object,
  icon: PropTypes.object,
};

const enhance = compose(withTheme);
export default enhance(Markeremployer);

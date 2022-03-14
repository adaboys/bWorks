import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Marker, InfoWindow, OverlayView } from 'react-google-maps';
import { compose } from 'recompose';
import { translate } from 'bwork-libs';
import styled, { keyframes } from 'styled-components';

class bworksSourceMarker extends Component {
  state = {
    showInfoWindow: false,
  };

  handleMouseOver = () => {
    this.setState({
      showInfoWindow: true,
    });
  };
  handleMouseExit = () => {
    this.setState({
      showInfoWindow: false,
    });
  };

  render() {
    const { showInfoWindow } = this.state;
    const { bworkssource, status, translate, type } = this.props;
    const pulseAnimation = keyframes`{
                            0% {
                                transform: scale(.1, .1);
                                opacity: 0;
                                background-color: ${status.color}
                            }
                            50% {
                                opacity: 0.5;
                                background-color: ${status.color}
                            }
                            100% {
                                transform: scale(1, 1);
                                opacity: 0;
                                background-color: ${status.color}
                            }
             }`;

    const Pulse = styled.div`
      position: absolute;
      left: -28px;
      top: -30px;
      height: 50px;
      width: 50px;
      z-index: 20;
      opacity: 0;
      border: 2px solid ${status.color};
      background: transparent;
      border-radius: 60px;
      animation: ${pulseAnimation} ${status.speed} ease-out infinite;
    `;

    return (
      <div>
        {status.name !== 'normal' && (
          <OverlayView position={bworkssource.position} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
            <presentation onClick={() => {}}>
              <Pulse />
            </presentation>
          </OverlayView>
        )}
        <Marker
          key={bworkssource.id}
          position={bworkssource.position}
          // icon={`/api/Icons/dropView/Adjust?size=64&status=${status.name}`}
          icon={`/api/Icons/dropView/${type}Icon?size=64&status=${status.name}`}
          onMouseOver={this.handleMouseOver}
          zIndex={200}
          onMouseOut={this.handleMouseExit}
        >
          {type === 'bworksSource' && showInfoWindow && (
            <InfoWindow key={bworkssource.id}>
              <span>
                {`Nguồn nước: ${bworkssource.name}`}
                <br />
                {translate(`generic.bworksSourceMapMarkerStatus.${status.name}`)}
              </span>
            </InfoWindow>
          )}
          {type === 'Factory' && showInfoWindow && (
            <InfoWindow key={bworkssource.id}>
              <span>{`Nhà máy: ${bworkssource.name}`}</span>
            </InfoWindow>
          )}
        </Marker>
      </div>
    );
  }
}

bworksSourceMarker.propTypes = {
  bworkssource: PropTypes.object,
  status: PropTypes.object,
  translate: PropTypes.func,
  type: PropTypes.string,
};

const enhance = compose(translate);
export default enhance(bworksSourceMarker);

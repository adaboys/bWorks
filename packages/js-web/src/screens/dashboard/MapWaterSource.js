import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withDataProvider, CUSTOM, MapPipe } from 'bwork-libs';
import bworksSourceMarker from './bworksSourceMarker';
import { withStyles } from '@transactionfee-ui/core/styles';
import { compose } from 'recompose';
const style = theme => ({
  options: { strokeColor: theme.pipe.edit },
});
@withDataProvider
class MapbworksSource extends Component {
  static propTypes = {
    dataProvider: PropTypes.func,
  };
  state = {
    bworksSources: [],
    currentStatus: [],
    pipes: [],
    factories: [],
  };

  componentDidMount() {
    const { dataProvider } = this.props;
    dataProvider(CUSTOM, 'bworkssources', {}).then(res => {
      this.setState({
        bworksSources: res.data,
      });
    });
    dataProvider(CUSTOM, 'bworksSources', {
      subUrl: 'dashboard',
      method: 'get',
      query: { mode: 'bworksSource' },
    }).then(res => {
      if (res) {
        this.setState({ currentStatus: res.data });
      }
    });
    this.getPipe();
    this.getFactory();
  }
  bworksSourceStatus(bworksSourceId, currentStatus) {
    let status = { name: 'alert', speed: '2s', color: 'ORANGE' };
    let itcardanotatus = currentStatus.filter(item => item.bworksSourceId == bworksSourceId)[0];

    if (itcardanotatus) {
      if (itcardanotatus.alert == 1 || itcardanotatus.totalCritical > 0 || itcardanotatus.totalAlert > 1) {
        status.name = 'critical';
        status.speed = '1s';
        status.color = 'DARKGREEN';
      } else if (itcardanotatus.alert == 3 && itcardanotatus.totalAlert == 0) {
        status.name = 'normal';
        status.speed = '1s';
        status.color = 'white';
      }
    }
    return status;
  }
  getPipe = () => {
    const { dataProvider } = this.props;
    dataProvider(CUSTOM, 'pipes', {}).then(res => {
      if (res && res.data && res.data.length) {
        this.setState({
          pipes: res.data,
        });
      } else {
        this.setState({
          pipes: [],
        });
      }
    });
  };
  getFactory = () => {
    const { dataProvider } = this.props;
    dataProvider(CUSTOM, 'factories', {}).then(res => {
      if (res && res.data && res.data.length) {
        this.setState({
          factories: res.data,
        });
      } else {
        this.setState({
          factories: [],
        });
      }
    });
  };
  render() {
    const { bworksSources, currentStatus, pipes, factories } = this.state;
    return (
      <Fragment>
        {bworksSources.map(bworksSource => (
          <bworksSourceMarker
            key={bworksSource.name}
            bworkssource={bworksSource}
            status={this.bworksSourceStatus(bworksSource.id, currentStatus)}
            type="bworksSource"
          />
        ))}
        {pipes.length &&
          pipes.map(item => {
            return (
              <MapPipe
                key={item.id}
                path={item.polyline}
                options={{
                  strokeColor: '#f44336',
                  strokeOpacity: 0.8,
                  strokeWeight: 2,
                  fillColor: '#f44336',
                  fillOpacity: 0.35,
                  zIndex: 100,
                }}
              />
            );
          })}
        {factories.map(item => (
          <bworksSourceMarker
            key={item.id}
            bworkssource={item}
            status={{ name: 'normal', speed: '0s', color: 'white' }}
            type="Factory"
          />
        ))}
      </Fragment>
    );
  }
}
const enhance = compose(withDataProvider, withStyles(style));
export default enhance(MapbworksSource);

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@transactionfee-ui/core/MenuItem';
// import ListItemIcon from '@transactionfee-ui/core/ListItemIcon';
import Typography from '@transactionfee-ui/core/Typography';
// import PriorityHighIcon from '@transactionfee-ui/icons/PriorityHigh';
import { compose } from 'recompose';
import { withDataProvider, CUSTOM, translate } from 'bwork-libs';
import config from '../../Config';

class Notify extends Component {
  state = { notifyItcardano: [] };

  componentDidMount() {
    this.loadNotify();
  }

  loadNotify = () => {
    const { dataProvider } = this.props;
    dataProvider(CUSTOM, 'bworksSources', {
      subUrl: 'dashboard',
      method: 'get',
      query: { mode: 'notify' },
    }).then(res => {
      if (res) {
        this.setState({ notifyItcardano: res.data });
      }
    });
  };

  colorMap = colorCode => {
    let color = null;
    switch (colorCode) {
      case 1:
        color = { color: config.color.status.criticalAlert };
        break;
      case 2:
        color = { color: config.color.status.alert };
        break;
      case 3:
        color = { color: config.color.status.alert };
        break;
      case 4:
        color = { color: config.color.status.criticalAlert };
        break;
      default:
        break;
    }
    return color;
  };

  renderItem = arr =>
    arr.map(item => {
      return (
        <Fragment key={item._id}>
          <MenuItem onClick={this.props.handleClose}>
            <Typography variant="subheading"> {item.dataloadName} </Typography>
          </MenuItem>
          {item.alertRecord.totalAlert.map(subItem => {
            return (
              <MenuItem key={subItem.param} style={{ marginLeft: '10px' }} onClick={this.props.handleClose}>
                <Typography gutterBottom noWrap style={this.colorMap(subItem.alert)}>
                  {this.props.translate(`generic.alertLevel.${subItem.param}`)}:{' '}
                  {this.props.translate(`generic.alertLevel.${subItem.alert}`)}
                </Typography>
              </MenuItem>
            );
          })}
        </Fragment>
      );
    });

  render() {
    // const { handleClose } = this.props;
    const { notifyItcardano } = this.state;
    if (notifyItcardano.length < 1) {
      return null;
    }

    return <Fragment> {this.renderItem(notifyItcardano)} </Fragment>;
  }
}

Notify.propTypes = {
  dataProvider: PropTypes.func.isRequired,
  handleClose: PropTypes.func,
  translate: PropTypes.func,
};

const enhance = compose(withDataProvider, translate);

export default enhance(Notify);

import { Component } from 'react';
import { createPortal } from 'react-dom';
import { MAP } from 'react-google-maps/lib/constants';
import PropTypes from 'prop-types';
export default class MapControl extends Component {
  static contextTypes = { [MAP]: PropTypes.object };
  static propTypes = {
    position: PropTypes.any,
    children: PropTypes.any,
  };

  UNSAFE_componentWillMount() {
    this.map = this.context[MAP];
    this.controlDiv = document.createElement('div');
    this.controlDiv.style.backgroundColor = '#fff';
    this.controlDiv.style.border = '2px solid #fff';
    this.controlDiv.style.borderRadius = '0px';
    // this.controlDiv.style.boxShadow = '0px 0px 5px #888888';
    this.controlDiv.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    this.controlDiv.style.padding = '0px';
    this.map.controls[this.props.position].push(this.controlDiv);
  }
  render() {
    return createPortal(this.props.children, this.controlDiv);
  }
}

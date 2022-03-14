import { FunctionField } from 'bwork-libs';
import classnames from 'classnames';
// import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import config from '../../Config';

const coloredStyles = {
  alertL: { color: config.color.status.alert },
  alertH: { color: config.color.status.alert },
  criticalAlertH: { color: config.color.status.criticalAlert },
  criticalAlertL: { color: config.color.status.criticalAlert },
  normal: { color: config.color.status.normal },
};

const ColoredFunctionField = withStyles(coloredStyles)(({ classes, ...props }) => (
  <FunctionField
    className={classnames({
      [classes.criticalAlertH]: props.record[props.source] == '1',
      [classes.alertH]: props.record[props.source] == '2',
      [classes.alertL]: props.record[props.source] == '3',
      [classes.criticalAlertL]: props.record[props.source] == '4',
      [classes.normal]: props.record[props.source] == '5',
    })}
    {...props}
  />
));

ColoredFunctionField.defaultProps = FunctionField.defaultProps;

export default ColoredFunctionField;

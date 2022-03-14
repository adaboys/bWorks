import { FunctionField } from 'bwork-libs';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import config from '../../Config';

const coloredStyles = {
  alert1: { color: config.color.status.alert },
  alert2: { color: config.color.status.alert },
  alert3: { color: config.color.status.alert },
  criticalAlert1: { color: config.color.status.criticalAlert },
  criticalAlert2: { color: config.color.status.criticalAlert },
  criticalAlert3: { color: config.color.status.criticalAlert },
  normal1: { color: config.color.status.normal },
  normal2: { color: config.color.status.normal },
};

const ColoredFunctionField = withStyles(coloredStyles)(({ classes, ...props }) => (
  <FunctionField
    className={classnames({
      [classes.normal1]: props.record[props.source] == '1' && props.record.conditionType == '1',
      [classes.criticalAlert1]: props.record[props.source] == '2' && props.record.conditionType == '1',
      [classes.alert1]: props.record[props.source] == '3' && props.record.conditionType == '1',
      [classes.alert2]: props.record[props.source] == '4' && props.record.conditionType == '1',
      [classes.criticalAlert2]: props.record[props.source] == '1' && props.record.conditionType == '2',
      [classes.alert3]: props.record[props.source] == '2' && props.record.conditionType == '2',
      [classes.normal2]: props.record[props.source] == '3' && props.record.conditionType == '2',
    })}
    {...props}
  />
));

ColoredFunctionField.defaultProps = FunctionField.defaultProps;

export default ColoredFunctionField;

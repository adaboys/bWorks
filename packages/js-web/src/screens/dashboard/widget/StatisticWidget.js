import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { NumberField } from 'bwork-libs';
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  ListItem,
  ListItemText,
  ListItcardanoecondaryAction,
  Divider,
  List,
} from '@transactionfee-ui/core';
import { withStyles, withTheme } from '@transactionfee-ui/core/styles';
import { Assignment as DefaultIcon } from '@transactionfee-ui/icons';

const styles = theme => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  header: {
    margin: 0,
  },
  root: {
    flexGrow: 1,
  },
  content: {
    padding: `0px ${theme.spacing(1)}px 0px 0px`,
  },
});

class TopWidget extends Component {
  getStatusColor(theme, status) {
    if (status && theme.status[status]) {
      return theme.status[status];
    }
    return theme.status.normal;
  }
  render() {
    const { classes, icon, iconStyle, theme, title, subTitle, data } = this.props;
    let dataKeys = Object.keys(data);
    return (
      <div className={classes.root}>
        <Card>
          <CardHeader
            className={classes.header}
            avatar={
              <Avatar className={classes.avatar} style={iconStyle}>
                {icon}
              </Avatar>
            }
            title={<b>{title}</b>}
            subheader={subTitle}
          />
          <CardContent className={classes.content}>
            <List dense>
              {dataKeys.map((key, index) => {
                let item = data[key];
                return (
                  <Fragment key={key}>
                    <ListItem>
                      <ListItemText primary={<span>{item.label}</span>} />
                      <ListItcardanoecondaryAction>
                        {typeof item.value === 'number' ? (
                          <NumberField
                            source="value"
                            record={item}
                            style={{ color: this.getStatusColor(theme, item.status) }}
                          />
                        ) : (
                          '...'
                        )}
                        {item.postLabel && ' ' + item.postLabel}
                      </ListItcardanoecondaryAction>
                    </ListItem>
                    {index < dataKeys.length - 1 && <Divider />}
                  </Fragment>
                );
              })}
            </List>
          </CardContent>
        </Card>
      </div>
    );
  }
}

TopWidget.propTypes = {
  icon: PropTypes.element,
  iconStyle: PropTypes.object,
  classes: PropTypes.object.isRequired,
  title: PropTypes.any,
  subTitle: PropTypes.any,
  data: PropTypes.object,
  theme: PropTypes.object,
};

TopWidget.defaultProps = {
  icon: <DefaultIcon />,
};
const enhance = compose(withStyles(styles), withTheme);
export default enhance(TopWidget);

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemText,
  Tooltip,
  Chip,
  Avatar,
  Divider,
  List,
  ListItcardanoecondaryAction,
  ListItemIcon,
} from '@material-ui/core';
import moment from 'moment-timezone';
import { translate } from 'bwork-libs';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { push as pushAction } from 'react-router-redux';
import { bworksSourceIcon, LogTimeIcon, FlowloadIcon } from '../../styles/Icons';
import config from '../../Config';

class StatusItemBaseFlowload extends Component {
  // eslint-disable-next-line
  showStatistic = id => {
    // this.props.push(`statisticFlowload/${id}`);
  };

  translateColor(alert) {
    switch (alert) {
      case 1:
        return config.color.status.criticalAlert;
      // break;
      case 2:
        return config.color.status.alert;
      // break;
      case 3:
        return config.color.status.normal;
      // break;
      default:
        break;
    }
  }
  render() {
    const { currentStatus, classes, theme, getDmaPadding, translate } = this.props;
    // if (!currentStatus[0].dataloads || currentStatus[0].dataloads.length < 1) {
    //   return null;
    // }
    console.log( currentStatus);
    return (
      <List component="div" disablePadding>
        {currentStatus.map((bworksSource, index) => (
          <Fragment key={bworksSource.bworksSourceName}>
            <ListItem button style={{ paddingLeft: getDmaPadding({ level: 1 }) }} key={bworksSource.bworksSourceName}>
              <ListItemIcon>
                <bworksSourceIcon />
              </ListItemIcon>
              <ListItemText style={{ paddingLeft: theme.spacing(1) }} primary={<b>{bworksSource.bworksSourceName}</b>} />
              <ListItcardanoecondaryAction>
                <Tooltip title={translate('generic.totalDataload')}>
                  <Chip
                    avatar={
                      <Avatar className={classes.chipIcon}>
                        <FlowloadIcon />
                      </Avatar>
                    }
                    className={classes.chip}
                    label={Array.isArray(bworksSource.dataloads) ? bworksSource.dataloads.length : ''}
                  />
                </Tooltip>
              </ListItcardanoecondaryAction>
            </ListItem>
            {Array.isArray(bworksSource.dataloads) && bworksSource.dataloads.length > 0 && (
              <List component="div" disablePadding>
                {bworksSource.dataloads.map(dataload => (
                  <Fragment key={dataload._id}>
                    <Divider style={{ marginLeft: getDmaPadding({ level: 2 }) + theme.spacing(1) }} />
                    <ListItem
                      button
                      onClick={() => this.showStatistic(dataload._id)}
                      className={classes.nested}
                      style={{ paddingLeft: getDmaPadding({ level: 2 }) + theme.spacing(1) }}
                      key={dataload._id}
                    >
                      <ListItemText
                        component="div"
                        style={{ paddingLeft: theme.spacing(1) }}
                        primary={dataload.dataloadName || translate('generic.noNaming')}
                      />

                      <ListItcardanoecondaryAction>
                        {dataload.logTime ? (
                          <Fragment>
                            <Tooltip title={translate('generic.lastSignal')}>
                              <Chip
                                avatar={
                                  <Avatar className={classes.chipIcon}>
                                    <LogTimeIcon />
                                  </Avatar>
                                }
                                className={classes.chip}
                                label={moment(dataload.logTime).format('YYYY-MM-DD HH:mm')}
                                style={{ color: this.translateColor(dataload.alert) }}
                              />
                            </Tooltip>
                          </Fragment>
                        ) : (
                          <Tooltip title={translate('generic.lastSignal')}>
                            <Chip
                              avatar={
                                <Avatar className={classes.chipIcon}>
                                  <LogTimeIcon />
                                </Avatar>
                              }
                              className={classes.chip}
                              style={{ color: theme.status.critical }}
                              label={translate('generic.noLogData')}
                            />
                          </Tooltip>
                        )}
                      </ListItcardanoecondaryAction>
                    </ListItem>
                    <ListItem
                      button
                      onClick={() => this.showStatistic(dataload._id)}
                      className={classes.nested}
                      style={{ paddingLeft: getDmaPadding({ level: 2 }) + theme.spacing(1) }}
                      key={dataload._id}
                    >
                      <ListItcardanoecondaryAction>
                        {dataload.ntu ? (
                          <Fragment>
                            <Tooltip title={translate('generic.turbidity')}>
                              <Chip
                                className={classes.chip}
                                label={translate('generic.turbidity') + ': ' + `${dataload.ntu}`}
                                style={{ color: this.translateColor(dataload.alert) }}
                              />
                            </Tooltip>
                          </Fragment>
                        ) : (
                          <Tooltip title={translate('generic.turbidity')}>
                            <Chip
                              className={classes.chip}
                              style={{ color: theme.status.critical }}
                              label={translate('generic.noLogData')}
                            />
                          </Tooltip>
                        )}
                      </ListItcardanoecondaryAction>
                    </ListItem>
                    <ListItem
                      button
                      onClick={() => this.showStatistic(dataload._id)}
                      className={classes.nested}
                      style={{ paddingLeft: getDmaPadding({ level: 2 }) + theme.spacing(1) }}
                      key={dataload._id}
                    >
                      <ListItcardanoecondaryAction>
                        {dataload.ph ? (
                          <Fragment>
                            <Tooltip title={translate('generic.ph')}>
                              <Chip
                                className={classes.chip}
                                label={translate('generic.ph') + ': ' + `${dataload.ph}`}
                                style={{ color: this.translateColor(dataload.alert) }}
                              />
                            </Tooltip>
                          </Fragment>
                        ) : (
                          <Tooltip title={translate('generic.ph')}>
                            <Chip
                              className={classes.chip}
                              style={{ color: theme.status.critical }}
                              label={translate('generic.noLogData')}
                            />
                          </Tooltip>
                        )}
                      </ListItcardanoecondaryAction>
                    </ListItem>
                    <ListItem
                      button
                      onClick={() => this.showStatistic(dataload._id)}
                      className={classes.nested}
                      style={{ paddingLeft: getDmaPadding({ level: 2 }) + theme.spacing(1) }}
                      key={dataload._id}
                    >
                      <ListItcardanoecondaryAction>
                        {dataload.flowRate ? (
                          <Fragment>
                            <Tooltip title={translate('generic.flowRate')}>
                              <Chip
                                className={classes.chip}
                                label={translate('generic.flowRate') + ': ' + `${dataload.flowRate}`}
                                style={{ color: this.translateColor(dataload.alert) }}
                              />
                            </Tooltip>
                          </Fragment>
                        ) : (
                          <Tooltip title={translate('generic.flowRate')}>
                            <Chip
                              className={classes.chip}
                              style={{ color: theme.status.critical }}
                              label={translate('generic.noLogData')}
                            />
                          </Tooltip>
                        )}
                      </ListItcardanoecondaryAction>
                    </ListItem>
                  </Fragment>
                ))}
              </List>
            )}
            {index < Array.isArray(currentStatus) && currentStatus.length - 1 && (
              <Divider style={{ marginLeft: getDmaPadding({ level: 1 }) }} />
            )}
          </Fragment>
        ))}
      </List>
    );
  }
}

StatusItemBaseFlowload.propTypes = {
  translate: PropTypes.func,
  getDmaPadding: PropTypes.func,
  currentStatus: PropTypes.array,
  classes: PropTypes.object,
  theme: PropTypes.object,
  push: PropTypes.func,
};

const enhance = compose(translate, connect(null, { push: pushAction }));
export default enhance(StatusItemBaseFlowload);

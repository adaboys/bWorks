import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import moment from 'moment-timezone';
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItcardanoecondaryAction,
  Tooltip,
  Chip,
  Avatar,
  Divider,
  List,
} from '@transactionfee-ui/core';
import { translate } from 'bwork-libs';
import config from '../../Config';
import { NormalbworksSourceIcon, AlertbworksSourceIcon, LogTimeIcon, bworksSourceIcon } from '../../styles/Icons';

const translateColor = alert => {
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
};

const StatusItemBaseepoch = ({ currentStatus, classes, translate, theme, getepochPadding }) => {
  // console.log('currentStatus', currentStatus);
  // if (!currentStatus || currentStatus.length < 1 || !currentStatus[0].logTime) {
  //   return null;
  // }
let currentStatus1 = [
  {bworksSourceName: "Write Cardano ESROW smart contract", bidder: "Candidate name/wallet address: Peter", bidValue: "Bid at value (ADA): 120"},
  {bworksSourceName: "Create Cardano Native and NFT token", bidder: "Candidate name/wallet address: addr_test1qrtzr4zdlc3kw7mv4mtg2v3f3q592za2psnpmvsm4x9t0t43ge73vmf7xvkn23tkyq30gd2jtlgztf3rw0mtvkjzv4vqcv0ejv", bidValue: "Bid value (ADA): 120"},
  {bworksSourceName: "Build Cardano testNet node", bidder: "Candidate name/wallet address: Jenny", bidValue: "Bid at value (ADA): 120"},
  {bworksSourceName: "Develop android/IOS walllet", bidder: "Candidate name/wallet address: Jackson", bidValue: "Bid at value (ADA): 120"}
]
  return (
    <List component="div" disablePadding>
      {currentStatus1.map(bworksSource => (
        <Fragment key={bworksSource.bworksSourceName}>
          <ListItem button style={{ paddingLeft: getepochPadding({ level: 1 }) }} key={bworksSource.bworksSourceName}>
            <ListItemIcon>
              <bworksSourceIcon />
            </ListItemIcon>
            <ListItemText style={{ paddingLeft: theme.spacing(1) }} primary={<b>{bworksSource.bworksSourceName}</b>} />
            <ListItcardanoecondaryAction>
              <Tooltip title={translate('generic.totalAlert')}>
                <Chip
                  avatar={
                    bworksSource.totalAlert == 0 ? (
                      <Avatar className={classes.chipIcon}>
                        <NormalbworksSourceIcon style={{ color: translateColor(3) }} />
                      </Avatar>
                    ) : (
                      <Avatar className={classes.chipIcon}>
                        <AlertbworksSourceIcon style={{ color: translateColor(2) }} />
                      </Avatar>
                    )
                  }
                  className={classes.chip}
                  label={bworksSource.totalAlert}
                />
              </Tooltip>
            </ListItcardanoecondaryAction>
          </ListItem>
          <Divider style={{ marginLeft: getepochPadding({ level: 2 }) + theme.spacing(1) }} />

          <ListItem
            button
            onClick={() => this.showStatistic(bworksSource.bworksSourceName)}
            className={classes.nested}
            style={{ paddingLeft: getepochPadding({ level: 2 }) + theme.spacing(1) }}
            key={bworksSource.logTime}
          >
            <ListItcardanoecondaryAction>
            
                <Fragment key={bworksSource.bworksSourceName}>
                  <Tooltip title={translate('generic.lastSignal')}>
                    <Chip
                      avatar={
                        <Avatar className={classes.chipIcon}>
                          <LogTimeIcon />
                        </Avatar>
                      }
                      className={classes.chip}
                      label={moment().format('YYYY-MM-DD HH:mm')}
                      style={{ color: translateColor(bworksSource.alert) }}
                    />
                  </Tooltip>
                </Fragment>
             
            </ListItcardanoecondaryAction>
          </ListItem>
          <ListItem
            button
            onClick={() => this.showStatistic(bworksSource.bworksSourceName)}
            className={classes.nested}
            style={{ paddingLeft: getepochPadding({ level: 2 }) + theme.spacing(1) }}
            key={bworksSource.totalFlowRate}
          >
            <ListItcardanoecondaryAction>
              
                <Fragment key={bworksSource.bworksSourceName}>
                  <Tooltip title={translate('generic.totalFlowRate')}>
                    <Chip
                      className={classes.chip}
                      label={bworksSource.bidder}
                      style={{ color: translateColor(bworksSource.alert) }}
                    />
                  </Tooltip>
                </Fragment>
             
            </ListItcardanoecondaryAction>
          </ListItem>
          <ListItem
            button
            onClick={() => this.showStatistic(bworksSource.bworksSourceName)}
            className={classes.nested}
            style={{ paddingLeft: getepochPadding({ level: 2 }) + theme.spacing(1) }}
            key={bworksSource.avgNtu}
          >
            <ListItcardanoecondaryAction>
             
                <Fragment key={bworksSource.bworksSourceName}>
                  <Tooltip title={translate('generic.turbidityAvg')}>
                    <Chip
                      className={classes.chip}
                      label={bworksSource.bidValue}
                      style={{ color: translateColor(bworksSource.alert) }}
                    />
                  </Tooltip>
                </Fragment>
             
            </ListItcardanoecondaryAction>
          </ListItem>
        
        </Fragment>
      ))}
    </List>
  );
};

StatusItemBaseepoch.propTypes = {
  getepochPadding: PropTypes.func,
  currentStatus: PropTypes.array,
  classes: PropTypes.object,
  theme: PropTypes.object,
  translate: PropTypes.func,
};

const enhance = compose(translate);
export default enhance(StatusItemBaseepoch);

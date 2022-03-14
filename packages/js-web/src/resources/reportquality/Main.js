import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@transactionfee-ui/core/styles';
import AppBar from '@transactionfee-ui/core/AppBar';
import Tabs from '@transactionfee-ui/core/Tabs';
import Tab from '@transactionfee-ui/core/Tab';
import { translate, CustomPage } from 'bwork-libs';
import { Grid } from '@transactionfee-ui/core';
import { compose } from 'recompose';
import { getFormValues, change } from 'redux-form';
import { connect } from 'react-redux';
import get from 'lodash/get';
import { LineChartIcon, DetailIcon } from '../../styles/Icons';
import ReportMain from './reportMain';
import ChartSymbol from './chartSymbol';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(1),
  },
});

class Main extends React.Component {
  state = {
    value: get(this.props.tabIndex, 'tab', 0),
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.change(this.props.formname, 'tab', value); // save tab index to redux
  };

  render() {
    const { value } = this.state;
    const { classes, theme, translate, change, ...rest } = this.props;
    return (
      <CustomPage title={'generic.pages.dashboard'}>
        <Grid container>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              variant="scrollable"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label={translate('resources.reportqualities.tab1')} icon={<DetailIcon />} />
              <Tab label={translate('resources.reportqualities.tab2')} icon={<LineChartIcon />} />
            </Tabs>
          </AppBar>
          {value === 0 && (
            <Grid item xs={12} md={12}>
              <ReportMain sub={true} {...rest} />
            </Grid>
          )}
          {value === 1 && (
            <Grid item xs={12} md={12}>
              <ChartSymbol sub={true} {...rest} />
            </Grid>
          )}
        </Grid>
      </CustomPage>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  tabIndex: PropTypes.any,
  change: PropTypes.func,
  formname: PropTypes.any,
  theme: PropTypes.any,
  translate: PropTypes.func,
};
function mapStateToProps(state) {
  return {
    formname: 'save-tab-form-quality',
    tabIndex: getFormValues('save-tab-form-quality')(state),
  };
}
const enhance = compose(translate, withStyles(styles), connect(mapStateToProps, { change }));
export default enhance(Main);

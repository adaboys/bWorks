import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { Grid } from '@material-ui/core';
import { Show, HtmlField, TextField, translate, FlexForm, SelectField, DateField, NumberField, BooleanField} from 'bwork-libs';
import config from '../../Config';

class ShowPostJob extends Component {
  render() {
    const { translate, ...rest } = this.props;
    return (
      <Show {...rest} resource="tests" hasEdit={false}>
        <FlexForm toolbar={false} style={{ flexGrow: 1 }} spacing={2}>
        <Grid middle container spacing={2}>
            <Grid middle item xs={12} sm={4}>
              <TextField source="name" />
            </Grid>
          
            <Grid middle item xs={12} sm={4}>
              <NumberField source="bidValue" />
            </Grid>
            <Grid middle item xs={12} sm={4}>
              <NumberField source="estimatedCost" label="Budget (Ada)" disabled/>
            </Grid>

            <Grid middle item xs={12} sm={4}>
              <DateField source="createdDate" />
            </Grid>
            <Grid middle item xs={12} sm={4}>
              <DateField source="expectedDate" label="Expire date"/>
            </Grid>
           
          


          
            <Grid middle item xs={12} sm={12}>
              <TextField source="bidder"  label="Bidder name" disabled/>
            </Grid>
           
            <Grid middle item xs={12} sm={12}>
              <TextField source="bidderWallet"  label="Bidder wallet address"  />
            </Grid>
            <Grid middle item xs={12} sm={12}>
              <TextField source="employer"  label="Employer name" disabled/>
            </Grid>
         
            <Grid middle item xs={12} sm={12}>
              <TextField source="employerWallet"  label="Employer wallet address"  />
            </Grid>
            <Grid middle item xs={12} sm={4}>
              <BooleanField source="selected" label="Select this bid" />
            </Grid>
            <Grid middle item xs={12} sm={4}>
              <BooleanField source="employerAgreed" label="Employer agreed to contract" />
            </Grid>
            <Grid middle item xs={12} sm={4}>
              <BooleanField source="jobSeekerAgreed" label="Job seeker agreed to contract" />
            </Grid>


            <Grid middle item xs={12} sm={12}>
              <HtmlField source="description" />
            </Grid>
          </Grid>
        </FlexForm>
      </Show>
    );
  }
}

ShowPostJob.propTypes = {
  translate: PropTypes.any,
};

ShowPostJob.detaultProps = {
  hasShow: true,
};
const enhance = compose(translate);
export default enhance(ShowPostJob);

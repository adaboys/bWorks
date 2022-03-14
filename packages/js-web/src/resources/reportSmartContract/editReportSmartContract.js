import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Edit, FlexForm, TextInput, required, translate, SelectInput, EditorInput, DateTimeInput, NumberInput } from 'bwork-libs';
import { Grid } from '@material-ui/core';
import compose from 'recompose/compose';
import config from '../../Config';

class EditPartner extends Component {
  render() {
    const { props } = this;
    return (
      <Edit {...props} PostJob>
        <FlexForm style={{ flexGrow: 1 }} spacing={2} redirect="list" submitOnEnter={false}>
        <Grid middle container spacing={2}>
            <Grid middle item xs={12} sm={6}>
              <TextInput source="name" validate={[required()]} label="Task name"/>
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <DateTimeInput source="expectedDate"  label="Expected complete date"/>
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <DateTimeInput source="createdDate" label="Created date"/>
            </Grid>

            <Grid middle item xs={12} sm={6}>
              <NumberInput source="estimatedCost" label="Estimated cost"/>
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <NumberInput source="requiredAda" label="Required ADA for bidding" />
            </Grid>
          
            <Grid middle item xs={12} sm={12}>
              <EditorInput source="description" fullWidth />
            </Grid>
          </Grid>
        </FlexForm>
      </Edit>
    );
  }
}

EditPartner.propTypes = {
  translate: PropTypes.func,
  hasList: PropTypes.bool,
  hasShow: PropTypes.bool,
  staticcontext: PropTypes.any,
};
EditPartner.detaultProps = {
  hasList: true,
  hasShow: true,
};

const enhance = compose(translate);
export default enhance(EditPartner);

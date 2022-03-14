import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Create,
  FlexForm,
  TextInput,
  required,
  translate,
  
  EditorInput,
  DateTimeInput,
} from 'bwork-libs';
import { Grid } from '@transactionfee-ui/core';
import compose from 'recompose/compose';
import { PasswordInput } from 'react-admin';

class CreatePostJob extends Component {
  render() {
    const { props } = this;
    
    return (
      <Create {...props} resource="settings">
        <FlexForm style={{ flexGrow: 1 }} spacing={2} redirect="list" submitOnEnter={false}>
          <Grid middle container spacing={2}>
            <Grid middle item xs={12} sm={12}>
              <TextInput source="name" validate={[required()]} label="Current password" type="password" />
            </Grid>
            <Grid middle item xs={12} sm={12}>
              <TextInput source="name" validate={[required()]} label="New password" type="password"/>
            </Grid>
           
            <Grid middle item xs={12} sm={12}>
              <TextInput source="name" validate={[required()]} label="Repeat new password" type="password"/>
            </Grid>
         
          </Grid>
        </FlexForm>
      </Create>
    );
  }
}

CreatePostJob.propTypes = {
  translate: PropTypes.func,
  hasList: PropTypes.bool,
  hasShow: PropTypes.bool,
  hasCreate: PropTypes.bool,
  hasEdit: PropTypes.bool,
  staticcontext: PropTypes.any,
};
CreatePostJob.detaultProps = {
  hasList: true,
  hasShow: true,
  hasCreate: false,
  hasEdit: false,
};

const enhance = compose(translate);
export default enhance(CreatePostJob);

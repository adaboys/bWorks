import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Create,
  FlexForm,
  TextInput,
  required,
  translate,
  SelectInput,
  EditorInput,
  DateTimeInput,
  NumberInput,
  ArrayInput,
  SelectArrayInput,
  SimpleFormIterator,
} from 'bwork-libs';
import { Grid } from '@transactionfee-ui/core';
import compose from 'recompose/compose';
import config from '../../Config';

class CreatePostJob extends Component {
  render() {
    const { props } = this;
    return (
      <Create {...props} resource="tests">
        <FlexForm style={{ flexGrow: 1 }} spacing={2} redirect="list" submitOnEnter={false}>
          <Grid middle container spacing={2}>
            <Grid middle item xs={12} sm={6}>
              <TextInput source="name" validate={[required()]} label="Job name" />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <DateTimeInput source="expectedDate" label="Expired date" />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <DateTimeInput source="createdDate" label="Created date" />
            </Grid>

            <Grid middle item xs={12} sm={6}>
              <NumberInput source="estimatedCost" label="Budget (Ada)" />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <NumberInput source="requiredAda" label="Required ADA for bidding" />
            </Grid>

            <Grid middle item xs={12} sm={6}>
              <SelectArrayInput
                label="Required skills"
                source="skills"
                choices={[
                  { id: 'haskell', name: 'Haskell' },

                  { id: 'smartContract', name: 'Smart contract' },
                  { id: 'plutus', name: 'Plutus' },
                  { id: 'nativeToken', name: 'Native token' },
                  { id: 'nodejs', name: 'NodeJs' },
                  { id: 'marlowe', name: 'Marlowe' },
                  { id: 'js', name: 'Javascript' },
                  { id: 'c++', name: 'C++' },
                ]}
              />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <ArrayInput source="subitcardano" label="Task breakdown">
                <SimpleFormIterator>
                  <TextInput label="Subtask" source="value" validate={[required()]} />
                </SimpleFormIterator>
              </ArrayInput>
            </Grid>

            <Grid middle item xs={12} sm={12}>
              <EditorInput source="description" fullWidth />
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

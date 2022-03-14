import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Edit, FlexForm, TextInput, required, translate, SelectArrayInput, EditorInput, DateTimeInput, NumberInput, ArrayInput, SimpleFormIterator , BooleanInput} from 'bwork-libs';
import { Grid } from '@transactionfee-ui/core';
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
              <TextInput source="name" validate={[required()]} label="Job name" disabled/>
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <DateTimeInput source="expectedDate"  label="Expired date" disabled/>
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <DateTimeInput source="createdDate" label="Created date" disabled/>
            </Grid>

            <Grid middle item xs={12} sm={6}>
              <NumberInput source="estimatedCost" label="Budget (Ada)" disabled/>
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <NumberInput source="requiredAda" label="Required ADA for bidding" disabled/>
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <SelectArrayInput
                label="Required skills"
                source="skills"
                disabled
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
            <Grid middle item xs={12} sm={12}>
              <ArrayInput source="subitcardano" label="Task breakdown" disabled>
                <SimpleFormIterator disabled>
                  <TextInput label="Subtask" source="value" validate={[required()]} disabled/>
                </SimpleFormIterator>
              </ArrayInput>
            </Grid>

            <Grid middle item xs={12} sm={12}>
              <TextInput source="employer" label="Employer" disabled/>
            </Grid>
            <Grid middle item xs={12} sm={12}>
              <TextInput source="employerWallet" label="JEmployer wallet" disabled/>
            </Grid>
            <Grid middle item xs={12} sm={6}>
            <NumberInput source="bidValue" label="Put your bid value"/>
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <BooleanInput source="jobSeekerPlacedBid" label="Place bid" />
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

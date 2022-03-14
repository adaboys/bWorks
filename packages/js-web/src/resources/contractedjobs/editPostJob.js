import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Edit, FlexForm, TextInput, required, translate, SelectInput, EditorInput, DateTimeInput, NumberInput, BooleanInput } from 'bwork-libs';
import { Grid } from '@transactionfee-ui/core';
import compose from 'recompose/compose';
import config from '../../Config';


let contractStatus = [
  { id: 'new', name: 'Create new contract' },
  { id: 'pending', name: 'Pending' },
  { id: 'completed', name: 'Complete' },
  { id: 'canceled', name: 'Cancel' },
];
let contractTypes = [
  { id: 'escrow', name: 'Escrow' },
  { id: 'punish', name: 'Punish' },
];

class EditPartner extends Component {
  render() {
    const { props } = this;
    return (
      <Edit {...props} PostJob>
       <FlexForm style={{ flexGrow: 1 }} spacing={2} redirect="list" submitOnEnter={false}>
         <Grid middle container spacing={2}>
            <Grid middle item xs={12} sm={6}>
              <TextInput source="name" validate={[required()]} label="Job name" />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <TextInput source="bidder" label="Bidder name" />
            </Grid>
            <Grid middle item xs={12} sm={12}>
              <TextInput source="bidderWallet" label="Bidder wallet" />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <NumberInput source="contractValue" label="Contract value" />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <BooleanInput source="contracted" label="Make contract with this candidate" />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <SelectInput
                source="contractStatus"
                choices={contractStatus}
                translateChoice={true}
                optionText="name"
                optionValue="id"
              />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <SelectInput
                source="contractType"
                choices={contractTypes}
                translateChoice={true}
                optionText="name"
                optionValue="id"
              />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <DateTimeInput source="createdDate" label="Created date" />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <DateTimeInput source="expectedDate" label="Released date" />
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

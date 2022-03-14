import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Edit, FlexForm, TextInput, required, translate, BooleanInput, EditorInput, DateTimeInput, NumberInput, FormDataConsumer, SelectInput } from 'bwork-libs';
import { Grid } from '@transactionfee-ui/core';
import compose from 'recompose/compose';
import config from '../../Config';


let status = [{id: "opening", name: "Opening"},{id: "candidate selected", name: "Candidate selected"}, {id: "submit contract", name: "Submit contract"}]

class EditPartner extends Component {
  render() {
    const { props } = this;
    return (
      <Edit {...props} PostJob>
         <FlexForm style={{ flexGrow: 1 }} spacing={2} redirect="list" submitOnEnter={false}>
        <Grid middle container spacing={2}>
            <Grid middle item xs={12} sm={6}>
              <TextInput source="name" validate={[required()]} label="Job name"/>
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <TextInput source="bidder"  label="Bidder name"/>
            </Grid>
           
            <Grid middle item xs={12} sm={6}>
              <NumberInput source="bidValue" label="Placed bid value" disabled />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <NumberInput source="estimatedCost" label="Budget (Ada)"/>
            </Grid>
            <Grid middle item xs={12} sm={12}>
            

           
            <SelectInput
                source="status"
                choices={status}>
       </SelectInput>
   </Grid>
            <Grid middle item xs={12} sm={6}>
              <BooleanInput source="selected" label="Select this candidate" />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <BooleanInput source="employerAgreed" label="Send contract request" />
            </Grid>
         
         
            <Grid middle item xs={12} sm={6}>
              <DateTimeInput source="createdDate" label="Created date"/>
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <DateTimeInput source="expectedDate"  label="Estimated complete date"/>
            </Grid>
          
            <Grid middle item xs={12} sm={12}>
              <TextInput source="bidderWallet"  label="Wallet address" fullWidth disabled/>
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

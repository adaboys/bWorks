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
  SimpleFormIterator,BooleanInput
} from 'bwork-libs';
import { Grid , Hidden } from '@material-ui/core';

import compose from 'recompose/compose';
import config from '../../Config';
import moment from 'moment-timezone';

let employerWallet = "addr_test1qrrm07xev0qh9vr9lhwmn57n9gpfusclufwv3xmwmet0yy73zq9zh7e76renxpzpz860s6mh8hlt0llhmdr0vdcwqjrsqm08n8"
let employerName = "Jenie"
let status = "opening"
//status = opening, candidate selected, contracted
class CreatePostJob extends Component {
  render() {
    const { props } = this;
    return (
      <Create {...props} resource="tests">
        <FlexForm style={{ flexGrow: 1 }} spacing={2} redirect="list" submitOnEnter={false}>
          <Grid middle container spacing={2}>
            <Grid middle item xs={12} sm={6}>
              <TextInput source="name" validate={[required()]} label="Job name" defaultValue="a"/>
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <DateTimeInput source="expectedDate" label="Expire date" />
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
              <DateTimeInput source="createdDate" label="Created date" defaultValue={moment()} disabled/>
            </Grid>
            <Grid middle item xs={12} sm={12}>
              <ArrayInput source="subitcardano" label="Task breakdown">
                <SimpleFormIterator>
                  <TextInput label="Subtask" source="value" validate={[required()]} />
                </SimpleFormIterator>
              </ArrayInput>
            </Grid>
            <Grid middle item xs={12} sm={6}>
            
            <TextInput label="Employer name" source="employer"  disabled defaultValue={employerName}/>
       
     
      </Grid>
      <Grid middle item xs={12} sm={6}>
            
            <TextInput label="Status" source="status"  disabled defaultValue="opening"/>
       
     
      </Grid>
      <Grid middle item xs={12} sm={6}>
              <BooleanInput source="isApproved" label="Approve this post" />
            </Grid>
      <Grid middle item xs={12} sm={6}>
              <TextInput label="Still validated" source="validated" defaultValue={true}  disabled/>
            </Grid>
            <Grid middle item xs={12} sm={6}  style={{ visibility: "hidden"}}>
              <TextInput label="Contract status" source="contractStatus" defaultValue={"submitting"}  disabled/>
            </Grid>
            <Grid middle item xs={12} sm={12}>
              <TextInput label="Employer wallet" source="employerWallet" defaultValue={employerWallet} fullWidth disabled/>
            </Grid>
            <Grid middle item xs={12} sm={12} >
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

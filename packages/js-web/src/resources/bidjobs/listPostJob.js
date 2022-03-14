//tham khảo: https://www.epa.ie/pubs/advice/bworks/quality/bworks_Quality.pdf
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  translate,
  TextField,
  List,
  Datagrid,
  EditButton,
  ShowButton,
  BooleanField,
  Filter,
  TextInput,
  DateField,
  NumberField,
} from 'bwork-libs';
import { compose } from 'recompose';
import config from '../../Config';

const Filters = props => (
  <Filter {...props}>
    <TextInput source="name" label={'generic.search'} alwaysOn />
  </Filter>
);

class ListPostJob extends Component {
  render() {
    const { translate, ...rest } = this.props;
    return (
      <List {...rest} filters={<Filters />} resource="tests" filter={{jobSeekerPlacedBid: true, bidder: 'Ana'}} hasCreate={false}>
        <Datagrid>
          <TextField source="name" label="Job name"/>
          <TextField source="employer" label="Employer name" />
          <NumberField source="estimatedCost" label="Budget (Ada)" />
          <NumberField source="bidValue" label="Placed bid value (Ada)" />
         
          <BooleanField source="selected" label="Selected" />
          <BooleanField source="employerAgreed" label="Employer agreed" />
          <BooleanField source="jobSeekerAgreed" label="Job seeker agreed" />
          <BooleanField source="expired" label="Still validated" />
          <DateField source="createdDate" label="Created date" />
          <DateField source="expectedDate" label="Expire date" />
          <ShowButton label="View detail"/>
          <EditButton label="Change bid" />
        </Datagrid>
      </List>
    );
  }
}

ListPostJob.propTypes = {
  translate: PropTypes.func,
  hasList: PropTypes.bool,
  hasShow: PropTypes.bool,
  hasCreate: PropTypes.bool,
  hasEdit: PropTypes.bool,
};

export default compose(translate)(ListPostJob);

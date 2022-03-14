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
  SelectField,
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
      <List {...rest} filters={<Filters />} resource="postjobs">
        <Datagrid>
          <TextField source="name" />
          <DateField source="expectedDate" label="expected complete date"/>
          <DateField source="createdDate" label="created date" />
          
          <NumberField source="estimatedCost" label="estimated Cost (ADA)"/>
          <NumberField source="requiredAda" label="required tokens for bidding (ADA)"/>

       
          <ShowButton />
          <EditButton />
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

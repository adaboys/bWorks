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

let title = "Smart contract address: addr1wy27ag0w4dzhldz5tunqhlyy2pkllz6sym5zm509z659ngxgumgve"
class ListPostJob extends Component {
  render() {
    const { translate, ...rest } = this.props;
    return (
      <List {...rest} filters={<Filters />} resource="tests" title={title} filter={{bidder: 'Ana',selected: true, employerAgreed: true, jobSeekerAgreed: true}} hasCreate={false}>
        <Datagrid>
          <TextField source="name" label="Job name"/>
          <TextField source="employer" />
          <TextField source="employerWallet" />
          <NumberField source="bidValue" label="Contract value (Ada)"/>
          <TextField source="contractType" />
          <TextField source="contractStatus" />
          <DateField source="createdDate" label="Submitted date" showTime/>
          <DateField source="expectedDate" label="Expired date" showTime/>
          <ShowButton label="View detail"/>
          <EditButton label="Note"/>
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  translate,
  TextField,
  DateField,
  BooleanField,
  List,
  Datagrid,
  EditButton,
  ShowButton,
  SelectField,
  Filter,
  TextInput,
} from 'bwork-libs';
import { compose } from 'recompose';
import config from '../../Config';

const Filters = props => (
  <Filter {...props}>
    <TextInput source="name" label={'generic.search'} alwaysOn />
  </Filter>
);

class ListbworksStandard extends Component {
  render() {
    const { translate, ...rest } = this.props;
    return (
      <List {...rest} filters={<Filters />} resource="bworksstandards">
        <Datagrid>
          <TextField source="name" />
          <SelectField
            source="applyFor"
            choices={config.bworksParabudgetStage}
            translateChoice={true}
            optionText="name"
            optionValue="id"
          />
          <DateField source="issuedDate" />
          <TextField source="issuedOrg" />
          <BooleanField source="isInValid" />
          <ShowButton />
          <EditButton />
        </Datagrid>
      </List>
    );
  }
}

ListbworksStandard.propTypes = {
  translate: PropTypes.func,
  hasList: PropTypes.bool,
  hasShow: PropTypes.bool,
  hasCreate: PropTypes.bool,
  hasEdit: PropTypes.bool,
};

export default compose(translate)(ListbworksStandard);

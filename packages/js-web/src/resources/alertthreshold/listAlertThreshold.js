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
  ReferenceField,
  NumberField,
} from 'bwork-libs';
import { compose } from 'recompose';
import config from '../../Config';

const Filters = props => (
  <Filter {...props}>
    <TextInput source="name" label={'generic.search'} alwaysOn />
  </Filter>
);

class ListAlertThreshold extends Component {
  render() {
    const { translate, ...rest } = this.props;
    return (
      <List {...rest} filters={<Filters />} resource="alertthresholds">
        <Datagrid>
          <TextField source="name" />
          <SelectField
            source="alertType"
            choices={config.alertType}
            translateChoice={true}
            optionText="name"
            optionValue="id"
          />
          <ReferenceField source="bworksSourceId" reference="bworkssources" allowEmpty linkType={false}>
            <TextField source="name" />
          </ReferenceField>
          <SelectField
            source="alertParam"
            choices={config.alertParam}
            translateChoice={true}
            optionText="name"
            optionValue="id"
          />
          <ReferenceField source="bworksParabudgetId" reference="bworksparabudgets" allowEmpty linkType={false}>
            <TextField source="name" />
          </ReferenceField>
          <NumberField source="alertHigh" />
          <NumberField source="alertCriticalHigh" />
          <NumberField source="alertLow" />
          <NumberField source="alertCriticalLow" />

          <ShowButton />
          <EditButton />
        </Datagrid>
      </List>
    );
  }
}

ListAlertThreshold.propTypes = {
  translate: PropTypes.func,
  hasList: PropTypes.bool,
  hasShow: PropTypes.bool,
  hasCreate: PropTypes.bool,
  hasEdit: PropTypes.bool,
};

export default compose(translate)(ListAlertThreshold);

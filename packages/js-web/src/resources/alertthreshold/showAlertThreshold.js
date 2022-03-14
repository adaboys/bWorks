import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { Grid } from '@material-ui/core';
import {
  Show,
  HtmlField,
  TextField,
  NumberField,
  ReferenceField,
  translate,
  FlexForm,
  SelectField,
} from 'bwork-libs';
import config from '../../Config';

class ShowAlertThreshold extends Component {
  render() {
    const { translate, ...rest } = this.props;
    return (
      <Show {...rest} resource="alertthresholds">
        <FlexForm toolbar={false} style={{ flexGrow: 1 }} spacing={2}>
          <Grid middle container spacing={2}>
            <Grid middle item xs={12} sm={6}>
              <TextField source="name" />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <ReferenceField source="bworksSourceId" reference="bworkssources" allowEmpty>
                <TextField source="name" />
              </ReferenceField>
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <SelectField
                source="alertParam"
                choices={config.alertParam}
                translateChoice={true}
                optionText="name"
                optionValue="id"
              />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <SelectField
                source="alertType"
                choices={config.alertType}
                translateChoice={true}
                optionText="name"
                optionValue="id"
              />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <ReferenceField source="bworksParabudgetId" reference="bworksparabudgets" allowEmpty>
                <TextField source="name" />
              </ReferenceField>
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <NumberField source="alertHigh" />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <NumberField source="alertCriticalHigh" />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <NumberField source="alertLow" />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <NumberField source="alertCriticalLow" />
            </Grid>
            <Grid middle item xs={12} sm={12}>
              <HtmlField source="description" />
            </Grid>
          </Grid>
        </FlexForm>
      </Show>
    );
  }
}

ShowAlertThreshold.propTypes = {
  translate: PropTypes.any,
};

ShowAlertThreshold.detaultProps = {
  hasShow: true,
};
const enhance = compose(translate);
export default enhance(ShowAlertThreshold);

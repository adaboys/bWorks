import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Edit,
  FlexForm,
  NumberInput,
  TextInput,
  required,
  translate,
  minValue,
  maxValue,
  SelectInput,
  ReferenceInput,
  EditorInput,
  FormDataConsumer,
} from 'bwork-libs';
import { Grid } from '@material-ui/core';
import compose from 'recompose/compose';
import config from '../../Config';

class EditAlertThreshold extends Component {
  conditionalRender(formData, rest) {
    let alertType = formData.alertType;
    let alertParam = formData.alertParam;
    switch (true) {
      case alertParam == '1' && alertType == '1': {
        return (
          <Grid middle container spacing={2}>
            <Grid middle item xs={12} sm={6}>
              <NumberInput
                {...rest}
                label="resources.alertthresholds.fields.alertHigh"
                source="alertHigh"
                validate={[required()]}
              />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <NumberInput
                {...rest}
                label="resources.alertthresholds.fields.alertCriticalHigh"
                source="alertCriticalHigh"
                validate={[required(), minValue(formData.alertHigh)]}
              />
            </Grid>
          </Grid>
        );
      }

      case alertParam == '1' && alertType == '2': {
        return (
          <Grid middle="true" container spacing={2}>
            <Grid middle item xs={12} sm={6}>
              <NumberInput
                {...rest}
                label="resources.alertthresholds.fields.alertLow"
                source="alertLow"
                validate={[required()]}
              />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <NumberInput
                {...rest}
                label="resources.alertthresholds.fields.alertCriticalLow"
                source="alertCriticalLow"
                validate={[required(), maxValue(formData.alertLow)]}
              />
            </Grid>
          </Grid>
        );
      }
      case alertParam == '1' && alertType == '3': {
        return (
          <Grid middle="true" container spacing={2}>
            <Grid middle item xs={12} sm={6}>
              <NumberInput
                {...rest}
                label="resources.alertthresholds.fields.alertHigh"
                source="alertHigh"
                validate={[required()]}
              />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <NumberInput
                {...rest}
                label="resources.alertthresholds.fields.alertCriticalHigh"
                source="alertCriticalHigh"
                validate={[required(), minValue(formData.alertHigh)]}
              />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <NumberInput
                {...rest}
                label="resources.alertthresholds.fields.alertLow"
                source="alertLow"
                validate={[required()]}
              />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <NumberInput
                {...rest}
                label="resources.alertthresholds.fields.alertCriticalLow"
                source="alertCriticalLow"
                validate={[required(), maxValue(formData.alertLow)]}
              />
            </Grid>
          </Grid>
        );
      }
      case alertParam == '2': {
        return (
          <Grid middle="true" container spacing={2}>
            <Grid middle item xs={12} sm={6}>
              <NumberInput
                {...rest}
                label="resources.alertthresholds.fields.alertFlowHigh"
                source="alertHigh"
                validate={[required()]}
              />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <NumberInput
                {...rest}
                label="resources.alertthresholds.fields.alertFlowCriticalHigh"
                source="alertCriticalHigh"
                validate={[required(), minValue(formData.alertHigh)]}
              />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <NumberInput
                {...rest}
                label="resources.alertthresholds.fields.alertFlowLow"
                source="alertLow"
                validate={[required()]}
              />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <NumberInput
                {...rest}
                label="resources.alertthresholds.fields.alertFlowCriticalLow"
                source="alertCriticalLow"
                validate={[required(), maxValue(formData.alertLow)]}
              />
            </Grid>
          </Grid>
        );
      }
      case alertParam == '3': {
        return (
          <Grid middle="true" container spacing={2}>
            <Grid middle item xs={12} sm={6}>
              <NumberInput
                {...rest}
                label="resources.alertthresholds.fields.alertVolumeHigh"
                source="alertHigh"
                validate={[required()]}
              />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <NumberInput
                {...rest}
                label="resources.alertthresholds.fields.alertVolumeCriticalHigh"
                source="alertCriticalHigh"
                validate={[required(), minValue(formData.alertHigh)]}
              />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <NumberInput
                {...rest}
                label="resources.alertthresholds.fields.alertVolumeLow"
                source="alertLow"
                validate={[required()]}
              />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <NumberInput
                {...rest}
                label="resources.alertthresholds.fields.alertVolumeCriticalLow"
                source="alertCriticalLow"
                validate={[required(), maxValue(formData.alertLow)]}
              />
            </Grid>
          </Grid>
        );
      }
      default: {
        return null;
      }
    }
  }

  render() {
    const { props } = this;
    return (
      <Edit {...props} resource="alertthresholds" spacing={2} redirect="list" submitOnEnter={false}>
        <FlexForm style={{ flexGrow: 1 }} spacing={2} redirect="list" submitOnEnter={false}>
          <Grid middle container spacing={2}>
            <Grid middle item xs={12} sm={6}>
              <TextInput source="name" validate={[required()]} />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <ReferenceInput source="bworksSourceId" reference="bworkssources" validate={[required()]}>
                <SelectInput source="name" />
              </ReferenceInput>
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <SelectInput
                source="alertParam"
                choices={config.alertParam}
                translateChoice={true}
                optionText="name"
                optionValue="id"
              />
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <FormDataConsumer>
                {({ formData, ...rest }) =>
                  formData.alertParam === '1' && (
                    <ReferenceInput
                      label="resources.alertthresholds.fields.bworksParabudgetId"
                      {...rest}
                      source="bworksParabudgetId"
                      reference="bworksparabudgets"
                      validate={[required()]}
                    >
                      <SelectInput source="name" />
                    </ReferenceInput>
                  )
                }
              </FormDataConsumer>
            </Grid>
            <Grid middle item xs={12} sm={6}>
              <FormDataConsumer>
                {({ formData, ...rest }) =>
                  formData.alertParam === '1' && (
                    <SelectInput
                      label="resources.alertthresholds.fields.alertType"
                      {...rest}
                      source="alertType"
                      choices={config.alertType}
                      translateChoice={true}
                      optionText="name"
                      optionValue="id"
                      validate={[required()]}
                    />
                  )
                }
              </FormDataConsumer>
            </Grid>

            <Grid middle item xs={12} sm={12}>
              <FormDataConsumer>
                {({ formData, ...rest }) => {
                  return this.conditionalRender(formData, rest);
                }}
              </FormDataConsumer>
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
EditAlertThreshold.propTypes = {
  translate: PropTypes.func,
  hasList: PropTypes.bool,
  hasShow: PropTypes.bool,
  staticcontext: PropTypes.any,
};
EditAlertThreshold.detaultProps = {
  hasList: true,
  hasShow: true,
};

const enhance = compose(translate);
export default enhance(EditAlertThreshold);

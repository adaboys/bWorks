import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { Grid, Chip } from '@material-ui/core';
import { Show, HtmlField, TextField, translate, FlexForm, SelectField, DateField, NumberField, SingleFieldList,ArrayField, ChipField,  } from 'bwork-libs';
import config from '../../Config';




const TagsField = ({ record }) =>
  record.skills ? (
    <ul>
      {record.skills.map(item => (
        <Chip key={item} label={item} />
      ))}
    </ul>
  ) : null;
TagsField.defaultProps = {
  addLabel: true,
};

class ShowPostJob extends Component {
  render() {
    const { translate, ...rest } = this.props;
    return (
      <Show {...rest} resource="tests" hasEdit={false}>
        <FlexForm toolbar={false} style={{ flexGrow: 1 }} spacing={2}>
        <Grid middle container spacing={1}>
            <Grid middle item xs={12} sm={4}>
              <TextField source="name" label="Job name" />
            </Grid>

            <Grid middle item xs={12} sm={4}>
              <DateField source="expectedDate" label="Expire date" />
            </Grid>
            <Grid middle item xs={12} sm={4}>
              <DateField source="createdDate" label="Created date" />
            </Grid>
            <Grid middle item xs={12} sm={4}>
              <NumberField source="estimatedCost" label="Budget (Ada)" />
            </Grid>
            <Grid middle item xs={12} sm={4}>
              <NumberField source="requiredAda" label="Required Ada for bidding" />
            </Grid>
            <Grid middle item xs={12} sm={12}>
              <TagsField label="Required skills" source="skills"></TagsField>
            </Grid>
            <Grid middle item xs={12} sm={12}>
            <ArrayField source="subitcardano" label="Sub tasks">
    <SingleFieldList>
        <ChipField source="value" />
    </SingleFieldList>
</ArrayField>
</Grid>
            <Grid middle item xs={12} sm={4}>
              <TextField source="employer" label="Employer" />
            </Grid>
            <Grid middle item xs={12} sm={12}>
              <TextField source="employerWallet" label="Employer wallet" />
            </Grid>
            <Grid middle item xs={12} sm={12}>
              <HtmlField source="description" label="Job Description" />
            </Grid>
          </Grid>
        </FlexForm>
      </Show>
    );
  }
}

ShowPostJob.propTypes = {
  translate: PropTypes.any,
};

ShowPostJob.detaultProps = {
  hasShow: true,
};
const enhance = compose(translate);
export default enhance(ShowPostJob);

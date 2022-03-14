import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { compose } from 'recompose';
import { SelectInput, translate, withDataProvider, CUSTOM } from 'bwork-libs';
import { connect } from 'react-redux';

// hien thi cac epoch cua 1 level
class epochOneLevelSelectInput extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    let { level, parentepochid } = this.props;
    this.getData(level, parentepochid);
  }
  getData = (level, parentepochId) => {
    let tmp = {};
    if (parentepochId) {
      tmp.where = { and: [{ level }, { parentepochId }] };
    } else {
      tmp.where = { level };
    }
    this.props
      .dataProvider(CUSTOM, 'epochs', {
        query: { filter: JSON.stringify(tmp) },
      })
      .then(res => {
        let tmp = [];
        tmp.push({ id: 'Allepoch', name: 'generic.allepoch' });
        if (res.data && res.data.length) {
          for (let i = 0; i < res.data.length; i++) {
            let item = {};
            item.id = res.data[i].id;
            item.name = res.data[i].name;
            tmp.push(item);
          }
        }
        this.setState({ data: tmp });
      });
  };
  UNSAFE_componentWillReceiveProps(nextProps) {
    let { level, parentepochid } = nextProps;
    this.getData(level, parentepochid);
  }
  onChange = (e, val) => {
    this.props.onChange(val);
  };
  render() {
    let { dataProvider, push, basePath, ...rest } = this.props;
    return (
      <SelectInput
        {...rest}
        source={this.props.source}
        label={this.props.translate('generic.epoch')}
        choices={this.state.data}
        style={{ marginLeft: '5px' }}
        defaultValue={'Allepoch'}
        onChange={this.onChange}
      />
    );
  }
}
epochOneLevelSelectInput.defaultProps = {};

epochOneLevelSelectInput.propTypes = {
  translate: PropTypes.func,
  level: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  source: PropTypes.string.isRequired,
  dataProvider: PropTypes.func,
  push: PropTypes.func,
  basePath: PropTypes.string,
  parentepochid: PropTypes.string,
};
const enhance = compose(
  withDataProvider,
  translate,
  connect(null, {
    push,
  }),
);

export default enhance(epochOneLevelSelectInput);

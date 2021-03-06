import commonFields from '../commomFields';
export default {
  name: 'Volume report',
  titleList: 'Alert',
  time: 'Time',
  value: 'Value',
  alert1: 'Critical high',
  alert2: 'High',
  alert3: 'Low',
  alert4: 'Critical low',
  alert5: 'Normal',
  numberAlertCriticalHigh: 'Critical high alert count: %{val}',
  numberAlertHigh: 'High alert count: %{val}',
  numberAlertLow: 'Low alert count: %{val}',
  numberAlertCriticalLow: 'Critical low alert count: %{val}',
  sumbworksSource: 'bworks source count: %{val}',

  fields: {
    name: 'Name',
    prefix: 'Prefix',
    fullName: 'FullName',
    code: 'Code',
    population: 'Population',
    countryId: 'Country',
    provinceId: 'Province/city',
    districtId: 'District',
    position: 'Position',
    description: 'Description',
    selectParabudget: 'Select parabudget',
    selectGroup: 'Select group',
    selectSource: 'Select source',
    bworksSourceName: 'bworks source ame',
    bworksUsage: 'bworks usage (m³)',
    alert: 'Alert',
    logTime: 'LogTime',
    ...commonFields,
  },
  list: 'List',
  create: 'Create',
  edit: 'Edit',
  show: 'Show',
  volume: 'Volume (m³)',
  tab1: 'Details',
  tab2: 'Chart',
};

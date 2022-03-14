import commonFields from '../commomFields';
export default {
  name: 'Factory',
  fields: {
    name: 'Name',
    prefix: 'Prefix',
    fullName: 'FullName',
    code: 'Code',
    population: 'Population',
    countryId: 'CountryId',
    provinceId: 'ProvinceId',
    districtId: 'DistrictId',
    position: 'Position',
    dimensions: 'Dimensions (m)',
    capacityDay: 'Daily capacity (m3/day)',
    description: 'Description',
    ...commonFields,
  },
  list: 'List',
  create: 'Create',
  edit: 'Edit',
  show: 'Show',
};

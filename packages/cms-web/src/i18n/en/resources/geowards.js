import commonFields from '../commomFields';
export default {
  name: 'Ward',
  fields: {
    name: 'Name',
    prefix: 'Prefix',
    fullName: 'FullName',
    code: 'Code',
    population: 'Population',
    countryId: 'Country',
    provinceId: 'Province',
    districtId: 'District',
    position: 'Position',
    ...commonFields,
  },
  list: 'list',
  create: 'Create',
  edit: 'Edit',
  show: 'Show',
};

import commonFields from '../commomFields';
export default {
  name: 'Quater',
  fields: {
    name: 'Name',
    prefix: 'Prefix',
    fullName: 'FullName',
    code: 'Code',
    population: 'Population',
    countryId: 'Country',
    provinceId: 'Province',
    districtId: 'District',
    wardId: 'Ward',
    position: 'Position',
    ...commonFields,
  },
  list: 'List',
  create: 'Create',
  edit: 'Edit',
  show: 'Show',
};

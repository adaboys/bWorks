import commonFields from '../commomFields';
export default {
  name: 'Measure method',
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
    volRequire: 'Require volume (ml)',
    container: 'Container type',
    preservative: 'Preservative',
    holdingTime: 'Holding time',
    ...commonFields,
  },
  list: 'List',
  create: 'Create',
  edit: 'Edit',
  show: 'Show',
};

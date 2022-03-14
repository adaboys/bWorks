import commonFields from '../commomFields';
export default {
  name: 'Country',
  fields: {
    name: 'Name',
    prefix: 'Prefix',
    fullName: 'FullName',
    code: 'Code',
    population: 'Population',
    position: 'Position',
    ...commonFields,
  },
  list: 'List',
  create: 'Create',
  edit: 'Edit',
  show: 'Show',
};

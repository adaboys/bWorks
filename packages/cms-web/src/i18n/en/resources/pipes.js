import commonFields from '../commomFields';
export default {
  name: 'Pipe',
  fields: {
    name: 'Name',
    length: 'Length (m)',
    fromPosition: 'From position',
    toPosition: 'To position',
    ...commonFields,
  },
  list: 'List',
  create: 'Create',
  edit: 'Edit',
  show: 'Show',
};

import commonFields from '../commomFields';
export default {
  name: 'Source template',
  fields: {
    name: 'Name',
    prefix: 'Prefix',
    fullName: 'FullName',
    id: 'Template ID',
    data: 'Template file',
    ...commonFields,
  },
  list: 'List',
  create: 'Create',
  edit: 'Edit',
  show: 'Show',
};

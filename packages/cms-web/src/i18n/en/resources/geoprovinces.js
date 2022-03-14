import commonFields from '../commomFields';
export default {
  name: 'Province/city',
  fields: {
    name: 'Name',
    prefix: 'Prefix',
    fullName: 'Transaction name',
    code: 'Hash',
    amount: 'Amount',
    population: 'Amount',
    countryId: 'Chain network',
    position: 'Position',
    ...commonFields,
  },
  list: 'List',
  create: 'Create',
  edit: 'Edit',
  show: 'Show',
};

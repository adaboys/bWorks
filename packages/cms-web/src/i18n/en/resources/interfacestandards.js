import commonFields from '../commomFields';
export default {
  name: 'Interface standard',
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
    interfaceStandardType: 'InterfaceStandardType (M=machine, D=device)',
    dataRate: 'DataRate (Kb/s)',
    frequency: 'Frequency',
    range: 'Range',
    ...commonFields,
  },
  list: 'List',
  create: 'Create',
  edit: 'Edit',
  show: 'Show',
};

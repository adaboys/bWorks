import { RevenueIcon } from '../../styles/Icons';
import ListDeposit from '../../resources/deposit/listDeposit';
import CreateDeposit from '../../resources/deposit/createDeposit';
import EditDeposit from '../../resources/deposit/editDeposit';
import ShowDeposit from '../../resources/deposit/showDeposit';

export default {
  name: 'deposit',
  label: 'generic.pages.deposit',
  icon: RevenueIcon,
  url: 'deposit',
  screens: {
    list: ListDeposit,
    create: CreateDeposit,
    edit: EditDeposit,
    show: ShowDeposit,
  },
  resources: ['deposits'],
  active: true,
  access: {
    read: [],
    write: [],
  },
};

import { FormulaIcon } from '../../styles/Icons';
import Listwithdraw from '../../resources/withdraw/listWithdraw';
import Createwithdraw from '../../resources/withdraw/createWithdraw';
import Editwithdraw from '../../resources/withdraw/editWithdraw';
import Showwithdraw from '../../resources/withdraw/showWithdraw';

export default {
  name: 'withdraw',
  label: 'generic.pages.withdraw',
  icon: FormulaIcon,
  url: 'withdraw',
  screens: {
    list: Listwithdraw,
    create: Createwithdraw,
    edit: Editwithdraw,
    show: Showwithdraw,
  },
  resources: ['jswithdraws'],
  active: true,
  access: {
    read: [],
    write: [],
  },
};

import { ReporttransactionfeeIcon } from '../../styles/Icons';
import ReportMain from '../../resources/reporttransactionfee/reportMain';

export default {
  name: 'Reporttransactionfee',
  label: 'generic.pages.reporttransactionfee',
  icon: ReporttransactionfeeIcon,
  url: 'reporttransactionfee',
  screens: {
    main: ReportMain,
  },
  resources: [
    'epochs',
    'custombworksflows',
    'custombworkstimes',
    'custombworksflowtimelevel1s',
    'custombworksflowtimelevel2s',
    'reporttransactionfees',
  ],
  active: true,
  access: {
    read: [],
    write: [],
  },
};

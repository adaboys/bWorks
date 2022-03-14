import { InvoiceLockIcon } from '../../styles/Icons';
import ListreportSmartContract from '../../resources/reportSmartContract/listReportSmartContract';
import CreatereportSmartContract from '../../resources/reportSmartContract/createReportSmartContract';
import EditreportSmartContract from '../../resources/reportSmartContract/editReportSmartContract';
import ShowreportSmartContract from '../../resources/reportSmartContract/showReportSmartContract';

export default {
  name: 'reportSmartContract',
  label: 'generic.pages.reportSmartContract',
  icon: InvoiceLockIcon,
  url: 'reportSmartContract',
  screens: {
    list: ListreportSmartContract,
    create: CreatereportSmartContract,
    edit: EditreportSmartContract,
    show: ShowreportSmartContract,
  },
  resources: ['postjobs'],
  active: true,
  access: {
    read: [],
    write: [],
  },
};

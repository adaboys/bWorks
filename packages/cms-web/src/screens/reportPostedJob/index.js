import { reportPostedJobIcon } from '../../styles/Icons';
import ListreportPostedJob from '../../resources/reportPostedJob/listReportPostedJob';
import CreatereportPostedJob from '../../resources/reportPostedJob/createReportPostedJob';
import EditreportPostedJob from '../../resources/reportPostedJob/editReportPostedJob';
import ShowreportPostedJob from '../../resources/reportPostedJob/showReportPostedJob';

export default {
  name: 'reportPostedJob',
  label: 'generic.pages.reportPostedJob',
  icon: reportPostedJobIcon,
  url: 'reportPostedJob',
  screens: {
    list: ListreportPostedJob,
    create: CreatereportPostedJob,
    edit: EditreportPostedJob,
    show: ShowreportPostedJob,
  },
  resources: ['postjobs'],
  active: true,
  access: {
    read: [],
    write: [],
  },
};

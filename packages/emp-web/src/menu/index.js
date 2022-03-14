import dashboard from '../screens/dashboard';
import {
  GeoIcon,
  ParentMenuReportIcon,
  ParentMenuDesignIcon,
  ParentMenuStandardIcon,
  ParentMenuStatisticIcon,
  MonitorIcon,
} from '../styles/Icons';

// import GeoCountry from '../screens/geoCountry';
import FundHistory from '../screens/reportFund';
import PostedJob from '../screens/reportPostedJob';
import SmartContract from '../screens/reportSmartContract';
import configuration from '../screens/configuration';
import Deposit from '../screens/deposit';
import WithDraw from '../screens/withdraw';
import PostJob from '../screens/postjob';
import BiddingJob from '../screens/bidjobs';
import smartContract from '../screens/contractedjobs';
import SourceTemplate from '../screens/changepassword';

export default {
  menu: [
    dashboard,
    {
      name: 'jobManagement',
      label: 'generic.pages.jobManagement',
      icon: ParentMenuStatisticIcon,
      menu: [PostJob, BiddingJob, smartContract],
    },
    {
      name: 'fundManagement',
      label: 'generic.pages.parentMenuReport',
      icon: ParentMenuReportIcon,
      menu: [Deposit, WithDraw],
    },
    
    {
      name: 'Geo',
      label: 'generic.pages.geo',
      icon: GeoIcon,
      menu: [FundHistory, PostedJob, SmartContract],
    },
    SourceTemplate,
    configuration,
  ],
};

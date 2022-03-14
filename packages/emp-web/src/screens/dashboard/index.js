import { DashboardIcon } from '../../styles/Icons';
import Dashboard from './Dashboard';

export default {
  name: 'Dashboard',
  label: 'generic.pages.dashboard',
  icon: DashboardIcon,
  url: '',
  screens: {
    main: { component: Dashboard, exact: true },
  },
  access: {
    read: [],
    write: [],
  },
};

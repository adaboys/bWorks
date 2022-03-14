import { SourceTemplateIcon } from '../../styles/Icons';
import Main from '../../resources/changepassword/main'
export default {
  name: 'ChangePassword',
  label: 'generic.pages.changePassword',
  icon: SourceTemplateIcon,
  url: 'changepassword',
  screens: {
    main: Main
  },
  resources: ['changepasswords'],
  active: true,
  access: {
    read: [],
    write: [],
  },
};

import { ConfigurationIcon } from '../../styles/Icons';
import SettingList from '../../resources/setting/listSetting';
import SettingCreate from '../../resources/setting/createSetting';
import SettingEdit from '../../resources/setting/editSetting';
export default {
  name: 'Setting',
  label: 'generic.pages.configuration',
  icon: ConfigurationIcon,
  url: 'setting',
  screens: {
    list: SettingList,
    create: SettingCreate,
    edit: SettingEdit,
  },
  resources: ['settings'],
  active: true,
  access: {
    read: [],
    write: [],
  },
};

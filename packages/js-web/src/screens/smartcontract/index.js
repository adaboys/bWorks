import { ReportMaterialIcon } from '../../styles/Icons';
import ReportMain from '../../resources/reportmaterial/reportMain';

export default {
  name: 'ReportMaterial',
  label: 'generic.pages.reportmaterial',
  icon: ReportMaterialIcon,
  url: 'reportmaterial',
  screens: {
    main: ReportMain,
  },
  resources: [
    'dmas',
    'custombworksflows',
    'custombworkspressures',
    'custombworksflowpressurelevel1s',
    'custombworksflowpressurelevel2s',
    'reportmaterials',
  ],
  active: true,
  access: {
    read: [],
    write: [],
  },
};

import { MatDetailTypeIcon } from '../../styles/Icons';
import ListPostJob from '../../resources/postjob/listPostJob';
import CreatePostJob from '../../resources/postjob/createPostJob';
import EditPostJob from '../../resources/postjob/editPostJob';
import ShowPostJob from '../../resources/postjob/showPostJob';

import AdfScannerIcon from '@material-ui/icons/WorkOutline';


export default {
  name: 'PostJob',
  label: 'generic.pages.employer',
  icon: AdfScannerIcon,
  url: 'employer',
  screens: {
    list: ListPostJob,
    create: CreatePostJob,
    edit: EditPostJob,
    show: ShowPostJob,
  },
  resources: ['tests'],
  active: true,
  access: {
    read: [],
    write: [],
  },
};

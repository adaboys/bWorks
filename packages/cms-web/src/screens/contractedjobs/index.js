import { InvoiceLockIcon } from '../../styles/Icons';
import ListPostJob from '../../resources/contractedjobs/listPostJob';
import CreatePostJob from '../../resources/contractedjobs/createPostJob';
import EditPostJob from '../../resources/contractedjobs/editPostJob';
import ShowPostJob from '../../resources/contractedjobs/showPostJob';

export default {
  name: 'contractedjobs',
  label: 'generic.pages.contractedjobs',
  icon: InvoiceLockIcon,
  url: 'contractedjobs',
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

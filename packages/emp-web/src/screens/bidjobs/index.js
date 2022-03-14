import { StatusIcon } from '../../styles/Icons';
import ListPostJob from '../../resources/bidjobs/listPostJob';
import CreatePostJob from '../../resources/bidjobs/createPostJob';
import EditPostJob from '../../resources/bidjobs/editPostJob';
import ShowPostJob from '../../resources/bidjobs/showPostJob';

export default {
  name: 'bidjobs',
  label: 'generic.pages.bidjobs',
  icon: StatusIcon,
  url: 'bidjobs',
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

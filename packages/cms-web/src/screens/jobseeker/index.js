import { MatDetailTypeIcon } from '../../styles/Icons';
import ListPostJob from '../../resources/postjob/listPostJob';
import CreatePostJob from '../../resources/postjob/createPostJob';
import EditPostJob from '../../resources/postjob/editPostJob';
import ShowPostJob from '../../resources/postjob/showPostJob';

export default {
  name: 'PostJob',
  label: 'generic.pages.jobSeeker',
  icon: MatDetailTypeIcon,
  url: 'jobseeker',
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

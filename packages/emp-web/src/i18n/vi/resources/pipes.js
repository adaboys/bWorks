import commonFields from '../commomFields';
export default {
  name: 'ống',
  fields: {
    name: 'Tên',
    length: 'Chiều dài (m)',
    fromPosition: 'Từ vị trí',
    toPosition: 'Đến vị trí',
    ...commonFields,
  },
  list: 'Danh sách',
  create: 'Tạo',
  edit: 'Sửa',
  show: 'Chi tiết',
};

import commonFields from '../commomFields';
export default {
  name: '',
  fields: {
    name: 'Tên',
    prefix: 'Tiền tố',
    fullName: 'Tên đầy đủ',
    code: 'Mã',
    population: 'Dân số',
    countryId: 'Quốc gia',
    provinceId: 'Tỉnh / Thành phố',
    districtId: 'Quận / Huyện',
    position: 'Vị trí trung tâm',
    interfaceStandardType: 'Loại giao tiếp (M=Máy, D=Device)',
    dataRate: 'Tốc độ truyền dữ liệu (Kb/s)',
    frequency: 'Tần số',
    range: 'Khoảng cách thông tin',
    ...commonFields,
  },
  list: 'Danh sách',
  create: 'Tạo',
  edit: 'Sửa',
  show: 'Chi tiết',
};

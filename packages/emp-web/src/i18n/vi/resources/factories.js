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
    position: 'Vị trí',
    dimensions: 'Kích thước dài, rộng, sâu (m)',
    capacityDay: 'Công suất ngày (m3/ngày)',
    description: 'Mô tả',
    ...commonFields,
  },
  list: 'Danh sách',
  create: 'Tạo',
  edit: 'Sửa',
  show: 'Chi tiết',
};

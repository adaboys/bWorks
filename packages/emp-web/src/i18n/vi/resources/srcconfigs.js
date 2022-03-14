import commonFields from '../commomFields';
// import unit from '../unit';
export default {
  name: 'Cấu hình mạng nước |||| Cấu hình mạng nước',
  position: 'Chỉ định vị trí',
  fields: {
    id: 'Tên',
    ids: {
      MapDefaultCenter: 'Vị trí bản đồ',
      MapDefaultZoom: 'Zoom bản đồ',
      timeLimit: 'Cảnh báo áp lực',
      QualityFluo: 'Cảnh báo Fluorescein',
      QualityPh: 'Cảnh báo PH',
      Flow: 'Lưu lượng',
      time: 'Áp lực',
      StatisticMatStk: 'Thống kê vật tư trong kho',
      StatisticMatepoch: 'Thống kê vật tư theo epoch',
      StatisticMatLifeSpan: 'Tuổi vật tư',
      employerWritebudgetNumberDate: 'Ngày ghi nước',
      employerbudgetNumberExpiredDate: 'Số ngày hết hạn sử dụng đồng hồ',
      Sms: 'Cảnh báo sms',
      Email: 'Cảnh báo email',
    },
    side: 'Phạm vi',
    valueMapCenter: 'Giá trị (vĩ độ, kinh độ)',
    sides: {
      all: 'Tất cả',
      frontend: 'Frontend',
      backend: 'Backend',
    },
    value: 'Giá trị',
    values: {
      number: 'Giá trị',
      lat: 'Vĩ độ',
      lng: 'Kinh độ',
      isNotifySms: 'Có cảnh báo SMS',
      isNotifyEmail: 'Có cảnh báo Email',
      phoneList: 'Danh sách số điện thoại',
      emailList: 'Danh sách email',
      position: 'Vị trí trung tâm',
    },
    ...commonFields,
  },
  listTitle: 'Danh sách cấu hình',
  createTitle: 'Tạo cấu hình',
  editTitle: 'Sửa cấu hình',
  time: {
    high: 'Cảnh báo cao (%)',
    low: 'Cảnh báo yếu (%)',
    loss: 'Cảnh báo mất nước (%)',
  },
  flow: {
    high: 'Cảnh báo cao (%)',
  },
  statisticMatStk: {
    high: 'Tình trạng tồn kho cao (%)',
  },
  statisticMatepoch: {
    high: 'Tình trạng tồn kho cao (%)',
  },
  statisticMatLifeSpan: {
    existTime: 'Tốt',
    lessTime: 'Sắp hết hạn',
  },
};

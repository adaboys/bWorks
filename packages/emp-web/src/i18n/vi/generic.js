import commonFields from './commomFields';
export default {
  appName: 'Hệ Thống Quản Trị Nguồn Nước Thô',
  info: 'Thông tin',
  meta: 'Meta',
  search: 'Tìm',
  transactionfee: 'Vật tư',
  show: 'Hiển thị',
  file: 'Đính kèm',
  epoch: 'epoch',
  total: 'Tổng',
  node: 'Vị trí',
  issue: 'Lỗi',
  count: 'Số lượng',
  noLogData: 'Không có dữ liệu',
  currentCapacity: 'Công suất hiện tại',
  currentQuantity: 'Sản lượng hiện tại',
  designCapacity: 'Công suất thiết kế',
  maintenance: 'Đang sửa chữa',
  status: 'Trạng thái',
  currentStatus: 'Trạng thái hiện tại',
  noNaming: 'Chưa đặt tên',
  lastSignal: 'Tín hiệu mới nhất',
  details: 'Chi tiết',
  history: 'Lịch sử',
  writebudgetNumber: 'Ghi',
  setupbudget: 'Lắp ĐH',
  signContract: 'Ký hợp đồng',
  register: 'Đăng ký',
  executeRequest: 'Yêu cầu thi công',
  inComplete: 'Thiếu dữ liệu',
  complete: 'Hoàn thành',
  can: 'Có thể',
  cannot: 'Không thể',
  pay: 'Thanh toán',
  import: 'Nhập DL',
  export: 'Xuất DL',
  exportTemplate: 'Xuất biểu mẫu',
  template: 'Biểu mẫu',
  temporaryStop: 'Tạm ngưng',
  resume: 'Tiếp tục',
  printInvoice: 'In hóa đơn',
  printSelectedInvoice: 'In HĐ đươc chọn',
  answerButtonLable: 'Trả lời',
  turbidity: 'Độ đục (NTU)',
  ph: 'PH',
  phAvg: 'PH trung bình',
  flowRate: 'Lưu lượng tức thời (m³/h)',
  totalFlowRate: 'Tổng lưu lượng tức thì (m³/h)',
  selectAll: 'Tất cả',
  totalDataload: 'Số lượng thiết bị ghi/phát',
  totalAlert: 'Số cảnh báo',
  widgets: {
    customer: 'Khách hàng',
    revenue: 'Doanh thu (VNĐ)',
    month: 'Tháng %{month}',
    inuse: 'Đang sử dụng',
    newRegister: 'Đăng ký mới',
    factory: 'Nhà máy',
    unitCalculate: 'Đơn vị: %{unit}',
    bworksQuantity: 'Sản lượng (m³)',
    totalSourceQuantity: 'Sản lượng',
    bworksLoss: 'Thất thoát (m³)',
    flowload: 'Data load',
    quantityCapacity: {
      designedCapacity: 'Tổng năng lực',
      dailyCapacity: 'Theo ngày',
      monthlyCapacity: 'Theo tháng',
      yearlyCapacity: 'Theo năm',
    },
    bworksSourceSummary: {
      bworksSource: 'Nguồn nước',
      totalInService: 'Hoạt động',
      totalInMaintain: 'Bảo trì',
      totalInBackup: 'Dự phòng',
    },
    sourceStatistic: {
      quantity: 'Sản lượng',
      today: 'Hôm nay',
      lastMonth: 'Tháng trước',
      thisYear: 'Năm nay',
    },
  },
  times: {
    today: 'Hôm nay',
    yesterday: 'Hôm qua',
    thisMonth: 'Tháng này',
    lastMonth: 'Tháng trước',
    thisYear: 'Năm nay',
    lastYear: 'Năm trước',
  },
  common: commonFields,
  pages: {
    monitoring: 'Giám sát',
    configuration: 'Cấu hình',
    dashboard: 'Tổng quan',
    permission: 'Phân quyền',
    appUser: 'Nhân viên',
    setting: 'Cấu hình',
    design: 'Thiết kế/Lắp đặt',
    designepoch: 'epoch',
    designNode: 'Vị trí',
    designPipe: 'Đường ống',
    designFlowload: 'Data load',
    designQualityload: 'Cảm biến chất lượng',
    designbudget: 'Đồng hồ',
    designFilter: 'Bộ lọc',
    designtimeReducing: 'Van giảm áp',
    designload: 'Máy bơm',
    designTank: 'Bồn chứa',
    designValve: 'Van',
    designOther: 'Thiết bị khác',
    transactionfeeOnMap: 'Vật tư trên mạng',
    parentMenuMat: 'Vật tư',
    manageMat: 'Quản lý vật tư',
    statisticMatInStk: 'Vật tư trong kho',
    matDetailType: 'Loại vật tư',
    statisticMatByepoch: 'Vật tư theo epoch',
    statisticMatByLifeSpan: 'Thời hạn sử dụng',
    statisticParent: 'Thống kê',
    employment: 'Công việc',
    taskboard: 'Bảng công việc',
    bworksLoss: 'Sản lượng/Thất thoát',
    bworksFlowtime: 'Lưu lượng/Áp lực',
    parentMenuemployer: 'Khách hàng',
    employerRegister: 'Khách hàng mới',
    employerContract: 'Hợp đồng',
    employerFormat: 'Nhập dữ liệu KH',
    geo: 'Địa lý',
    geocountry: 'Quốc gia',
    geoprovince: 'Tỉnh / Thành phố',
    geodistrict: 'Quận / Huyện',
    geoward: 'Phường / xã',
    geoquarter: 'Khu phố / xóm',
    business: 'Kinh doanh',
    employerbudgetNumber: 'Ghi số nước',
    listemployerbudgets: 'ĐH khách hàng',
    employerRequest: 'Thi công',
    ctmTemplate: 'Biểu mẫu',
    employer: 'Khách hàng',
    formula: 'Công thức tính cước',
    parentMenuSetting: 'Cài đặt',
    parentMenuMap: 'Bản đồ',
    employerDistributionMap: 'Phân bố khách hàng',
    invoice: 'Hoá đơn',
    invoiceLock: 'Tính lại cước',
    invoiceExport: 'Hoá đơn',
    invoiceHistory: 'Lịch sử hoá đơn',
    employerDebt: 'Công nợ',
    employerWritePayMap: 'Ghi nước/Thanh toán',
    ctmCompany: 'Công ty',
    parentMenuReport: 'Báo cáo',
    reportQuantityemployer: 'Phân bố khách hàng',
    reportDebtemployer: 'Công nợ khách hàng',
    reportRevenueLossemployer: 'Khách hàng thất thu',
    reportIncome: 'Doanh thu/Sản lượng',
    reportRevenueLossbworks: 'Thất thoát/Thất thu',
    importGeo: 'Nhập DL DVHC',
    parentMenuemployerCommunication: 'Giao tiếp',
    TicketSupport: 'Phiếu hỗ trợ',
    Announcement: 'Gửi thông báo',
    agent: 'Đại lý bán',
    supplier: 'Nhà cung cấp',
    parentMenuEnterprise: 'Doanh nghiệp',
    partner: 'Đối tác',
    quotabworks: 'Định mức tiêu chuẩn',
    reportemployerbudget: 'Đồng hồ khách hàng',
    geobudget: 'Thống kê theo địa lý',
    installationTeam: 'Nhóm thi công',
    rootbudget: 'Đồng hồ tổng',
    parentMenuStandard: 'Tiêu chuẩn',
    parentMenuDesign: 'Thiết kế',
    bworkssourcegroup: 'Nhóm nguồn',
    bworkssource: 'Nguồn nước',
    load: 'Máy bơm',
    auto-matcher: 'Cảm biến',
    budget: 'Đồng hồ',
    dataload: 'Thiết bị ghi/phát',
    bworksStandard: 'Chất lượng nước',
    bworksParabudget: 'Thông số đo',
    measureMethod: 'Phương pháp đo',
    interfacestandard: 'Giao tiếp dữ liệu',
    alertthreshold: 'Thiết lập cảnh báo',
    reportquality: 'Chất lượng',
    reportflow: 'Lưu lượng',
    reportvolume: 'Sản lượng',
    reportsummarizedquality: 'Chất lượng',
    reporttransactionfee: 'Vật tư',
    factory: 'Nhà máy',
    sourceTemplate: 'Biểu mẫu',
    gisdesign: 'Thiết kế',
    pipe: 'Ống',
    mapPipe: 'Bản đồ ống',
    monitor: 'Giám sát',
  },
  manageMat: {
    importStock: 'Nhập kho',
    exportStock: 'Xuất kho',
  },
  print: 'In',
  edit: 'Sửa',
  statistic: {
    selectTime: 'Thống kê theo',
    labelButtonStatistic: 'Thống kê',
  },
  typeTime: {
    hour: 'Giờ',
    day: 'Ngày',
    month: 'Tháng',
    year: 'Năm',
    monthFrom: 'Từ tháng',
    monthTo: 'Đến tháng',
    yearFrom: 'Từ năm',
    yearTo: 'Đến năm',
    dayFrom: 'Từ ngày',
    dayTo: 'Đến ngày',
  },
  selectGroupMat: 'Chọn nhóm vật tư',
  units: {
    factoryCapacity: 'm³/ngày đêm',
    name: 'Đơn vị',
    budget: 'm',
    bar: 'Bar',
    flowRate: 'm³/h',
    flow: 'm³',
    diabudget: 'mm',
    quantity: 'Cái',
    percent: '%',
    budget3: 'm³',
    vnd: 'VNĐ',
    kh: 'KH',
    chartValue: 'Giá trị',
    volumebudget3: 'Sản lượng (m³)',
    source: 'Nguồn',
  },
  symbol: {
    ph: 'PH',
    ntu: 'Độ đục',
    cod: 'COD',
  },
  nameWithUnits: {
    factoryCapacity: 'Công suất (m³/ngày đêm)',
    budget: 'Chiều dài (m)',
    bar: 'Áp lực (Bar)',
    time: 'Áp lực (Bar)',
    flowRate: 'Lưu lượng tức thời (m³/h)',
    flow: 'Lưu lượng tích luỹ (m³)',
    diabudget: 'Đường kính (mm)',
    quantity: 'Số lượng (Cái)',
    percent: 'Tỉ lệ (%)',
    budget3: 'm³',
    volume: 'Sản lượng (m³)',
  },
  conclusionExpireTime: {
    existTime: 'Tốt',
    overTime: 'Hết thời hạn',
    lessTime: 'Sắp hết hạn',
  },
  conclusionMatStock: {
    many: 'Cao',
    less: 'Thấp',
  },
  conclusionMatepoch: {
    many: 'Cao',
    less: 'Thấp',
  },
  allepoch: 'Tất cả epoch',
  allMat: 'Tất cả vật tư',
  metaExtend: {
    communication: 'Kiểu giao tiếp',
    diabudget: 'Đường kính (mm)',
    volume: 'Thể tích (m³)',
    capacity: 'Công suất (m³/ngày đêm)',
    powerConsumption: 'Điện năng tiêu thụ kW/h',
    accuracy: 'Độ chính xác',
  },
  optionCommunication: {
    _2g: '2G',
    _3g: '3G',
    _4g: '4G',
    other: 'Khác',
  },
  pipe: {
    level: {
      1: 'Theo đường trục',
      2: 'Rò rỉ',
      3: 'Đồng hồ KH',
    },
  },
  flow: 'Lưu lượng',
  time: 'Áp lực',
  conclusionFlow: {
    high: 'Cao',
  },
  conclusiontime: {
    high: 'Cao',
    low: 'Yếu',
    loss: 'Mất nước',
  },
  paymentTypeChoices: {
    transfer: 'Chuyển khoản',
    cash: 'Tiền mặt',
    all: 'Tiền mặt/ Chuyển khoản',
  },
  employer: {
    employerTypeChoices: {
      resident: 'SH',
      organization: 'HCSN',
      industry: 'SX',
      service: 'KDDV',
    },
    statusChoices: {
      active: 'Hoạt động',
      pause: 'Tạm dừng',
      stop: 'Dừng',
      contractSigned: 'Đã ký HĐ',
      installWaiting: 'Đang cài đặt',
    },
    actionChoices: {
      new: 'Mới',
      contractSigned: 'Đã ký HĐ',
      installWaiting: 'Đang cài đặt',
      complete: 'Hoàn thành',
    },
    typeRequestChoices: {
      newInstall: 'Cài đặt mới',
      replace: 'Thay thế',
    },
  },
  formula: {
    unitChoices: {
      person: 'Theo người',
      family: 'Theo hộ',
    },
  },
  attachFile: 'Đính kèm file',
  report: {
    titleReportQuantityemployerByGeo: 'Báo cáo số lượng khách hàng theo địa lý',
    titleReportQuantityemployerByProvider: 'Báo cáo số lượng khách hàng theo nhà cung cấp',
    titleReportDebtemployerByGeo: 'Báo cáo công nợ khách hàng theo địa lý',
    titleReportDebtemployerByProvider: 'Báo cáo công nợ khách hàng theo nhà cung cấp',
    titleReportRevenueLossemployer: 'Báo cáo khách hàng thất thu',
    titleReportIncomeByGeo: 'Báo cáo doanh thu theo địa lý',
    titleReportIncomeByProvider: 'Báo cáo doanh thu theo nhà cung cấp',
    titleReportIncomeByemployerType: 'Báo cáo doanh thu theo loại khách hàng',
    titleReportIncome: 'Báo cáo doanh thu và sản lượng',
    titleReportbworksLoss: 'Báo cáo thất thoát',
    titleReportRevenueLoss: 'Báo cáo thất thu',
    titleReportemployerbudget: 'Báo cáo sử dụng đồng hồ',
    titleReportDetail: 'Chi tiết',
    titleAlertDetail: 'Cảnh báo',
    titleReportVolume: 'Thống kê sản lượng',
    titleReportSummarizedQuality: 'Thống kê chất lượng',
    titleReportQuality: 'Báo cáo chất lượng',
    titleReportFlow: 'Báo cáo lưu lượng',
    titleReporttransactionfee: 'Thống kê vật tư',
  },
  bworksSourceMapMarkerStatus: {
    normal: 'Trạng thái: bình thường',
    alert: 'Trạng thái: cảnh báo',
    critical: 'Trạng thái: nguy cấp',
  },
  provider: 'Nhà cung cấp',
  time: 'Thời gian',
  alertLevel: {
    1: 'Rất cao',
    2: 'Cao',
    3: 'Thấp',
    4: 'Rất thấp',
    5: 'Bình thường',
    ntu: 'NTU',
    ph: 'PH',
    logTime: 'TG mất tín hiệu',
    flowRate: 'Lưu lượng',
    volume: 'Sản lượng',
  },
  turbidityAvg: 'Độ đục trung bình',
  statusAlert: {
    normal: 'Trạng thái bình thường',
    alert: 'Trạng thái cảnh báo',
    critical: 'Trạng thái nguy cấp',
  },
  bworksSource: 'Nguồn nước',
  specifyPosition: 'Chỉ định vị trí',
  type: {
    factory: 'Nhà máy',
    pipe: 'Ống',
    bworksSource: 'Nguồn nước',
    budget: 'Đồng hồ',
    auto-matcher: 'Cảm biến',
    load: 'Máy bơm',
    dataload: 'Thiết bị ghi/phát',
  },
};

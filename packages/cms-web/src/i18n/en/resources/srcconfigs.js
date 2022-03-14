import commonFields from '../commomFields';
// import unit from '../unit';
export default {
  name: 'bworks source system configurations |||| bworks source system configurations',
  position: 'Position',
  fields: {
    id: 'Name',
    ids: {
      MapDefaultCenter: 'Map default center',
      MapDefaultZoom: 'Map default zoom',
      timeLimit: 'time limit',
      QualityFluo: 'Fluo',
      QualityPh: 'PH',
      Flow: 'Flow',
      time: 'time',
      StatisticMatStk: 'Stocked transactionfee report',
      StatisticMatepoch: 'Deployed transactionfee report',
      StatisticMatLifeSpan: 'transactionfee age',
      employerWritebudgetNumberDate: 'employer budget record date',
      employerbudgetNumberExpiredDate: 'employer budget days to expire',
      Sms: 'SMS alert',
      Email: 'Email alert',
    },
    side: 'Side',
    valueMapCenter: 'Value (latitude, longitude)',
    sides: {
      all: 'All',
      frontend: 'Frontend',
      backend: 'Backend',
    },
    value: 'Value',
    values: {
      number: 'Number',
      lat: 'Latitude',
      lng: 'Longitude',
      isNotifySms: 'Is notified by SMS',
      isNotifyEmail: 'Is notified by Email',
      phoneList: 'Phone list',
      emailList: 'Email list',
      position: 'Position',
    },
    ...commonFields,
  },
  listTitle: 'Configuration list',
  createTitle: 'Create configuration',
  editTitle: 'Edit configuration',
  time: {
    high: 'High (%)',
    low: 'Low (%)',
    loss: 'bworks loss (%)',
  },
  flow: {
    high: 'High (%)',
  },
  statisticMatStk: {
    high: 'High stocked transactionfee (%)',
  },
  statisticMatepoch: {
    high: 'High stocked transactionfee (%)',
  },
  statisticMatLifeSpan: {
    existTime: 'In valid age (months)',
    lessTime: 'Near to expire (months)',
  },
};

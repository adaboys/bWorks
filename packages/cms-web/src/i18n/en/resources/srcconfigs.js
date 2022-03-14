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
      PressureLimit: 'Pressure limit',
      QualityFluo: 'Fluo',
      QualityPh: 'PH',
      Flow: 'Flow',
      Pressure: 'Pressure',
      StatisticMatStk: 'Stocked material report',
      StatisticMatDMA: 'Deployed material report',
      StatisticMatLifeSpan: 'Material age',
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
  pressure: {
    high: 'High (%)',
    low: 'Low (%)',
    loss: 'bworks loss (%)',
  },
  flow: {
    high: 'High (%)',
  },
  statisticMatStk: {
    high: 'High stocked material (%)',
  },
  statisticMatDMA: {
    high: 'High stocked material (%)',
  },
  statisticMatLifeSpan: {
    existTime: 'In valid age (months)',
    lessTime: 'Near to expire (months)',
  },
};

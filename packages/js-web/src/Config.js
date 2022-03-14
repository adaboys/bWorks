export default {
  mapApiKey: 'AIzaSyBZ63aR_cp2P3vVsGmyW5LN7BnKLCQil2M',
  gaId: 'UA-120553426-1',
  mapDefaultCenter: { lat: 20.653947, lng: 105.927257 },
  center: { lat: 20.653947, lng: 105.927257 },
  mapDefaultZoom: 14,
  color: {
    bworksLossChart: {
      bworksINPUT: '#3F51B5',
      bworksREVENUE: '#4dbd74',
      KNOWLEAK: '#FF9800',
      UNKNOWLEAK: '#ff5454',
    },
    status: {
      loss: '#5d4037',
      low: '#fbc02d',
      normal: '#3f51b5',
      ok: '#4caf50',
      high: '#ef6c00',
      ng: '#ba000d',
      error: '#f44336',
      critical: '#a31545',
      alert: '#fbc02d',
      criticalAlert: '#a31545',
    },
    flowPressureChart: [
      '#3F51B5',
      '#4dbd74',
      '#FF9800',
      '#ff5454',
      '#8884d8',
      '#FFEB3B',
      '#AA00FF',
      '#2962FF',
      '#616161',
      '#82ca9d',
    ],
    basicChart: [
      '#3F51B5',
      '#4dbd74',
      '#FF9800',
      '#ff5454',
      '#8884d8',
      '#FFEB3B',
      '#AA00FF',
      '#2962FF',
      '#616161',
      '#82ca9d',
      '#3F51B5',
      '#4dbd74',
      '#FF9800',
      '#ff5454',
      '#8884d8',
      '#FFEB3B',
      '#AA00FF',
      '#2962FF',
      '#616161',
      '#82ca9d',
    ],
  },
  employer: {
    employerTypeChoices: [
      { id: 'RESIDENT', name: 'generic.employer.employerTypeChoices.resident' },
      { id: 'ORGANIZATION', name: 'generic.employer.employerTypeChoices.organization' },
      { id: 'INDUSTRY', name: 'generic.employer.employerTypeChoices.industry' },
      { id: 'SERVICE', name: 'generic.employer.employerTypeChoices.service' },
    ],
    statusChoices: [
      { id: null, name: '' },
      { id: 'ACTIVE', name: 'generic.employer.statusChoices.active' },
      { id: 'PAUSE', name: 'generic.employer.statusChoices.pause' },
      { id: 'STOP', name: 'generic.employer.statusChoices.stop' },
    ],
    registerStatusChoices: [
      { id: 'NEW', name: 'generic.employer.actionChoices.new' },
      { id: 'CONTRACT_SIGNED', name: 'generic.employer.actionChoices.contractSigned' },
    ],
    actionChoices: [
      { id: 'NEW', name: 'generic.employer.actionChoices.new' },
      { id: 'CONTRACT_SIGNED', name: 'generic.employer.actionChoices.contractSigned' },
      { id: 'INSTALL_WAITING', name: 'generic.employer.actionChoices.installWaiting' },
      { id: 'COMPLETE', name: 'generic.employer.actionChoices.complete' },
    ],
    typeRequestChoices: [
      { id: 'NEW_INSTALL', name: 'generic.employer.typeRequestChoices.newInstall' },
      { id: 'REPLACE', name: 'generic.employer.typeRequestChoices.replace' },
    ],
  },
  eInvoice: {
    paymentTypeChoices: [
      { id: 'TRANSFER', name: 'generic.paymentTypeChoices.transfer' },
      { id: 'CASH', name: 'generic.paymentTypeChoices.cash' },
      { id: 'ALL', name: 'generic.paymentTypeChoices.all' },
    ],
  },
  formula: {
    unitChoices: [
      { id: 'PERSON', name: 'generic.formula.unitChoices.person' },
      { id: 'FAMILY', name: 'generic.formula.unitChoices.family' },
    ],
  },
  geoChoices: [
    { id: 'province', name: 'generic.pages.geoprovince' },
    { id: 'district', name: 'generic.pages.geodistrict' },
    { id: 'ward', name: 'generic.pages.geoward' },
  ],
  partnerType: [
    { id: '1', name: 'generic.pages.agent' },
    { id: '2', name: 'generic.pages.supplier' },
  ],
  modelChoices: [
    { id: 'employer', name: 'generic.pages.employer' },
    { id: 'employerRegister', name: 'generic.pages.employerRegister' },
  ],
  interfaceStandardType: [{ name: 'MM' }, { name: 'DM' }, { name: 'DD' }, { name: 'MD' }],
  bworksParabudgetStage: [
    { id: '1', name: 'resources.bworksstandards.fields.sourcebworks' },
    { id: '2', name: 'resources.bworksstandards.fields.processingbworks' },
    { id: '3', name: 'resources.bworksstandards.fields.freshbworks' },
    { id: '4', name: 'resources.bworksstandards.fields.processingAndFreshbworks' },
    { id: '5', name: 'resources.bworksstandards.fields.all' },
  ],
  environmentalRating: [{ name: 'IP65' }, { name: 'IP66' }, { name: 'IP67' }, { name: 'IP68' }, { name: 'IP69' }],
  powerSource: [
    { id: '1', name: 'resources.dataloggers.fields.gridPower' },
    { id: '2', name: 'resources.dataloggers.fields.battery' },
    { id: '3', name: 'resources.dataloggers.fields.solar' },
  ],
  typeOfSensor: [
    { id: '1', name: 'resources.sensors.fields.physical' },
    { id: '2', name: 'resources.sensors.fields.chemical' },
    { id: '3', name: 'resources.sensors.fields.bio' },
  ],
  typeOfPump: [
    { id: '1', name: 'resources.pumps.fields.surfacebworksPump' },
    { id: '2', name: 'resources.pumps.fields.groundbworksPump' },
  ],
  typeOfbworksSource: [
    { id: '1', name: 'resources.bworkssources.fields.surfacebworks' },
    { id: '2', name: 'resources.bworkssources.fields.groundbworks' },
  ],
  typeOfbworksSourceGroup: [
    { id: 'ACTIVE', name: 'resources.bworkssourcegroups.fields.activeGroup' },
    { id: 'BACKUP', name: 'resources.bworkssourcegroups.fields.backupGroup' },
    { id: 'RESERVED', name: 'resources.bworkssourcegroups.fields.reservedGroup' },
  ],
  alertType: [
    { id: '1', name: 'resources.alertthresholds.alertHigh' },
    { id: '2', name: 'resources.alertthresholds.alertLow' },
    { id: '3', name: 'resources.alertthresholds.alertHighAndLow' },
  ],
  sourceStatus: [
    { id: '1', name: 'resources.bworkssources.fields.normal' },
    { id: '2', name: 'resources.bworkssources.fields.inMaintain' },
    { id: '3', name: 'resources.bworkssources.fields.isStopped' },
  ],
  alertParam: [
    { id: '1', name: 'resources.alertthresholds.alertQuality' },
    { id: '2', name: 'resources.alertthresholds.alertFlow' },
    { id: '3', name: 'resources.alertthresholds.alertVolume' },
  ],
  materialStatus: [
    { id: '1', name: 'resources.reportmaterials.statusGood' },
    { id: '2', name: 'resources.reportmaterials.statusDamageField' },
    { id: '3', name: 'resources.reportmaterials.statusDamageAndRevoked' },
    { id: '4', name: 'resources.reportmaterials.statusDamageSentMaintain' },
  ],
  filterConditions: [
    {
      id: '1',
      name: 'resources.reportmaterials.byMaterialStatus',
      conditions: [
        { id: '1', name: 'resources.reportmaterials.statusGood' },
        { id: '2', name: 'resources.reportmaterials.statusDamageField' },
        { id: '3', name: 'resources.reportmaterials.statusDamageAndRevoked' },
        { id: '4', name: 'resources.reportmaterials.statusDamageSentMaintain' },
      ],
    },
    {
      id: '2',
      name: 'resources.reportmaterials.byMaterialAge',
      conditions: [
        { id: '1', name: 'resources.reportmaterials.expired' },
        { id: '2', name: 'resources.reportmaterials.nearExpired' },
        { id: '3', name: 'resources.reportmaterials.inValid' },
      ],
    },
  ],

  selectAll: [{ id: 'all', name: 'generic.selectAll' }],
  selectMaterial: [
    { id: 'budget', name: 'generic.type.budget' },
    { id: 'Sensor', name: 'generic.type.sensor' },
    { id: 'Pump', name: 'generic.type.pump' },
    { id: 'DataLogger', name: 'generic.type.dataLogger' },
  ],
};

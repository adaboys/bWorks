export const formatemployerType = (translate, type) => {
  // console.log('formatemployerType', type);
  switch (type) {
    case 'RESIDENT':
      return translate('generic.employer.employerTypeChoices.resident');
    case 'ORGANIZATION':
      return translate('generic.employer.employerTypeChoices.organization');
    case 'INDUSTRY':
      return translate('generic.employer.employerTypeChoices.industry');
    case 'SERVICE':
      return translate('generic.employer.employerTypeChoices.service');
    default:
      return '';
  }
};
export const formatemployerStatus = (translate, status) => {
  // console.log('formatemployerType', type);
  switch (status) {
    case 'ACTIVE':
      return translate('generic.employer.statusChoices.active');
    case 'PAUSE':
      return translate('generic.employer.statusChoices.pause');
    case 'STOP':
      return translate('generic.employer.statusChoices.stop');
    case 'CONTRACT_SIGNED':
      return translate('generic.employer.statusChoices.contractSigned');
    case 'INSTALL_WAITING':
      return translate('generic.employer.statusChoices.installWaiting');
    default:
      return '';
  }
};
export const formatemployerAction = (translate, action) => {
  // console.log('formatemployerAction', action);
  switch (action) {
    case 'NEW':
      return translate('generic.employer.actionChoices.new');
    case 'CONTRACT_SIGNED':
      return translate('generic.employer.actionChoices.contractSigned');
    case 'INSTALL_WAITING':
      return translate('generic.employer.actionChoices.installWaiting');
    case 'COMPLETE':
      return translate('generic.employer.actionChoices.complete');
    default:
      return '';
  }
};
export const formatTypeRequest = (translate, action) => {
  // console.log('formatemployerAction', action);
  switch (action) {
    case 'NEW_INSTALL':
      return translate('generic.employer.typeRequestChoices.newInstall');
    case 'REPLACE':
      return translate('generic.employer.typeRequestChoices.replace');
    default:
      return '';
  }
};
export const formatLocation = position => {
  return typeof position === 'object' ? `${position.lat || '_'},${position.lng || '_'}` : '';
};

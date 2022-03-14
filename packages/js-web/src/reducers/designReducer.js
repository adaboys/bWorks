import config from '../Config';
const initData = {
  viewSelected: [],
  viewDmaId: '',
  update: 0,
  defaultZoom: config.mapDefaultZoom,
  defaultCenter: config.mapDefaultCenter,
};
// eslint-disable-next-line no-unused-vars
export default (previousState = initData, { type, payload }) => {
  switch (type) {
    default:
      return previousState;
  }
};

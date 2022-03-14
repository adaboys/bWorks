import config from '../Config';
import { MAP_DEFAULT_CENTER, MAP_DEFAULT_ZOOM, COMMON_CONFIG } from '../actions/mapActions';

const { mapApiKey } = config;

export default (
  previousState = {
    mapApiKey,
    mapDefaultCenter: null,
    mapDefaultZoom: null,
  },
  { type, payload },
) => {
  switch (type) {
    case MAP_DEFAULT_CENTER:
      return {
        ...previousState,
        mapDefaultCenter: payload,
      };
    case MAP_DEFAULT_ZOOM:
      return {
        ...previousState,
        mapDefaultZoom: payload,
      };
    case COMMON_CONFIG:
      return {
        ...previousState,
        ...payload,
      };
    default:
      return previousState;
  }
};

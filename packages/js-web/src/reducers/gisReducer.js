import { GIS_ACTIVE_GROUP, GIS_TOGGLE_GROUP } from 'web-common';
import { get, set } from 'lodash';

const initData = {
  layer: {
    bworkssourcegroups: {
      label: 'resources.bworkssourcegroups.name',
      resource: 'bworkssourcegroups',
      checked: true,
      // sub: {
      //   bworkssources: {
      //     label: 'resources.bworkssources.name',
      //     resource: 'bworkssources',
      //     checked: false,
      //   },
      // },
    },
    bworkssources: {
      label: 'resources.bworkssources.name',
      resource: 'bworkssources',
      checked: false,
    },
  },
  activeGroup: 'bworkssourcegroups.bworkssources',
};
// eslint-disable-next-line no-unused-vars
export default (previousState = initData, { type, payload }) => {
  switch (type) {
    case GIS_ACTIVE_GROUP: {
      const nextState = {
        ...previousState,
        activeGroup: payload,
      };
      set(nextState.layer, `${payload}.checked`, true);
      return nextState;
    }
    case GIS_TOGGLE_GROUP: {
      const key = `${payload}.checked`;
      const current = get(previousState.layer, key);
      if (typeof current === 'boolean') {
        const nextState = { ...previousState };
        set(nextState.layer, key, !current);
        return nextState;
      }
      return previousState;
    }
    default:
      return previousState;
  }
};

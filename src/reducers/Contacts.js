import { fromJS } from 'immutable';

import { normalizeContactsList } from './../utils/normalizer';
import * as TYPES from './../constants/ActionTypes';

const initialState = fromJS({
  isFetching: true,
  isFetchingError: false,
  data: {
    list: []
  }
});

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.CONTACTS_SEARCH_INIT:
      return state.merge({
        isFetching: true,
        isFetchingError: false
      });

    case TYPES.CONTACTS_SEARCH_SUCCESS:
      return state.merge({
        isFetching: false,
        data: normalizeContactsList(action.data)
      });

    case TYPES.CONTACTS_SEARCH_ERROR:
      return state.merge({
        isFetching: false,
        isFetchingError: true,
        error: action.error
      });

    default:
      return state;
  }
}

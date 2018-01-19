import { fromJS } from 'immutable';

import { normalizeContactsList } from './../utils/normalizer';

const initialState = fromJS({
  isFetching: true,
  isFetchingError: false,
  data: {}
});

export default function(state = initialState, action) {
  switch (action.type) {
    case 'CONTACTS_SEARCH_INIT':
      return state.merge({
        isFetching: true,
        isFetchingError: false
      });

    case 'CONTACTS_SEARCH_SUCCESS':
      return state.merge({
        isFetching: false,
        data: normalizeContactsList(action.data)
      });

    case 'CONTACTS_SEARCH_ERROR':
      return state.merge({
        isFetching: false,
        isFetchingError: true,
        error: action.error
      });

    default:
      return state;
  }
}

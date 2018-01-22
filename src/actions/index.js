import { fetchContacts as fetchContactsApi } from '../api';
import * as TYPES from './../constants/ActionTypes';

/**
 * Action to trigger fetching of contacts list. It dispatches `CONTACTS_SEARCH_INIT`,
 * `CONTACTS_SEARCH_SUCCESS` and `CONTACTS_SEARCH_ERROR` actions to Redux.
 *
 * @param q {String} query param search string
 * @param url {String} url for the api endpoint.
 * @param sortBy {String} sortBy query param to sort the list
 * @param orderBy {String} orderBy query param to order the sorted list
 */
const fetchContacts = (q, url, sortBy, orderBy) => dispatch => {
  dispatch({ type: TYPES.CONTACTS_SEARCH_INIT });

  return fetchContactsApi(q, url, sortBy, orderBy).then(
    response => {
      dispatch({
        type: TYPES.CONTACTS_SEARCH_SUCCESS,
        data: response
      });
    },
    err => {
      dispatch({ type: TYPES.CONTACTS_SEARCH_ERROR, err });
    }
  );
};

export default {
  fetchContacts
};

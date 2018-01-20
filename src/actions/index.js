import {
  fetchContacts as fetchContactsApi
} from '../api';

const fetchContacts = (q, url, sortBy, orderBy) => dispatch => {
  dispatch({ type: 'CONTACTS_SEARCH_INIT' });
  return fetchContactsApi(q, url, sortBy, orderBy).then(
    response => {
      dispatch({
        type: 'CONTACTS_SEARCH_SUCCESS',
        data: {...response}
      });
    },
    error => {
      dispatch({ type: 'CONTACTS_SEARCH_ERROR', error });
    }
  );
};

export default {
  fetchContacts
};

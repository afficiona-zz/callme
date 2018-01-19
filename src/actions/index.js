import {
  fetchContacts as fetchContactsApi
} from '../api';

const fetchContacts = (q, url) => dispatch => {
  dispatch({ type: 'CONTACTS_SEARCH_INIT' });
  return fetchContactsApi(q, url).then(
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

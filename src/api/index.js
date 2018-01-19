import queryString from 'query-string';

import { API_BASE_URL } from '../utils/constants';

export const fetchContacts = (q, url, page = 1) => {
  return new Promise((resolve, reject) => {
    const fetchUrl = q ? `${API_BASE_URL}/contacts?q=${q}&_page=${page}` : url
    fetch(fetchUrl, {})
      .then((response) => {
        let link = response.headers.get('link');
        return response.json()
          .then(data => {
            resolve({ data, link });
          });
      });
  });
};

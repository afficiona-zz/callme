import queryString from 'query-string';

import { API_BASE_URL } from '../utils/constants';

export const fetchContacts = (q, url, sortBy = 'id', orderBy = 'asc') => {
  return new Promise((resolve, reject) => {
    const fetchUrl = q ? `${API_BASE_URL}/contacts?q=${q}&_page=1&_sort=${sortBy}&_order=${orderBy}` : url
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

import queryString from 'query-string';

import { API_BASE_URL } from '../constants';
/**
 * Function to hit the contacts API to fetch the list of contacts as per the params passed.
 *
 * @param q {String} query param search string
 * @param url {String} url for the api endpoint. This is used only when `q` is null(as in the case of pagination where
 * the url is obtained from the API itself)
 * @param sortBy {String} sortBy query param to sort the list
 * @param orderBy {String} orderBy query param to order the sorted list
 * @param _limit {Number} Limit for the fetched contacts in the list. Default is 5 as per the UI.
 * @param _page {Number} Page no. of the contacts list. Default is 1 to fetch the 1st page always.
 * @returns {Promise}
 */
export const fetchContacts = (
  q,
  url,
  sortBy = 'id',
  orderBy = 'asc',
  _limit = 5,
  _page = 1
) =>
  new Promise((resolve, reject) => {
    const query = {
      q,
      _page: 1,
      _limit: 5,
      _sort: sortBy,
      _order: orderBy
    };
    const queryParams = queryString.stringify(query);
    const fetchUrl =
      q !== null ? `${API_BASE_URL}/contacts?${queryParams}` : url;
    fetch(fetchUrl, {}).then(response => {
      // Pagination links are obtained in the Link header
      // https://github.com/typicode/json-server#paginate
      const link = response.headers.get('link');

      // Total count of contacts is obtained in X-Total-Count header
      // https://github.com/typicode/json-server#slice
      const totalCount = response.headers.get('x-total-count');

      if (response.status === 200) {
        return response.json().then(data => {
          resolve({ data, link, totalCount });
        });
      }

      reject(response);
    });
  });

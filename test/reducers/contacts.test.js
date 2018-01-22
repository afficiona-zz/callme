import { fromJS } from 'immutable';
import { expect } from 'chai';
import reducer from '../../src/reducers/Contacts';
import * as TYPES from '../../src/constants/ActionTypes';

describe('Reducer: Contacts', () => {
  it('FETCH CONTACTS INIT: ', () => {
    const action = {
      type: TYPES.CONTACTS_SEARCH_INIT
    };

    const expectedState = fromJS({
      isFetching: true,
      isFetchingError: false,
      data: {
        list: []
      }
    });
    const nextState = reducer(undefined, action);
    expect(nextState).equal(expectedState);
  });

  it('FETCH CONTACTS SUCCESS: ', () => {
    const action = {
      type: TYPES.CONTACTS_SEARCH_SUCCESS,
      data: {
        data: [
          {
            id: 1,
            first_name: 'Aman',
            last_name: 'Pandey',
            email: 'afficiona4web@gmail.com'
          },
          {
            id: 2,
            first_name: 'Ricky',
            last_name: 'Baghel',
            email: 'rickybaghel@gmail.com'
          }
        ],
        link:
          '<http://localhost:8000/contacts?q=Ann&_page=1&_limit=5&_sort=id&_order=asc>; rel="first", <http://localhost:8000/contacts?q=Ann&_page=4&_limit=5&_sort=id&_order=asc>; rel="prev", <http://localhost:8000/contacts?q=Ann&_page=6&_limit=5&_sort=id&_order=asc>; rel="next", <http://localhost:8000/contacts?q=Ann&_page=10&_limit=5&_sort=id&_order=asc>; rel="last"',
        totalCount: 2
      }
    };

    const expectedState = fromJS({
      isFetching: false,
      isFetchingError: false,
      data: {
        list: [
          {
            id: 1,
            first_name: 'Aman',
            last_name: 'Pandey',
            email: 'afficiona4web@gmail.com'
          },
          {
            id: 2,
            first_name: 'Ricky',
            last_name: 'Baghel',
            email: 'rickybaghel@gmail.com'
          }
        ],
        links: [
          {
            link:
              'http://localhost:8000/contacts?q=Ann&_page=1&_limit=5&_sort=id&_order=asc',
            relIcon: 'mdi mdi-chevron-double-left'
          },
          {
            link:
              ' http://localhost:8000/contacts?q=Ann&_page=4&_limit=5&_sort=id&_order=asc',
            relIcon: 'mdi mdi-chevron-left'
          },
          {
            link:
              ' http://localhost:8000/contacts?q=Ann&_page=6&_limit=5&_sort=id&_order=asc',
            relIcon: 'mdi mdi-chevron-right'
          },
          {
            link:
              ' http://localhost:8000/contacts?q=Ann&_page=10&_limit=5&_sort=id&_order=asc',
            relIcon: 'mdi mdi-chevron-double-right'
          }
        ],
        totalCount: 2
      }
    });
    const nextState = reducer(undefined, action);
    expect(nextState).equal(expectedState);
  });

  it('FETCH CONTACTS ERROR: ', () => {
    const action = {
      type: TYPES.CONTACTS_SEARCH_ERROR,
      error: {}
    };

    const expectedState = fromJS({
      isFetching: false,
      isFetchingError: true,
      data: {
        list: []
      },
      error: {}
    });
    const nextState = reducer(undefined, action);
    expect(nextState).equal(expectedState);
  });
});

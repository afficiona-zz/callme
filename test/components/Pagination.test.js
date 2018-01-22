import React from 'react';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  Simulate
} from 'react-dom/test-utils';
import { expect } from 'chai';
import { fromJS } from 'immutable';
import Pagination from '../../src/components/Pagination';

describe('Component: Pagination', () => {
  let pagesWhenPaginationActive;
  let pagesWhenPaginationInactive;
  let handlePagination;
  let linkClicked;

  beforeEach(() => {
    pagesWhenPaginationActive = fromJS([
      {
        link: 'http://localhost:8000/contacts?page=1',
        relIcon: 'mdi mdi-chevron-double-left'
      },
      {
        link: 'http://localhost:8000/contacts?page=4',
        relIcon: 'mdi mdi-chevron-left'
      },
      {
        link: 'http://localhost:8000/contacts?page=6',
        relIcon: 'mdi mdi-chevron-right'
      },
      {
        link: 'http://localhost:8000/contacts?page=10',
        relIcon: 'mdi mdi-chevron-double-right'
      }
    ]);

    pagesWhenPaginationInactive = fromJS([]);

    handlePagination = () => {
      linkClicked = true;
    };
  });

  it('Shows pagination links when pages are present', () => {
    const component = renderIntoDocument(
      <Pagination pages={pagesWhenPaginationActive} />
    );
    const paginationLink = scryRenderedDOMComponentsWithClass(
      component,
      'pagination__link'
    );

    // pagination links should be present
    expect(paginationLink).to.have.lengthOf.above(0);
  });

  it('Shows pagination links when pages are not present', () => {
    const component = renderIntoDocument(
      <Pagination pages={pagesWhenPaginationInactive} />
    );
    const paginationLink = scryRenderedDOMComponentsWithClass(
      component,
      'pagination__link'
    );

    // no pagination link should be present
    expect(paginationLink).to.have.lengthOf(0);
  });

  it('Handling pagination links', () => {
    const component = renderIntoDocument(
      <Pagination
        pages={pagesWhenPaginationActive}
        handlePagination={handlePagination}
      />
    );
    const paginationLinks = scryRenderedDOMComponentsWithClass(
      component,
      'pagination__link'
    );

    // Simulating click action on all the pagination links
    paginationLinks.map(ele => {
      linkClicked = false;
      Simulate.click(ele);
      expect(linkClicked).to.equal(true);
    });
  });
});

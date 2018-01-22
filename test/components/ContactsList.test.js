import React from 'react';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithId,
  scryRenderedDOMComponentsWithTag,
  Simulate,
  shallowRender
} from 'react-dom/test-utils';
import { expect } from 'chai';
import { fromJS } from 'immutable';
import ContactsList from '../../src/components/ContactsList';

describe('Component: ContactsList', () => {
  let contactsWhileFetching;
  let contactsNotFound;
  let contactsOnFetchingError;
  let handleSortAction;
  let sortActionClicked;
  let contactsWhenSuccessfullyFetched;

  beforeEach(() => {
    contactsWhileFetching = fromJS({
      data: {
        list: []
      },
      isFetching: true
    });

    contactsWhenSuccessfullyFetched = fromJS({
      data: {
        list: [
          {
            id: 1,
            first_name: 'Aman',
            last_name: 'Pandey',
            email: 'afficiona4web@gmail.com'
          }
        ]
      },
      isFetching: false
    });

    contactsOnFetchingError = fromJS({
      data: {
        list: []
      },
      isFetching: false,
      isFetchingError: true
    });

    contactsNotFound = fromJS({
      data: {
        list: []
      },
      isFetching: false
    });

    handleSortAction = () => {
      sortActionClicked = true;
    };
  });

  it('Shows loading screen when component mounts', () => {
    const component = renderIntoDocument(
      <ContactsList Contacts={contactsWhileFetching} />
    );
    const loading = scryRenderedDOMComponentsWithClass(
      component,
      'loading loading-circle'
    );
    const listRow = scryRenderedDOMComponentsWithClass(component, 'list__row');

    // loader should be shown while fetching the contacts
    expect(loading).to.have.lengthOf(1);
    // contacts list should have no contacts to show.
    expect(listRow).to.have.lengthOf(0);
  });

  it('Shows contact list with at least one contact on successful fetching', () => {
    const component = renderIntoDocument(
      <ContactsList Contacts={contactsWhenSuccessfullyFetched} />
    );
    const loading = scryRenderedDOMComponentsWithClass(
      component,
      'loading loading-circle'
    );
    const listRow = scryRenderedDOMComponentsWithClass(component, 'list__row');

    // loader should be hidden once fetching is complete
    expect(loading).to.have.lengthOf(0);
    // contacts list should have at least one contact item to show
    expect(listRow).to.have.lengthOf.above(0);
  });

  it('Shows contact list with empty screen message when no contacts found', () => {
    const component = renderIntoDocument(
      <ContactsList Contacts={contactsNotFound} />
    );
    const loading = scryRenderedDOMComponentsWithClass(
      component,
      'loading loading-circle'
    );
    const listRow = scryRenderedDOMComponentsWithClass(component, 'list__row');
    const contactsListBodyEmpty = scryRenderedDOMComponentsWithClass(
      component,
      'contacts__list__body--empty'
    );

    // loader should be hidden once fetching is complete
    expect(loading).to.have.lengthOf(0);
    // contacts list should have no contacts to show
    expect(listRow).to.have.lengthOf(0);
    // contacts list should show an empty-contacts screen
    expect(contactsListBodyEmpty).to.have.lengthOf(1);
  });

  it('On error in fetching contacts', () => {
    const component = renderIntoDocument(
      <ContactsList Contacts={contactsOnFetchingError} />
    );
    const loading = scryRenderedDOMComponentsWithClass(
      component,
      'loading loading-circle'
    );
    const listRow = scryRenderedDOMComponentsWithClass(component, 'list__row');
    const contactsListBodyError = scryRenderedDOMComponentsWithClass(
      component,
      'contacts__list__body--error'
    );

    // loader should be hidden once fetching is complete
    expect(loading).to.have.lengthOf(0);
    // contacts list should have no contacts to show
    expect(listRow).to.have.lengthOf(0);
    // contacts list should show an error screen
    expect(contactsListBodyError).to.have.lengthOf(1);
  });

  it('Checking the behaviour of list header sort actions', () => {
    const component = renderIntoDocument(
      <ContactsList
        Contacts={contactsNotFound}
        handleSortAction={handleSortAction}
      />
    );
    const contactsHeaderIdActions = scryRenderedDOMComponentsWithClass(
      component,
      'action'
    );
    // Simulating click action on all the header sort actions
    contactsHeaderIdActions.map(ele => {
      sortActionClicked = false;
      Simulate.click(ele);
      expect(sortActionClicked).to.equal(true);
    });
  });
});

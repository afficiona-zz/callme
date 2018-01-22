import React from 'react';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass
} from 'react-dom/test-utils';
import { expect } from 'chai';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import AppContainer from '../../src/containers/App';

function createMockStore(state) {
  return {
    subscribe: () => {},
    dispatch: () => {},
    getState: () => state
  };
}

describe('Component: App container', () => {
  let Contacts;
  let contactsFetched;
  let onSearchSubmit;
  let actions;
  let store;

  beforeEach(() => {
    contactsFetched = false;
    Contacts = fromJS({
      data: {
        list: []
      },
      isFetching: true
    });

    actions = {
      fetchContacts: () => true
    };

    store = createMockStore({
      Contacts
    });

    onSearchSubmit = () => {
      contactsFetched = true;
    };
  });

  it('Has all the sub modules loaded', () => {
    const component = renderIntoDocument(
      <Provider store={store}>
        <AppContainer
          Contacts={Contacts}
          actions={actions}
          onSearchSubmit={onSearchSubmit}
        />
      </Provider>
    );

    // Checking if all the submodules are loaded in the DOM
    const shellSidebar = scryRenderedDOMComponentsWithClass(
      component,
      'shell__sidebar'
    );
    const shellHeader = scryRenderedDOMComponentsWithClass(
      component,
      'shell__header'
    );
    const contactsList = scryRenderedDOMComponentsWithClass(
      component,
      'contacts__list'
    );
    const pagination = scryRenderedDOMComponentsWithClass(
      component,
      'pagination'
    );
    expect(shellSidebar).to.have.lengthOf(1);
    expect(shellHeader).to.have.lengthOf(1);
    expect(contactsList).to.have.lengthOf(1);
    expect(pagination).to.have.lengthOf(1);
  });
});

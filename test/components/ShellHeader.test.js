import React from 'react';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-dom/test-utils';
import { expect } from 'chai';
import { fromJS } from 'immutable';
import ShellHeader from '../../src/components/ShellHeader';

describe('Component: ShellHeader', () => {
  let searchSubmitted;
  let onSearchSubmit;
  let component;

  beforeEach(() => {
    searchSubmitted = false;

    onSearchSubmit = () => {
      searchSubmitted = true;
    };

    component = renderIntoDocument(
      <ShellHeader onSearchSubmit={onSearchSubmit} />
    );
  });

  it('Should have a search form', () => {
    const form = scryRenderedDOMComponentsWithTag(component, 'form');
    expect(form).to.have.lengthOf(1);
  });

  it('Handles form submit', () => {
    const form = scryRenderedDOMComponentsWithTag(component, 'form');
    Simulate.submit(form[0]);
    expect(searchSubmitted).to.equal(true);
  });
});

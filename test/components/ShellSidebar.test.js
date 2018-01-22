import React from 'react';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass
} from 'react-dom/test-utils';
import { expect } from 'chai';
import { fromJS } from 'immutable';
import ShellSidebar from '../../src/components/ShellSidebar';

describe('Component: ShellSidebar', () => {
  let component;

  beforeEach(() => {
    component = renderIntoDocument(<ShellSidebar />);
  });

  it('Should have a sidebar element', () => {
    const form = scryRenderedDOMComponentsWithClass(
      component,
      'shell__sidebar'
    );
    expect(form).to.have.lengthOf(1);
  });
});

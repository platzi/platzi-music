/* global it, expect, describe */
import React from 'react';
import { render } from 'react-dom';
import renderer from 'react-test-renderer';
import Searcher from './Searcher';

describe('Test searcher component', () => {
  // smoke test -> verificar que haga render sin error
  it('should render', () => {
    const div = document.createElement('div');
    function handleSubmit() {}

    render(<Searcher onSubmit={handleSubmit} />, div);
  });

  // regression test -> verificar que sigue renderizando el HTML esperado
  it('should render the expected HTML', () => {
    function handleSubmit() {}
    const component = renderer.create(<Searcher onSubmit={handleSubmit} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

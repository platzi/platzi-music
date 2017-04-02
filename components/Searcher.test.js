import React from 'react';
import { render } from 'react-dom';
import renderer from 'react-test-renderer';
import Searcher from './Searcher';

function handleSubmit() {}

describe('Test Searcher component', () => {
  it('should render', () => {
    const div = document.createElement('div');
    render(
      <Searcher onSubmit={handleSubmit} />,
      div,
    );
  });

  it('should render the expected HTML', () => {
    const component = renderer.create(
      <Searcher onSubmit={handleSubmit} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

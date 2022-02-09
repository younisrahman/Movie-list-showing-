import React from 'react';
import renderer from 'react-test-renderer';
// import Index from '../src/components/Page/index';
import Index from '../src/components/Info/index';

test('renders correctly', () => {
  const tree = renderer.create(<Index />).toJSON();
  expect(tree).toMatchSnapshot();
});

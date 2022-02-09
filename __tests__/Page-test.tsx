import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../src/components/Page/index';

test('renders correctly', () => {
  const tree = renderer.create(<Index index={1} translateX={9} />).toJSON();
  expect(tree).toMatchSnapshot();
});

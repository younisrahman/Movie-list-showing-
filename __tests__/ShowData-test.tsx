import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../src/components/ShowData/index';

test('renders correctly', () => {
  const tree = renderer
    .create(<Index title="hi" info="ook" margintop={10} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

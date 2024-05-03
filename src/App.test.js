import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('component render router', () => {
  const component= shallow(<App/>)
  const testComp= component.find('Router').exists()
  expect(testComp).toBe(true)
});

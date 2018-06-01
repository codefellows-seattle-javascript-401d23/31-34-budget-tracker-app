import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { configure as configureEnzyme, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Dashboard from '../component/dashboard/dashboard';

configureEnzyme({ adapter: new Adapter() });

describe('#Dashboard', () => {
  const testState = {
    category: [{
      name: 'Test1',
      budget: 1,
      id: '0.123',
      timestamp: new Date(),
    },
    {
      name: 'Test2',
      budget: 2,
      id: '0.321',
      timestamp: new Date(),
    }],
    expenses: {
      0.123: [],
      0.321: [],
    },
  };

  test('Testing Dashboard components interaction with the store', () => {
    const mockStore = configureStore([]);
    const mountedLanding = mount(<Provider store={mockStore(testState)}>
    <Dashboard /></Provider>);
    expect(mountedLanding.find('category-form')).toBeTruthy();
    expect(mountedLanding.find('category').length).toEqual(2);
  });
});

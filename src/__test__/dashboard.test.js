import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { configure, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Dashboard from '../component/dashboard/dashboard';

configure({ adapter: new Adapter() });

describe('#Dashboard', () => {
  const testState = {
    categories: [
      {
        name: 'Food',
        budget: 100,
        description: '',
        id: 1,
        timestamp: new Date(),
      },
    ],
    expenses: {
      1: [],
    },
  };
  test('testing component with store', () => {
    const mockStoreCreator = configureStore([]);
    const mountedDashboard = mount(<Provider
      store={mockStoreCreator(testState)}><Dashboard/></Provider>);
    expect(mountedDashboard.find('CategoryForm')).toBeTruthy();
    expect(mountedDashboard.find('CategoryItem').length).toBe(1);
    expect(mountedDashboard.find('h1').text()).toBe('budget tracker');
  });
});

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { configure as configureEnzyme, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Dashboard from '../component/dashboard/dashboard';

configureEnzyme({ adapter: new Adapter() });

describe('#DASHBOARD', () => {
  const testState = {
    categories: [
      {
        name: 'Gregor',
        budget: 5,
        id: '0.123',
        timeStamp: new Date(),
      }, 
      {
        name: 'Hound',
        budget: 5,
        id: '0.222',
        timeStamp: new Date(),
      },
    ],
    expenses: {
      0.123: [],
      0.222: [],
    },
  };

  test('Testing a component\'s interactions with a store.', () => {
    const middleware = [];
    const mockStoreFactory = configureStore(middleware);

    const mountedDashboard = mount(<Provider store={mockStoreFactory(testState)}>
    <Dashboard/></Provider>);
    console.log(mountedDashboard);
    expect(mountedDashboard.find('CategoryForm')).toBeTruthy();
    expect(mountedDashboard.find('CategoryItem').length).toEqual(2);
  });
});

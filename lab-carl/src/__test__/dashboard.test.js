import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { configure as configureEnzyme, shallow as enzymeShallowMount, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Dashboard from '../component/dashboard/dashboard';

configureEnzyme({ adapter: new Adapter() });

describe('#Dashboard', () => {
  const initialState = {
    categories: [{
      name: 'Groceries',
      budget: '100',
      id: '0.123',
      createdOn: new Date(), 
    },
    {
      name: 'Leisure',
      budget: '200',
      id: '0.987',
      createdOn: new Date(),
    }],
    expenses: {
      0.123: [],
      0.987: [],
    },
  };

  test('should return truthy for category form and number of categories should be 2', () => {
    const mockStore = configureStore([]);
    const mountedDashboard = mount(
      <Provider store={mockStore(initialState)}>
        <Dashboard />
      </Provider>);
    
    console.log(mountedDashboard.html());

    expect(mountedDashboard.find('CategoryForm')).toBeTruthy();
    expect(mountedDashboard.find('Category').length).toEqual(2);
  });
});

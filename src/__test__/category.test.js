import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { configure as configureEnzyme, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Category from '../component/category/category';

configureEnzyme({ adapter: new Adapter() });

describe('#category', () => {
  const initialState = {
    categories: [{
      name: 'Transportation',
      budget: 'Car',
      id: '123',
      createdOn: new Date(),
    },
    {
      name: 'Housing',
      budget: 'mortgage',
      id: '345',
      createdOn: new Date(),
    }],
    expenses: {
      123: [],
      345: [],
    },
  };

  test('', () => {
    const mockStore = configureStore([]);
    const mountedDashboard = mount(<Provider store={mockStore(initialState)}>
      <Category /></Provider>);
    console.log(Category, 'Category in test');
    console.log(mountedDashboard.html());
    // expect(mountedDashboard.find('Category')).toBeTruthy();
    expect(mountedDashboard.find('expenses')).toEqual(this.props);
  });
});

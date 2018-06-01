import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { configure as configureEnzyme, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Dashboard from '../component/dashboard/landing';

configureEnzyme({ adapter: new Adapter() });

describe('#Dashboard', () => {
  const initialState = {
    categories: [{
      title: 'testyCategory',
      id: '11111111',
      createdOn: new Date(),
    },
    {
      title: 'CategoryTesterton',
      id: '22222222',
      createdOn: new Date(),
    }],
    expenses: {
      11111111: [{
        content: 'expenseTest',
        cost: '99.99',
        categoryId: 11111111,
        id: 321,
      }],
      22222222: [{
        content: 'expenseTest',
        cost: '99.99',
        categoryId: 22222222,
        id: 212,
      }],
    },
  };

  test('Categories', () => {
    const mockStore = configureStore([]);
    const mountedDashboard = mount(<Provider store={mockStore(initialState)}>
      <Dashboard/></Provider>);
    expect(mountedDashboard.find('CategoryForm')).toBeTruthy();
    expect(mountedDashboard.find('Category').length).toEqual(2);
  });

  test('Expenses', () => {
    const mockStore = configureStore([]);
    const mountedDashboard = mount(<Provider store={mockStore(initialState)}>
      <Dashboard/></Provider>);
    expect(mountedDashboard.find('ExpenseForm')).toBeTruthy();
    expect(mountedDashboard.find('Expense').length).toEqual(2);
  });
});

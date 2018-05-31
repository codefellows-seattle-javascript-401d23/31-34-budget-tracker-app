import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { configure, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import CategoryItem from '../component/category-item/category-item';

configure({ adapter: new Adapter() });

describe('#Category-Item', () => {
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
    const mountedCategory = mount(<Provider
      store={mockStoreCreator(testState)}><CategoryItem
      category={testState.categories[0]}/></Provider>);
    expect(mountedCategory.find('ExpenseForm')).toBeTruthy();
    expect(mountedCategory.find('Modal')).toBeTruthy();
  });
});

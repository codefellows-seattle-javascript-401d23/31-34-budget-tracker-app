import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { configure as configureEnzyme, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Landing from '../component/landing/landing';

configureEnzyme({ adapter: new Adapter() });

describe('#Landing', () => {
  const initialState = {
    categories: [{
      title: 'Food',
      budget: 1000,
      id: '0.123',
      createdOn: new Date(),
    }, {
      title: 'Transportation',
      budget: 500,
      id: '0.345',
      createdOn: new Date(),
    }],
    expenses: {
      0.123: [],
      0.345: [],
    },
  };

  test('', () => {
    const mockStore = configureStore([]);
    const mountedLanding = mount(<Provider store={mockStore(initialState)}><Landing /></Provider>);

    console.log(mountedLanding.html());

    expect(mountedLanding.find('CategoryForm')).toBeTruthy();
    expect(mountedLanding.find('Category').length).toEqual(2);
  });
});

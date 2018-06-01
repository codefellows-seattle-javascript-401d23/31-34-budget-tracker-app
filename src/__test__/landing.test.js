import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { configure as configureEnzyme, mount } from 'enzyme';
import Landing from '../component/landing/landing';
import configureStore from 'redux-mock-store';

configureEnzyme({ adapter: new Adapter() });

describe('#Landing', () => {
  const testState = {
    categories: [
      {
        title: 'Gregor',
        id: '0.123',
        createdOn: new Date(),
      },
      {
        title: 'Hound',
        id: '0.222',
        createdOn: new Date(),
      },
    ],
    expenses: {
      0.123: [],
      0.222: [],
    },
  };

  test('Testing landing\'s interactions with the store', () => {
    // Zachary - configureStore gives you a function to create a store
    const middleware = [];
    const mockStoreFactory = configureStore(middleware);

    const mountedLanding = mount(<Provider store={mockStoreFactory(testState)}
    ><Landing/></Provider>);

    expect(mountedLanding.find('CategoryForm')).toBeTruthy();
    expect(mountedLanding.find('Category').length).toEqual(2);
  });
});

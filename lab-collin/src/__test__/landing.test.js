import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { configure as configureEnzyme, shallow as enzymeShallowMount, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Landing from '../component/landing/landing';

configureEnzyme({ adapter: new Adapter() });

describe('#Landing', () => {
  const initialState = {
    sections: [{
      name: 'Bob',
      id: '1',
      createdOn: new Date(),
    },
    {
      name: 'Budget Item 2',
      id: '2',
      createdOn: new Date(),
    }],
    cards: {
      1: [],
      2: [],
    },
  };

  test('', () => {
    const mockStore = configureStore([]);
    const mountedLanding = mount(<Provider store={mockStore(initialState)}>
      <Landing /></Provider>);

    console.log(mountedLanding.html());

    expect(mountedLanding.find('SectionForm')).toBeTruthy();
    expect(mountedLanding.find('Section').length).toEqual(2);
  });
});


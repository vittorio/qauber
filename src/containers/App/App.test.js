import React from 'react';

import {shallow, mount} from 'enzyme';
import App from './App';


describe('App container', () => {
  const app = mount(<App />);

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders header', () => {
    const header = <h2>You would like to:</h2>;

    expect(app.contains(header)).toEqual(true);
    // expect(wrapper.contains(welcome)).toEqual(true);
  });

  it('has two buttons', () => {
    expect(app.find('button')).toHaveLength(2);
  });
});

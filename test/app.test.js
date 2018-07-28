import React from 'react';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });
const { shallow, mount, render } = enzyme;

import App from '../client/src/components/App.jsx';

const wrapper = shallow(<App />);
const appMount = mount(<App />);

describe('App suite', function() {
  it('should contain required components', function() {
    expect(wrapper.type()).toBe('div');
    // expect(wrapper.is('#app')).toBe(true);
    expect(wrapper.find('ProductTitle')).toHaveLength(1);
    expect(wrapper.find('ImageList')).toHaveLength(1);
    expect(wrapper.find('Description')).toHaveLength(1);
    expect(wrapper.find('DisplayImage')).toHaveLength(1);
  });
  // it('should mount', ()=>{
  //   expect(appMount.find('#App').length).toBe(1);
  // });
  it('should have required methods', () => {
    expect((<App />).handleChangeDisplay).toExist;
  });
});

// describe('handleChandgeDisplay', ()=>{
//   it('should change the state in App', ()=>{
//     expect
//   })
// })
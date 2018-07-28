import React from 'react';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });
const { shallow, mount, render } = enzyme;

import Description from '../client/src/components/Description/Description.jsx';
import DescriptionList from '../client/src/components/Description/DescriptionList.jsx';

const wrapper = shallow(<Description price={12} />);

describe('Description module', ()=>{
  it('should display price', ()=>{
    expect(wrapper.type()).toBe('div');
    expect(wrapper.contains(<span>{'$12'}</span>)).toBe(true);
    // expect(wrapper.find)
  });
  it('should include a List Component', ()=>{
    expect(wrapper.find('DescriptionList')).toHaveLength(1);
  });
});

const dLWrapper = shallow(<DescriptionList descriptions={['d1', 'd2', 'd3']}/>);
const dLRender = render(<DescriptionList descriptions={['d1', 'd2', 'd3']}/>);
// console.log('render: ', dLRender[0].children[0].children[0]);

describe('Description List Module', ()=>{
  it('should have display description entries for each descritpion', ()=>{
    expect(dLWrapper.find('DescriptionEntry')).toHaveLength(3);
    expect(dLRender[0].children[0].children[0].data).toBe('d1');
    expect(dLRender[0].children[1].children[0].data).toBe('d2');
    expect(dLRender[0].children[2].children[0].data).toBe('d3');
  });
});
import React from 'react';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });
const { shallow, mount, render } = enzyme;

import ProductTitle from '../client/src/components/ProductTitle.jsx';
const wrapper = shallow(
  <ProductTitle
    productName={'a product name'}
    questions={12}
    ratings={[1, 2, 3, 4, 5]}
  />
);

const renderTitle = render(
  <ProductTitle
    productName={'a product name'}
    questions={12}
    ratings={[1, 2, 3, 4, 5]}
  />
);

console.log('title wrapper: ', renderTitle.find('text'));

describe('product title component', ()=>{
  xit('should display product\'s name', ()=>{
    expect(renderTitle[0].children[2]).toIncludeText('a product name');
  });
  // xit('should have ratings and questions', ()=>{
  //   expect(renderTitle[0].children).toContain
  // })
});
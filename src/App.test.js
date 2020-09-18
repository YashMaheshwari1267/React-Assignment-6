import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';
import Header from './components/Header/Header';

describe('rendering ',() => {
  it('should render the <App /> component',() => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  })

  it('should render ul',() => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("ul").length).toEqual(1);
  })

  it('should render li',() => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("li").length).toEqual(4);
  })

})

describe('macthing elements',() => {
  it('list heading should match',() => {
    const wrapper = shallow(<Header />);
    let list = wrapper.find("li");
    expect(list.first().text()).toEqual("HOME");
    expect(list.at(1).text()).toEqual("PROJECTS"); 
    expect(list.at(2).text()).toEqual("SERVICES"); 
    expect(list.at(3).text()).toEqual("CONTACT");  
  })
})
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { App } from './App'

describe('App component', () => {
    it('renders a email input', () => {
        expect(shallow(<App />).find('#email').length).toEqual(1)
    }),
    it('renders a first name input', () => {
        expect(shallow(<App />).find('#firstName').length).toEqual(1)
    }),
    it('renders a last name input', () => {
      expect(shallow(<App />).find('#lastName').length).toEqual(1)
    }),
    it('renders a date picker', () => {
      expect(shallow(<App />).find('#date').length).toEqual(1)
    })
})

describe('Email input', () => {  
    it('should respond to change event and change the state of the component', () => {            
        const wrapper = shallow(<App />);
        wrapper.find('#email').simulate('change', { target: { name: 'email', value: 'ola@gmail.com' }});     
        expect(wrapper.state('email')).toEqual('ola@gmail.com');
    })
})
   
describe('First name input', () => {    
    it('should respond to change event and change the state of the component', () => {     
        const wrapper = shallow(<App />);
        wrapper.find('#firstName').simulate('change', { target: { name: 'firstName', value: 'Jan' }});
        expect(wrapper.state('firstName')).toEqual('Jan');
    })
})

describe('Last name input', () => {    
  it('should respond to change event and change the state of the component', () => {     
      const wrapper = shallow(<App />);
      wrapper.find('#lastName').simulate('change', { target: { name: 'lastName', value: 'Kowalski' }});
      expect(wrapper.state('lastName')).toEqual('Kowalski');
  })
})

describe('App view - submit with parameter', () => {
  let wrapper;
  const store = jest.fn(); 
  beforeEach(() => {
    wrapper = shallow(<App addEvent={store} togglePopup={store}/>)
  }),
  describe('When the form is submitted', () => {
    it('should call the mock functions', () => {
      wrapper.find('#addEvent').simulate('click', { preventDefault() {} });
      expect(store.mock.calls.length).toBe(2)
    }),    
    it('should be called with the provided parameters (without date)', () => {  
      wrapper.find('#email').simulate('change', { target: { name: 'email', value: 'ola@gmail.com' }}); 
      wrapper.find('#firstName').simulate('change', { target: { name: 'firstName', value: 'Jan' }});
      wrapper.find('#lastName').simulate('change', { target: { name: 'lastName', value: 'Kowalski' }}); 
      wrapper.find('#addEvent').simulate('click', { preventDefault() {} });
      expect(store.mock.calls[2]).toEqual([ 'Jan', 'Kowalski', 'ola@gmail.com', null ]);
    })
  })
})
import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App'

const wrapper = shallow(<App />);

describe('App component', () => {
  it('renders a email input', () => { expect(shallow(<App />).find('#email').length).toEqual(1) });
  it('renders a first name input', () => { expect(shallow(<App />).find('#firstName').length).toEqual(1) });
  it('renders a last name input', () => { expect(shallow(<App />).find('#lastName').length).toEqual(1) });
  it('renders a date picker', () => { expect(shallow(<App />).find('#eventDate').length).toEqual(1) });
});

describe('Email input', () => {  
  it('should respond to change event and change the state of the component', () => {
    wrapper.find('#email').simulate('change', { target: { name: 'email', value: 'ola@gmail.com' }});     
    expect(wrapper.state('email')).toEqual('ola@gmail.com');
  });
});
   
describe('First name input', () => {    
  it('should respond to change event and change the state of the component', () => {
    wrapper.find('#firstName').simulate('change', { target: { name: 'firstName', value: 'Jan' }});
    expect(wrapper.state('firstName')).toEqual('Jan');
  });
});

describe('Last name input', () => {    
  it('should respond to change event and change the state of the component', () => {     
    wrapper.find('#lastName').simulate('change', { target: { name: 'lastName', value: 'Kowalski' }});
    expect(wrapper.state('lastName')).toEqual('Kowalski');
  });
});

describe('Event date picker', () => {    
  it('should respond to change event and change the state of the component', () => {  
    wrapper.find('#eventDate').simulate('change', { eventDate: '2018-09-18T22:00:00.000Z' });
    expect(wrapper.state('eventDate')).toEqual({ eventDate: '2018-09-18T22:00:00.000Z' });
  });  
  it('should respond to select event and set the state of the component', () => {     
    wrapper.find('#eventDate').simulate('select', { selectedDate: '2018-09-18T22:00:00.000Z' });
    expect(wrapper.state('eventDate')).toEqual({ selectedDate: '2018-09-18T22:00:00.000Z' });
  });
});

describe('When the reset button is submitted', () => {
  it('should reset all input value and the state of the component', () => {  
    wrapper.find('#resetForm').simulate('click', { preventDefault() {} });
    expect(wrapper.state('lastName' && 'firstName' && 'email')).toEqual('');
    expect(wrapper.state('eventDate')).toEqual(null);
  });
});

describe('App view - submit with parameter', () => {
  let wrapper;
  const store = jest.fn(); 
  beforeEach(() => {
    wrapper = shallow(<App addEvent={store} togglePopup={store}/>)
  }),
  describe('When the send data button is submitted', () => {
    it('should call the mock functions', () => {
      wrapper.find('#addEvent').simulate('click', { preventDefault() {} });
      expect(store.mock.calls.length).toBe(2)
    });
    it('should be called with the provided parameters (without date)', () => {  
      wrapper.find('#email').simulate('change', { target: { name: 'email', value: 'ola@gmail.com' }}); 
      wrapper.find('#firstName').simulate('change', { target: { name: 'firstName', value: 'Jan' }});
      wrapper.find('#lastName').simulate('change', { target: { name: 'lastName', value: 'Kowalski' }}); 
      wrapper.find('#addEvent').simulate('click', { preventDefault() {} });
      expect(store.mock.calls[2]).toEqual([ 'Jan', 'Kowalski', 'ola@gmail.com', null ]);
    });
  });
});

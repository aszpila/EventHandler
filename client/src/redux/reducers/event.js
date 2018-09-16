import {
    ADD_EVENT_REQUEST,
    ADD_EVENT_SUCCESS,
    ADD_EVENT_FAILURE,
  } from '../actions/event';
  
  const initialState = {
    isFetching: false,
    addedEvent: {},
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {      
      case ADD_EVENT_REQUEST: {
        return Object.assign({}, state, {
          isFetching: true,
        });  
      }
      case ADD_EVENT_SUCCESS: {
        return Object.assign({}, state, {
          isFetching: false,
          addedEvent: action.response.addedEvent,
        });
      }
      case ADD_EVENT_FAILURE: {
        return Object.assign({}, state, {
          isFetching: false,
        });
      }
      default: return state;
    }
  };
  
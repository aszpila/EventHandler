import {
    ADD_EVENT_REQUEST,
    ADD_EVENT_SUCCESS,
    ADD_EVENT_FAILURE,
  } from '../actions/event';
  
  const initialState = {
    isFetching: false,
    addedEvent: {},
    success: false,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {      
      case ADD_EVENT_REQUEST: {
        return Object.assign({}, state, {
          isFetching: true,
          success: false,
        });  
      }
      case ADD_EVENT_SUCCESS: {
        return Object.assign({}, state, {
          isFetching: false,
          addedEvent: action.response.addedEvent,
          success: action.response.success,
        });
      }
      case ADD_EVENT_FAILURE: {
        return Object.assign({}, state, {
          isFetching: false,
          success: false,
        });
      }
      default: return state;
    }
  };
  
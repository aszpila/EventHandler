import {
    FETCH_EVENT_REQUEST,
    FETCH_EVENT_SUCCESS,
    FETCH_EVENT_FAILURE,
  } from '../actions/event';
  
  const initialState = {
    isFetching: false,
    event: [],
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {      
      case FETCH_EVENT_REQUEST: {
        return Object.assign({}, state, {
          isFetching: true,
        });
      }
      case FETCH_EVENT_SUCCESS: {
        return Object.assign({}, state, {
          event: action.response,
        });
      }
      case FETCH_EVENT_FAILURE: {
        return Object.assign({}, state, {
          isFetching: false,
        });
      }      
      default: return state;
    }
  };
  
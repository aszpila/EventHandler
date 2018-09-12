import { CALL_API } from '../middleware/api';

export const FETCH_EVENT_REQUEST = 'FETCH_EVENT_REQUEST';
export const FETCH_EVENT_SUCCESS = 'FETCH_EVENT_SUCCESS';
export const FETCH_EVENT_FAILURE = 'FETCH_EVENT_FAILURE';

export const ADD_EVENT_REQUEST = 'ADD_EVENT_REQUEST';
export const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS';
export const ADD_EVENT_FAILURE = 'ADD_EVENT_FAILURE';

export function fetchEvent() {
  return {
    [CALL_API]: {
      endpoint: `api/event`,
      method: 'GET',
      types: [
        FETCH_EVENT_REQUEST,
        FETCH_EVENT_SUCCESS,
        FETCH_EVENT_FAILURE,
      ],
    },
  };
}

export function addEvent(firstName, lastName, email, eventDate) {
  return {
    [CALL_API]: {
      endpoint: `api/event`,
      method: 'POST',
      data: { firstName, lastName, email, eventDate },
      types: [
        ADD_EVENT_REQUEST,
        ADD_EVENT_SUCCESS,
        ADD_EVENT_FAILURE,
      ],
    },
  };
}

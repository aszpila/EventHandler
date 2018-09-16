import { CALL_API } from '../middleware/api';

export const ADD_EVENT_REQUEST = 'ADD_EVENT_REQUEST';
export const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS';
export const ADD_EVENT_FAILURE = 'ADD_EVENT_FAILURE';

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

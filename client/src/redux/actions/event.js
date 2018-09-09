import { CALL_API } from '../middleware/api';

export const FETCH_EVENT_REQUEST = 'FETCH_EVENT_REQUEST';
export const FETCH_EVENT_SUCCESS = 'FETCH_EVENT_SUCCESS';
export const FETCH_EVENT_FAILURE = 'FETCH_EVENT_FAILURE';

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

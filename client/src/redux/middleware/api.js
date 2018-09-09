import axios from 'axios';

const BASE_URL = `http://localhost:5000`;

async function callApi(endpoint, settings) {
  try {
    const config = {
      ...settings,
      url: `${BASE_URL}/${endpoint}`,
      validateStatus: status => status >= 200 && status < 300,
    };

    config.headers = {
      ...config.headers,
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    };

    const response = await axios(config);

    return response.statusText === 'OK' || response.status === 204
      ? Promise.resolve(response.data)
      : Promise.reject(response.data);
  } catch (error) {
    if (error.response) {
      console.log(error.response);
    }
    return Promise.reject(error.response);
  }
}

export const CALL_API = Symbol('Call API');

export default () => next => (action) => {
  const settings = action[CALL_API];

  if (typeof settings === 'undefined') {
    return next(action);
  }

  const { endpoint, types, ...data } = settings;
  const [requestType, successType, errorType] = types;

  next({ type: requestType });

  return callApi(endpoint, data).then(
    response => next({ response, type: successType }),
    response => next({ response, type: errorType }),
  );
};

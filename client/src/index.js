import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
// import registerServiceWorker from './registerServiceWorker';
import api from './redux/middleware/api';
import reducers from './redux/reducers';
import App from './views/App'

const env = process.env.NODE_ENV || 'development';

let middleware = [api, thunk];
if (env !== 'production') middleware.push(logger);

middleware = compose(applyMiddleware(...middleware));
const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
// registerServiceWorker();

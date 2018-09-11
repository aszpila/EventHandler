import { combineReducers } from 'redux';
import event from './event';
import ui from './ui';

const rootReducer = combineReducers({
  event,
  ui
});

export default rootReducer;

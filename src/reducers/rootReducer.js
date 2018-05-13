import { combineReducers } from 'redux';

import auth from './auth';
import components from './components';

export default combineReducers({
  auth,
  components
});

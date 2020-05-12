
import { combineReducers } from 'redux';
import influencers from './influencers';
import influencerDetails from './influencerDetails';
import errors from './errors';
import auth from './auth';

export default combineReducers({
  influencers,
  influencerDetails,
  errors,
  auth,
});

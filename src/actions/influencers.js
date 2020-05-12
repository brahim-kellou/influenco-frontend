import axios from 'axios';

import { returnError } from './messages';

import { GET_INFLUENCERS } from './types';

// GET INFLUENCERS
export const getInfluencers = () => dispatch => {
  axios.get('/api/influencers').then(res => {
    dispatch({
      type: GET_INFLUENCERS,
      payload: res.data
    });
  }).catch(err => dispatch(returnError(err.response.data, err.response.status)));
}
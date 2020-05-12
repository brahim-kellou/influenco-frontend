import axios from 'axios';

import { returnError } from './messages';

import { GET_INFLUENCER_DETAILS } from './types';

// GET INFLUENCER DETAILS
export const getInfluencerDetails = id => dispatch => {
  axios.get(`/api/influencers/${id}/`).then(res => {
    dispatch({
      type: GET_INFLUENCER_DETAILS,
      payload: res.data
    });
  }).catch(err => dispatch(returnError(err.response.data, err.response.status)));
}
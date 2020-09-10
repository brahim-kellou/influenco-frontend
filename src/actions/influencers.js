import axios from 'axios';
import { API_HOST } from '../constants';
import { returnError } from './messages';

import { GET_INFLUENCERS } from './types';

// GET INFLUENCERS
export const getInfluencers = (
  classInfluence,
  minFollowers, 
  maxFollowers,
  minPosts,
  maxPosts,
  ordering="followers",
  offset=0,
  ) => dispatch => {
  axios.get(`${API_HOST}/api/influencers/?class_influence=${classInfluence}&posts__gte=${minPosts}&posts__lte=${maxPosts}&followers__gte=${minFollowers}&followers__lte=${maxFollowers}&ordering=-${ordering}&offset=${offset}`).then(res => {
    dispatch({
      type: GET_INFLUENCERS,
      payload: res.data.results.sort(function(a, b) {
        return a.followers - b.ollowers ;
      })
    });
  }).catch(err => dispatch(returnError(err.response.data, err.response.status)));
}
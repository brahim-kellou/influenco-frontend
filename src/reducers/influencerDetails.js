import { GET_INFLUENCER_DETAILS } from '../actions/types';

const initialState = {
  influencerDetails: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_INFLUENCER_DETAILS:
      return {
        ...state,
        influencerDetails: action.payload
      };
    default:
      return state
  }
}
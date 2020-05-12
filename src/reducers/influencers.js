import { GET_INFLUENCERS } from '../actions/types';

const initialState = {
  influencers: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_INFLUENCERS:
      return {
        ...state,
        influencers: action.payload
      };
    default:
      return state
  }
}
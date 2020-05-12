import { GET_PROFILE_DETAILS } from '../actions/types';

const initialState = {
  profileDetails: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_DETAILS:
      return {
        ...state,
        profileDetails: action.payload
      };
    default:
      return state
  }
}
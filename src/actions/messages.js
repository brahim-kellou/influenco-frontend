import { GET_ERRORS } from './types';

// RETURN ERRORS
export const returnError = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status }
  }
}
import { RECEIVE_CONTACT } from '../actions/types';

export default function articleReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_CONTACT:
      return action.contact;
    default:
      return state;
  }
};
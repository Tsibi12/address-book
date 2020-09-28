import { ADD_CONTACT,EDIT_CONTACT, DELETE_CONTACT, FETCH_CONTACT, REPLACE_CONTACT } from '../actions/types';

// const defaultState = {
//   contacts: [],
//   // contact: {name:{}},
//   // loading: false,
//   errors:{}
// }
const initialState = { contacts: [] }

export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case DELETE_CONTACT:
      return state.filter(({ id }) => id !== action.id);
      case EDIT_CONTACT:
            return state.map((contact) => {
                if (contact.id === action.id) {
                    return {
                        ...contact,
                        ...action.updates
                    };
                } else {
                    return contact;
                }
            });
      case FETCH_CONTACT:
      return action.contacts;
    default:
      return state;
  }
}
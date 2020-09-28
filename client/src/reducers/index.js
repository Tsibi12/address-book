import { combineReducers } from 'redux';
import contacts from './contactReducer';
import contact from './singleContactReducer';

export default combineReducers({
    contacts,
    contact

});
import { ADD_CONTACT,EDIT_CONTACT, DELETE_CONTACT, FETCH_CONTACT,RECEIVE_CONTACT } from "./types";
import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/v1/contact';

/*
* Add Contact Actions
*/

export const createContact = ({ firstName, lastName,phone,email, city,street, postalCode, country }) => {
  return (dispatch) => {
    return axios.post(apiUrl, {firstName, lastName,phone,email, city,street, postalCode, country})
      .then(response => {
        dispatch(createContactSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createContactSuccess =  (data) => {
  return {
    type: ADD_CONTACT,
    payload: {
      id: data.id,
      firstName: data.firstName, 
      lastName: data.lastName,
      phone: data.phone,
      email: data.email, 
      city: data.city,
      street: data.street, 
      postalCode: data.postalCode, 
      country: data.country
    }
  }
};

/*
* Get Contact Actions
*/

export const getContact = (id) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/${id}`)
      .then(response => {
        dispatch({type: RECEIVE_CONTACT, contact: response.data.Contact});
      })
      .catch(error => { 
        throw(error); 
      });
  };
};

/*
* Delete Contact Actions
*/
const _deleteContact = ({ id } = {}) => ({
  type: DELETE_CONTACT,
  id
});

export const deleteContact = ({ id } = {}) => {
  return (dispatch) => {
    return axios.delete(`${apiUrl}/${id}`).then(() => {
        dispatch(_deleteContact({ id }));
      })
  }
};

/*
* Edit Contact Actions
*/

const _editContact = (id, updates) => ({
  type: EDIT_CONTACT,
  id,
  updates
});

export const editContact = (id, updates) => {
  return (dispatch) => {
      return axios.put(`${apiUrl}/${id}`, updates).then(() => {
          dispatch(_editContact(id, updates));
      });
  }
};

/*
* Get all Contacts Actions
*/ 

export const _fetchAllContacts = (contacts) => {
  return {
    type: FETCH_CONTACT,
    contacts
  }
};


export const fetchAllContacts = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(_fetchAllContacts(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
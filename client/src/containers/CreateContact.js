import { connect } from 'react-redux';
import { createContact } from '../actions';
import NewContact from '../components/NewContact';

const mapDispatchToProps = dispatch => {
  return {
    onAddContact: contact => {
      dispatch(createContact(contact));
      
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewContact);
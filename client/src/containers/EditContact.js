import { connect } from 'react-redux';
import { getContact,editContact } from '../actions';
import UpdateContact from '../components/UpdateContact';

const mapStateToProps = (state) => ({ contact: state.contact });
const mapDispatchToProps = { getContact,editContact };

export default connect(mapStateToProps,mapDispatchToProps)(UpdateContact);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContact,editContact } from '../actions';


class EditContact extends Component {
  
    componentDidMount() {
      this.props.getContact(this.props.match.params.id);
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    
    handleSubmit = (e) => {
      e.preventDefault();
      const id = this.props.contact.id;
      const firstName = this.state.firstName? this.state.firstName: this.props.contact.firstName;
      const lastName = this.state.lastName? this.state.lastName : this.props.contact.lastName;
      const phone = this.state.phone? this.state.phone: this.props.contact.phone;
      const email = this.state.email? this.state.email: this.props.contact.email;
      const city = this.state.city? this.state.city: this.props.contact.city;
      const street = this.state.street? this.state.street: this.props.contact.street;
      const postalCode = this.state.postalCode? this.state.postalCode : this.props.contact.postalCode;
      const country = this.state.country? this.state.country : this.props.contact.country;
      const contact ={firstName, lastName,phone,email, city,street, postalCode, country};
      this.props.editContact(id,contact);
  
      this.props.history.push('/');
   
    };
    
    handleCancel = () => {
      this.props.history.push('/contacts')
    }

    render() {
        const {  firstName, lastName,phone,email, city,street, postalCode, country } = this.props.contact;
      
        return (
            <div className="col-md-6 offset-md-3">
                <h3>Updating Contact</h3>
                <form onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="FirstName"
                        className="form-control"
                        name="firstName"
                        onChange={ this.handleInputChange }
                        defaultValue={ firstName }
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="LastName"
                        className="form-control"
                        name="lastName"
                        onChange={ this.handleInputChange }
                        defaultValue={ lastName }
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="Phone"
                        className="form-control"
                        name="phone"
                        onChange={ this.handleInputChange }
                        defaultValue={ phone }
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="Email"
                        className="form-control"
                        name="email"
                        onChange={ this.handleInputChange }
                        defaultValue={ email }
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="City"
                        className="form-control"
                        name="city"
                        onChange={ this.handleInputChange }
                        defaultValue={ city }
                        />
                    </div>

                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="Street"
                        className="form-control"
                        name="street"
                        onChange={ this.handleInputChange }
                        defaultValue={ street }
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="Postal Code"
                        className="form-control"
                        name="postalCode"
                        onChange={ this.handleInputChange }
                        defaultValue={ postalCode }
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="Country"
                        className="form-control"
                        name="country"
                        onChange={ this.handleInputChange }
                        defaultValue={ country }
                        />
                    </div>
                    
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Add Post</button> {' '}
                        <button type="button" className="btn btn-warning float-right" onClick={ this.handleCancel }>
                        Cancel
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ contact: state.contact });

const mapDispatchToProps = { getContact,editContact };

export default connect(mapStateToProps,mapDispatchToProps)(EditContact);

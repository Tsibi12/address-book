import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getContact,editContact } from '../actions';
import Input from './Input';


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
        
        // Calling editContact and passing values
        this.props.editContact(id,contact);
    
        // Navigate to home page
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
                    <Input
                        type="text"
                        placeholder="FirstName"
                        name="firstName"
                        onChange={ this.handleInputChange }
                        defaultValue={ firstName }
                    />
                    
                    <Input
                        type="text"
                        placeholder="LastName"
                        name="lastName"
                        onChange={ this.handleInputChange }
                        defaultValue={ lastName }
                    />
                    
                    <Input
                        type="text"
                        placeholder="Phone"
                        name="phone"
                        onChange={ this.handleInputChange }
                        defaultValue={ phone }
                    />
                    
                    <Input
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={ this.handleInputChange }
                        defaultValue={ email }
                    />

                    <Input
                        type="text"
                        placeholder="City"
                        name="city"
                        onChange={ this.handleInputChange }
                        defaultValue={ city }
                    />

                    <Input
                        type="text"
                        placeholder="Street"
                        name="street"
                        onChange={ this.handleInputChange }
                        defaultValue={ street }
                    />
                    
                    <Input
                        type="text"
                        placeholder="Postal Code"
                        name="postalCode"
                        onChange={ this.handleInputChange }
                        defaultValue={ postalCode }
                    />
                    
                    <Input
                        type="text"
                        placeholder="Country"
                        name="country"
                        onChange={ this.handleInputChange }
                        defaultValue={ country }
                    />
                    
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Update</button> {' '}
                        <button type="button" className="btn btn-warning float-right" onClick={ this.handleCancel }>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

// const mapStateToProps = (state) => ({ contact: state.contact });

// const mapDispatchToProps = { getContact,editContact };

export default EditContact;

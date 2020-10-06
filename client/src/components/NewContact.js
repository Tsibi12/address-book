import React, { Component } from 'react';
import Input from './Input';

class NewContact extends Component {
    state = {
        firstName: '', 
        lastName: '',
        phone: '',
        email: '', 
        city: '',
        street: '', 
        postalCode: '', 
        country: ''
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.email.trim()) {
            this.props.onAddContact(this.state);
            this.handleReset();
            this.props.history.push('/');
        }

    };
    
    handleReset = () => {
        this.setState({
            firstName: '', 
            lastName: '',
            phone: '',
            email: '', 
            city: '',
            street: '', 
            postalCode: '', 
            country: ''
        });
    };

    render() {
        const { firstName, lastName,phone,email, city,street, postalCode, country } = this.state;
        return (
            <div className="col-md-6 offset-md-3">
                <h3>Creating New Contact</h3>
                <form onSubmit={ this.handleSubmit }>
                    <Input
                        type="text"
                        placeholder="FirstName"
                        name="firstName"
                        onChange={ this.handleInputChange }
                        value={ firstName }
                    />
                    
                    <Input
                        type="text"
                        placeholder="LastName"
                        name="lastName"
                        onChange={ this.handleInputChange }
                        value={ lastName }
                    />
                    
                    <Input
                        type="number"
                        placeholder="Phone"
                        name="phone"
                        onChange={ this.handleInputChange }
                        value={ phone }
                    />
                    
                    <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={ this.handleInputChange }
                        value={ email }
                    />
                    
                    <Input
                        type="text"
                        placeholder="City"
                        name="city"
                        onChange={ this.handleInputChange }
                        value={ city }
                    />

                    <Input
                        type="text"
                        placeholder="Street"
                        name="street"
                        onChange={ this.handleInputChange }
                        value={ street }
                    />
                    
                    <Input
                        type="number"
                        placeholder="Postal Code"
                        name="postalCode"
                        onChange={ this.handleInputChange }
                        value={ postalCode }
                    />

                    <Input
                        type="text"
                        placeholder="Country"
                        name="country"
                        onChange={ this.handleInputChange }
                        value={ country }
                    />
                    
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Add contact</button> {' '}
                        <button type="button" className="btn btn-warning float-right" onClick={ this.handleReset }>
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewContact;
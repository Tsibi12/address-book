import React, { Component } from 'react'

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
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="FirstName"
                        className="form-control"
                        name="firstName"
                        onChange={ this.handleInputChange }
                        value={ firstName }
                        required
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="LastName"
                        className="form-control"
                        name="lastName"
                        onChange={ this.handleInputChange }
                        value={ lastName }
                        required
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="number"
                        placeholder="Phone"
                        className="form-control"
                        name="phone"
                        onChange={ this.handleInputChange }
                        value={ phone }
                        required
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="email"
                        placeholder="Email"
                        className="form-control"
                        name="email"
                        onChange={ this.handleInputChange }
                        value={ email }
                        required
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="City"
                        className="form-control"
                        name="city"
                        onChange={ this.handleInputChange }
                        value={ city }
                        required
                        />
                    </div>

                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="Street"
                        className="form-control"
                        name="street"
                        onChange={ this.handleInputChange }
                        value={ street }
                        required
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="number"
                        placeholder="Postal Code"
                        className="form-control"
                        name="postalCode"
                        onChange={ this.handleInputChange }
                        value={ postalCode }
                        required
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        placeholder="Country"
                        className="form-control"
                        name="country"
                        onChange={ this.handleInputChange }
                        value={ country }
                        required
                        />
                    </div>
                    
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Add Post</button> {' '}
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
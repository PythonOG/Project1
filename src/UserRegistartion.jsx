import React, { useState } from 'react';
import './UserRegistration.css';
import axios from 'axios';

const UserRegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNo: '',
        city: '',
        password: '',
    });
    const [passwordMatch, setPasswordMatch] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setPasswordMatch(false);
            return;
          }
        fetch('http://localhost:8080/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Success:', data);
                // Handle success, e.g., show a success message to the user
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle error, e.g., show an error message to the user
            });
    };

    return (
        <div className="container">
            <div className="row py-5 mt-4 align-items-center">
                <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                    <h1>Create an Account</h1>
                    
                </div>
                <div className="col-md-7 col-lg-6 ml-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="input-group col-lg-6 mb-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    className="form-control"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group col-lg-6 mb-4">
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    className="form-control"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group col-lg-12 mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group col-lg-12 mb-4">
                                <input
                                    type="tel"
                                    name="mobileNo"
                                    placeholder="Mobile Number"
                                    className="form-control"
                                    value={formData.mobileNo}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group col-lg-12 mb-4">
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    className="form-control"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group col-lg-6 mb-4">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="form-control"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group col-lg-6 mb-4">
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    className="form-control"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                                {!passwordMatch && <p className="text-danger">Passwords do not match.</p>}
                            </div>
                            <div className="form-group col-lg-12 mx-auto mb-0">
                                <button type="submit" className="btn btn-primary btn-block py-2">
                                    Create your account
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default UserRegistrationForm;

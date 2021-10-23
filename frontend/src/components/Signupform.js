import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Signupform.css';


export default class SignUp extends Component {
    render() {
        return (
            <div className="outer">
                <div className="inner">
                    <form>
                        <h3>Register</h3>

                        <div className="form-group spacing">
                            <label>First name</label>
                            <input type="text" className="form-control" placeholder="First name" />
                        </div>

                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Confirm Password" />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="PhoneNumber" className="form-control" placeholder="Phone Number" />
                        </div>
                        <button type="submit" className="btn btn-dark btn-lg btn-block spacing">Register</button>
                        <p className="forgot-password text-right">
                            Already registered <Link to='/Login'> <a href="#">log in?</a> </Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}
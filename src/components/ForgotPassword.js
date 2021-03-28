import React from 'react';
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';
import "../App.css";

const ForgotPassword = (props) => {
    return(
        <div className="forgotPassword">
            <div className="header">
                <div className="headerLogo">facebook</div>
                <div className="rightHeader">
                    <Form.Control
                        type="text"
                        placeholder="Email or phone"
                        className="headerEmail"
                    />
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        className="pass"
                    />
                    <Button variant="success" className="headerLoginBtn">Log In</Button>
                    <a href="#" className="headerForgotLink">Forgotten account?</a>
                </div>
            </div>
            <div className="container mt-5">
                <b className="findAccountTitle">Find Your Account</b>
                <hr></hr>
                <p>Please enter your mail address or phone number to search for your account.</p>
                <Form.Control
                        type="text"
                        placeholder="Mobile Number"
                        className="email"
                />
                <hr></hr>
                <div className="forgotBtns">
                    <Button variant="default" className="forgotCancelBtn">Cancel</Button>
                    <Button variant="primary" className="forgotSearchBtn">Search</Button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;
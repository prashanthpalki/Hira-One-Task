import React from 'react';
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';
import "../App.css";
const Login = (props) => {
    return(
        <>
            <h3 className="facebookLogo">facebook</h3><br/>
            <div className="container">
                <p className="loginTitle">Log in to Facebook</p><br/>
                <Form.Control
                    type="text"
                    placeholder="Email address or phone number"
                /><br/>
                <Form.Control
                    type="password"
                    placeholder="Password"
                /><br/>
                <Button variant="primary" className="loginBtn">Log In</Button><br/><br/>
                <a href="#" className="forgotLink">Forgotten account?</a><br/><br/>
                <Button variant="success" className="createAccountBtn">Log In</Button><br/>
            </div>
        </>
    )
}

export default Login;
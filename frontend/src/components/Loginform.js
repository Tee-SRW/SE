import React  from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "./Loginform.css";
import { Container, Row, Col } from 'react-grid-system';

export default function Login()  {
    return (
      <div className="outer">
        <div className="inner">
          <form>
            <h3>Log in</h3>
            <div className="form-group">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="password"
              />
            </div>
            <div className="form-group ">
              <div className="custom-control custom-checkbox ">
                <input
                  type="checkbox"
                  className="custom-control-input spacing-right"
                  id="customCheck1"
                />
                <label className="custom-control-label spacing-top" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <div className="d-grid gap-2">
            <button type="submit" className="btn btn-dark btn-lg btn-block spacing-top">
              Sign in
            </button>
            </div>
            <Container>
              <Row>
                <Col>
                <p className="haveaccount spacing-top">
                Don’t have account{" "}
              <Link to="/sign-up">
                {" "}
                <a href="#">  yet?</a>{" "}
              </Link>
            </p>
            </Col>
                <Col>
                <p className="forgot-password spacing-top ">
                Forgot{" "}
              <Link to="/Forgetpassword">
                {" "}
                <a href="#"> password?</a>{" "}
              </Link>
            </p></Col>
              </Row>
            </Container>
          </form>
        </div>
      </div>
    );
  }

import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "./Resetpasswordform.css";
import { Container, Row, Col } from "react-grid-system";

export default function Resetpasswordform() {
  return (
    <div className="outer">
      <div className="inner">
        <form>
          <h3>Reset Password</h3>
          <div className="form-group">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="New Password" />
            </Form.Group>
          </div>
          <div className="form-group">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm New Password" />
            </Form.Group>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-dark btn-lg btn-block spacing-top">
              Reset
            </button>
            </div>
        </form>
      </div>
    </div>
  );
}

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
          <h3>รีเซ็ตรหัสผ่าน</h3>
          <div className="form-group">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>รหัสผ่านใหม่</Form.Label>
              <Form.Control type="password" placeholder="รหัสผ่านใหม่" />
            </Form.Group>
          </div>
          <div className="form-group">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ยืนยันรหัสผ่านใหม่</Form.Label>
              <Form.Control type="password" placeholder="ยืนยันรหัสผ่านใหม่" />
            </Form.Group>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-dark btn-lg btn-block spacing-top">
              รีเซ็ต
            </button>
            </div>
        </form>
      </div>
    </div>
  );
}

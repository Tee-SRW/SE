import React,{useState} from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Resetpasswordform.css";
import { Container, Row, Col } from "react-grid-system";

export default function Resetpasswordform() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <div className="Resetpasswordform-outer">
      <div className="Resetpasswordform-inner">
        <h3>รีเซ็ตรหัสผ่าน</h3>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>รหัสผ่านใหม่</Form.Label>
              <Form.Control required type="password" placeholder="รหัสผ่านใหม่" />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ รหัสผ่านใหม่
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>ยืนยันรหัสผ่านใหม่</Form.Label>
              <Form.Control required type="password" placeholder="ยืนยันรหัสผ่านใหม่" />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ ยืนยันรหัสผ่านใหม่
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <div className="d-grid gap-2 btn-color">
            <Button
              type="submit"
              className="btn btn-lg color spacing-top10"
            >
              รีเซ็ตรหัสผ่าน
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

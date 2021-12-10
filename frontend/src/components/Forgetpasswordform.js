import React,{useState} from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Forgetpasswordform.css";
import { Container, Row, Col } from "react-grid-system";

export default function Forgetpasswordform() {
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
    <div className="Forgetpasswordform-outer">
      <div className="Forgetpasswordform-inner">
        <h3>ลืมรหัสผ่าน</h3>
        <div className="text">
            <p>ไม่ต้องกังวล!</p> การรีเซ็ตรหัสผ่านของคุณเป็นเรื่องง่าย
            ป้อนที่อยู่อีเมลของคุณและเราจะส่งลิงก์เพื่อรีเซ็ตรหัสผ่านของคุณ
          </div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3 spacing-top">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>อีเมล</Form.Label>
              <Form.Control required type="text" placeholder="อีเมล" />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ อีเมล
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <div className="d-grid gap-2">
            <Button
              type="submit"
              className="btn btn-dark btn-lg btn-block spacing-top10"
            >
              ยืนยัน
            </Button>
          </div>
          <Row>
            <Col>
              <p className="forgotpasswordform-password">
                <Link to="/Login">
                  <a href="#"> กลับหน้าเข้าสู่ระบบ</a>
                </Link>
              </p>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./EditprofileFreelanceform.css";
import Form from "react-bootstrap/Form";
import InputMask from "react-input-mask";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-grid-system";
export default function EditprofileFreelance(props) {
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
    <div className="EditprofileFreelanceform-outer">
      <div className="EditprofileFreelanceform-inner">
        <h3>โปรไฟล์ของฉัน</h3>
        <div className="d-grid2">
          <img
            src="https://discountdoorhardware.ca/wp-content/uploads/2018/06/profile-placeholder-3.jpg"
            className="img-fluid rounded-circle"
            alt="Profile Admin"
          ></img>
        </div>
        <div className="d-grid2 spacing-top btn-fontblack">
          <button
            type="submit"
            className="btn btn-lg color bottomprofileprofile"
          >
            แก้ไขโปรไฟล์
          </button>
        </div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>ชื่อจริง</Form.Label>
              <Form.Control required type="text" placeholder="ชื่อจริง" />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ ชื่อจริง
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>นามสกุล</Form.Label>
              <Form.Control required type="text" placeholder="นามสกุล" />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ นามสกุล
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>อีเมลที่ติดต่อได้</Form.Label>
              <Form.Control required type="text" placeholder="อีเมลที่ติดต่อได้" />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ อีเมลที่ติดต่อได้
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>เบอร์โทรศัพท์ที่ติดต่อได้</Form.Label>
              <InputMask
                required
                className="form-control spacing-top"
                placeholder="เบอร์โทรศัพท์ที่ติดต่อได้"
                mask="999-999-9999"
                onChange={props.onChange}
                value={props.value}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ เบอร์โทรศัพท์
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Line</Form.Label>
              <Form.Control required type="text" placeholder="Line" />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ Line
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Facebook</Form.Label>
              <Form.Control required type="text" placeholder="Facebook" />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ Facebook
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Instagram</Form.Label>
              <Form.Control required type="text" placeholder="Instagram" />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ Instagram
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <div className="d-grid gap-2 btn-color">
            <Button
              type="submit"
              className="btn btn-lg color spacing-top10"
            >
              บันทึก
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

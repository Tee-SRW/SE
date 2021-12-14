import React, { useState } from "react";
import "./EditprofileCompanyform.css";
import Form from "react-bootstrap/Form";
import InputMask from "react-input-mask";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-grid-system";

export default function EditprofileCompanyform(props) {
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
    <div className="EditprofileCompanyform-outer">
      <div className="EditprofileCompanyform-inner">
        <h3>โปรไฟล์ของฉัน</h3>
        <div className="d-grid2">
          <img
            src="https://discountdoorhardware.ca/wp-content/uploads/2018/06/profile-placeholder-3.jpg"
            className="img-fluid rounded-circle"
            alt="Profile Admin"
          ></img>
        </div>
        <div className="d-grid2 gap-2 spacing-top btn-fontblack">
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
              <Form.Label>ชื่อ</Form.Label>
              <Form.Control required type="text" placeholder="ชื่อบริษัท" />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ ชื่อบริษัท
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>อีเมล</Form.Label>
              <Form.Control required type="text" placeholder="อีเมล" />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ อีเมล
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>เบอร์โทรศัพท์</Form.Label>
              <InputMask
                required
                className="form-control spacing-top"
                placeholder="xxx-xxx-xxxx"
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
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>ที่อยู่</Form.Label>
              <Form.Control required type="text" placeholder="ที่อยู่" />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ ที่อยู่
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>ตำบล / แขวง</Form.Label>
              <Form.Control required type="text" placeholder="ตำบล / แขวง" />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ ตำบล / แขวง
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>อำเภอ / เขต</Form.Label>
              <Form.Control required type="text" placeholder="อำเภอ / เขต" />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ อำเภอ / เขต
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>จังหวัด</Form.Label>
              <Form.Control required type="text" placeholder="จังหวัด" />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ จังหวัด
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>รหัสไปรษณีย์</Form.Label>
              <Form.Control required type="text" placeholder="รหัสไปรษณีย์" />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ รหัสไปรษณีย์
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

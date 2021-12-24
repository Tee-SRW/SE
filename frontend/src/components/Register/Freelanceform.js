import React, { useState } from "react";
import "./Freelanceform.css";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-grid-system";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';

export default function Freelance() {
  const history = useHistory();

  const [values, setValues] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    line: "",
    facebook: "",
    instagram: ""
  });

  const handleValuesChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);


    if(form.checkValidity() === true) {
      alert("สมัครเป็นฟรีแลนซ์สำเร็จ")
      history.push("/Profilefreelance")
    }
  };
  return (
    <div className="Signupform-outer">
      <div className="Signupform-inner">
        <h3>สมัครเป็นฟรีแลนซ์</h3>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>ชื่อ</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="ชื่อ"
                value={values.firstname}
                onChange={handleValuesChange("firstname")}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ ชื่อ
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>นามสกุล</Form.Label>
              <Form.Control 
              required 
              type="text" 
              placeholder="นามสกุล" 
              value={values.lastname}
              onChange={handleValuesChange("lastname")}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ นามสกุล
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>อีเมลสำหรับทำงาน</Form.Label>
              <Form.Control 
              required 
              type="text" 
              placeholder="อีเมลสำหรับทำงาน" 
              value={values.email}
              onChange={handleValuesChange("email")}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ อีเมลสำหรับทำงาน
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
                value={values.phone}
                onChange={handleValuesChange("phone")}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ เบอร์โทรศัพท์
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Line</Form.Label>
              <Form.Control 
              required 
              type="text" 
              placeholder="Line" 
              value={values.line}
              onChange={handleValuesChange("line")}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ Line
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Facebook</Form.Label>
              <Form.Control 
              required 
              type="text" 
              placeholder="Facebook" 
              value={values.facebook}
              onChange={handleValuesChange("facebook")}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ Facebook
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Instagram</Form.Label>
              <Form.Control 
              required 
              type="text" 
              placeholder="Instagram" 
              value={values.instagram}
              onChange={handleValuesChange("instagram")}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ Instagram
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3 boxinputAgreeFl">
              <Form.Check
                required
                label="ฉันยอมรับข้อตกลงและเงื่อนไขการใช้ JobMaiFair"
                feedback="คุณต้องยอมรับข้อตกลงและเงื่อนไขการใช้งาน JobMaiFair ก่อน"
                feedbackType="invalid"
              />
            </Form.Group>
          </Row>
          <div className="d-grid gap-2 btn-color">
            <Button
              type="submit"
              className="btn btn-lg color spacing-top10"
            >
              สมัครสมาชิก
            </Button>
          </div>
          <Row>
            <Col>
              <p className="Loginforgot-password">
                ลืม
                <Link to="/Forgetpassword">
                  <a href="#"> รหัสผ่าน?</a>
                </Link>
              </p>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}
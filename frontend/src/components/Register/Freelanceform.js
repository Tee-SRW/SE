import React, { useState } from "react";
import "./Freelanceform.css";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-grid-system";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";
import InputMask from "react-input-mask";
import axios from '../../api/axios-signup';

export default function Freelance() {
  const history = useHistory();

  const [valuesSignupfreelance, setvaluesSignupfreelance] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    line: "",
    facebook: "",
    instagram: ""
  });

  const handlevaluesSignupfreelanceChange = (prop) => (event) => {
    setvaluesSignupfreelance({ ...valuesSignupfreelance, [prop]: event.target.value });
  };

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    event.preventDefault();

    const signUptoFreelance = {
      "id": valuesSignupfreelance.id,                        //Need from Login
      "firstname": valuesSignupfreelance.firstname,
      "lastname": valuesSignupfreelance.lastname,
      "email": valuesSignupfreelance.email,
      "phone": valuesSignupfreelance.phone,
      "profileuser": valuesSignupfreelance.profileuser,     //Need from Login
      "line": valuesSignupfreelance.line,
      "facebook": valuesSignupfreelance.facebook,
      "instagram": valuesSignupfreelance.instagram,
    };

    axios.put(`/updatefreelance`, signUptoFreelance)
      .then(res => {
        console.log(res);
        console.log(res.data);
        if (res.data === "Complete") {
          alert("สมัครเป็นฟรีแลนซ์สำเร็จ")
          history.push("/Profilefreelance")
        } else if (res.data === "Fail") {
          alert("***สมัครเป็นฟรีแลนซ์ไม่สำเร็จ***")
        }
      }).catch(err => {
        alert("***สมัครเป็นฟรีแลนซ์ไม่สำเร็จ***")
      })
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
                value={valuesSignupfreelance.firstname}
                onChange={handlevaluesSignupfreelanceChange("firstname")}
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
                value={valuesSignupfreelance.lastname}
                onChange={handlevaluesSignupfreelanceChange("lastname")}
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
                value={valuesSignupfreelance.email}
                onChange={handlevaluesSignupfreelanceChange("email")}
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
                className="form-control"
                placeholder="xxx-xxx-xxxx"
                mask="999-999-9999"
                value={valuesSignupfreelance.phone}
                onChange={handlevaluesSignupfreelanceChange("phone")}
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
                value={valuesSignupfreelance.line}
                onChange={handlevaluesSignupfreelanceChange("line")}
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
                value={valuesSignupfreelance.facebook}
                onChange={handlevaluesSignupfreelanceChange("facebook")}
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
                value={valuesSignupfreelance.instagram}
                onChange={handlevaluesSignupfreelanceChange("instagram")}
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
/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import "./Signupform.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Container, Row, Col } from "react-grid-system";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

const eye = <FontAwesomeIcon icon={faEye} />;
const eye2 = <FontAwesomeIcon icon={faEyeSlash} />;

export default function Signupform(props) {

  const [values, setValues] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    showPassword: false,
  });
  const [values2, setValues2] = React.useState({
    password2: "",
    showPassword2: false,
  });

  function handleClickShowPassword() {
    setValues({ ...values, showPassword: !values.showPassword });
  }
  function handleClickShowPassword2() {
    setValues2({ ...values2, showPassword2: !values2.showPassword2 });
  }

  const handleValuesChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setValues2({ ...values2, [prop]: event.target.value });
  };

  const [validated, setValidated] = useState(false);

  const baseUsl = "http://203.170.190.226:8080"

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (values.password !== values2.password2) {
      event.preventDefault();
      event.stopPropagation();
      alert("รหัสไม่ตรงกันแก้ด้วย")
    }
    setValidated(true);
    event.preventDefault();

    const createuser = {
      "firstname": values.firstname,
      "lastname": values.lastname,
      "email": values.email,
      "password": values.password,
      "phone": values.phone
    };

    axios.post(`${baseUsl}/createuser`, { createuser })
      .then(res => {
        console.log(createuser);
        console.log(res);
        console.log(res.data);
      })
      
  };


  return (
    <div className="Signupform-outer">
      <div className="Signupform-inner">
        <h3>สมัครสมาชิก</h3>
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
              <Form.Label>อีเมล</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="อีเมล"
                value={values.email}
                onChange={handleValuesChange("email")}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ อีเมล
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>รหัสผ่าน</Form.Label>
              <div className="box__password">
                <Form.Control
                  required
                  type={values.showPassword ? "text" : "password"}
                  placeholder="รหัสผ่าน"
                  onChange={handleValuesChange("password")}
                  value={values.password}
                />
                <IconButton onClick={handleClickShowPassword}>
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </div>
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ รหัสผ่าน
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>ยืนยันรหัสผ่าน</Form.Label>
              <div className="box__password">
                <Form.Control
                  required
                  type={values2.showPassword2 ? "text" : "password"}
                  placeholder="รหัสผ่าน"
                  onChange={handleValuesChange("password2")}
                  value={values2.password2}
                />
                <IconButton onClick={handleClickShowPassword2}>
                  {values2.showPassword2 ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </div>
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ ยืนยันรหัสผ่าน
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

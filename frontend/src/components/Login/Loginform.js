import React, { useState } from "react";
import style from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "./Loginform.css";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Container, Row, Col } from "react-grid-system";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

export default function Loginform() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false
  });
  
  function handleClickShowPassword() {
    setValues({ ...values, showPassword: !values.showPassword });
  }

  const handlePasswordChange = (prop) => (event) => {
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
  };


  return (
    <div className="Loginform-outer">
      <div className="Loginform-inner">
        <h3>เข้าสู่ระบบ</h3>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>อีเมล</Form.Label>
              <Form.Control required type="text" placeholder="อีเมล" />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ อีเมล/เบอร์โทรศัพท์
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row ClassName="spacing-top10">
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>รหัสผ่าน</Form.Label>
              <div className="box__password">
                <Form.Control
                  required
                  type={values.showPassword ? "text" : "password"}
                  placeholder="รหัสผ่าน"
                  onChange={handlePasswordChange("password")}
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
          <div className="form-group spacing-top ">
            <div className="custom-control custom-checkbox spacing-top10 ">
              <input
                type="checkbox"
                className="custom-control-input spacing-right "
                id="customCheck1"
              />
              <label
                className="custom-control-label spacing-top"
                htmlFor="customCheck1"
              >
                จดจำฉัน
              </label>
            </div>
          </div>

          <div className="d-grid gap-2 btn-color">
            <Button type="submit" className="btn btn-lg color spacing-top10">
              เข้าสู่ระบบ
            </Button>
          </div>

          <Row>
            <Col>
              <p className="Loginhaveaccount">
                ไม่มีบัญชี
                <Link to="/ChooseCreate">
                  <a href="#"> ใช่ไหม?</a>
                </Link>
              </p>
            </Col>
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

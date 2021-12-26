import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "./Loginform.css";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Row, Col } from "react-grid-system";
import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router-dom';
import axios from '../../api/axios-login';
// import style from "react";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import InputGroup from "react-bootstrap/InputGroup";

export default function Loginform(props) {
  const history = useHistory();
  const [valuesLogin, setvaluesLogin] = React.useState({
    email: "",
    password: "",
    showPassword: false
  });

  function handleClickShowPassword() {
    setvaluesLogin({ ...valuesLogin, showPassword: !valuesLogin.showPassword });
  }

  const handlevaluesLoginChange = (prop) => (event) => {
    setvaluesLogin({ ...valuesLogin, [prop]: event.target.value });
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

    const user = {
      "email": valuesLogin.email,
      "password": valuesLogin.password
    };

    axios.post(`/login`, user)
      .then(res => {
        console.log(user);
        console.log(res);
        console.log(res.data);
        if (res.data.status === "ถูกต้อง") {
          alert("เข้าสู่ระบบสำเร็จ")
          const userData = {
            id: res.data.id,
            type: res.data.typenumber_user
          }
          // console.log(userData);
          props.onUpdateDataUser(userData)
          history.push("/")
        } else if (res.data.status === "ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้องอีเมล") {
          alert("ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง")
        }
      }).catch(err => {
        alert("เข้าสู่ระบบไม่สำเร็จ")
      })
  };


  return (
    <div className="Loginform-outer">
      <div className="Loginform-inner">
        <h3>เข้าสู่ระบบ</h3>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>อีเมล</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="อีเมล"
                onChange={handlevaluesLoginChange("email")}
                value={valuesLogin.email}
              />
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
                  type={valuesLogin.showPassword ? "text" : "password"}
                  placeholder="รหัสผ่าน"
                  onChange={handlevaluesLoginChange("password")}
                  value={valuesLogin.password}
                />
                <IconButton onClick={handleClickShowPassword}>
                  {valuesLogin.showPassword ? <Visibility /> : <VisibilityOff />}
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

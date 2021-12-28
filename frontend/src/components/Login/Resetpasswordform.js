import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Resetpasswordform.css";
import { Row, Col } from "react-grid-system";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useHistory } from 'react-router-dom';

export default function Resetpasswordform() {
  const history = useHistory();
  const [valuesResetPw, setvaluesResetPw] = React.useState({
    password: "",
    showPassword: false,
  });
  const [valuesResetPw2, setvaluesResetPw2] = React.useState({
    password2: "",
    showPassword2: false,
  });

  function handleClickShowPassword() {
    setvaluesResetPw({ ...valuesResetPw, showPassword: !valuesResetPw.showPassword });
  }
  function handleClickShowPassword2() {
    setvaluesResetPw2({ ...valuesResetPw2, showPassword2: !valuesResetPw2.showPassword2 });
  }

  const handlePasswordChange = (prop) => (event) => {
    setvaluesResetPw({ ...valuesResetPw, [prop]: event.target.value });
    setvaluesResetPw2({ ...valuesResetPw2, [prop]: event.target.value });
  };

  const [validated, setValidated] = useState(false);
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (valuesResetPw.password !== valuesResetPw2.password2) {
      event.preventDefault();
      event.stopPropagation();
      alert("รหัสไม่ตรงกันแก้ด้วย")
    }
    setValidated(true);
    if(form.checkValidity() === true) {
      history.push("/Login")
    }
  };


  return (
    <div className="Resetpasswordform-outer">
      <div className="Resetpasswordform-inner">
        <h3>รีเซ็ตรหัสผ่าน</h3>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>รหัสผ่านใหม่</Form.Label>
              <div className="box__password">
                <Form.Control
                  required
                  type={valuesResetPw.showPassword ? "text" : "password"}
                  placeholder="รหัสผ่าน"
                  onChange={handlePasswordChange("password")}
                  value={valuesResetPw.password}
                />
                <IconButton onClick={handleClickShowPassword}>
                  {valuesResetPw.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </div>
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ รหัสผ่านใหม่
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>ยืนยันรหัสผ่านใหม่</Form.Label>
              <div className="box__password">
                <Form.Control
                  required
                  type={valuesResetPw2.showPassword2 ? "text" : "password"}
                  placeholder="รหัสผ่าน"
                  onChange={handlePasswordChange("password2")}
                  value={valuesResetPw2.password2}
                />
                <IconButton onClick={handleClickShowPassword2}>
                  {valuesResetPw2.showPassword2 ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </div>
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

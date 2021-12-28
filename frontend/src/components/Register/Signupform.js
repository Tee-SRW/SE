import React, { useState } from "react";
import "./Signupform.css";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-grid-system";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import InputLabel from "@material-ui/core/InputLabel";
// import InputGroup from "react-bootstrap/InputGroup";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import Input from "@material-ui/core/Input";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';
import axios from '../../api/axios-signup';


export default function Signupform() {
  const history = useHistory();
  const [valuesSignup, setvaluesSignup] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    showPassword: false,
  });
  const [valuesSignup2, setvaluesSignup2] = React.useState({
    password2: "",
    showPassword2: false,
  });

  function handleClickShowPassword() {
    setvaluesSignup({ ...valuesSignup, showPassword: !valuesSignup.showPassword });
  }
  function handleClickShowPassword2() {
    setvaluesSignup2({ ...valuesSignup2, showPassword2: !valuesSignup2.showPassword2 });
  }

  const handlevaluesSignupChange = (prop) => (event) => {
    setvaluesSignup({ ...valuesSignup, [prop]: event.target.value });
    setvaluesSignup2({ ...valuesSignup2, [prop]: event.target.value });
  };

  const [validated, setValidated] = useState(false);


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (valuesSignup.password !== valuesSignup2.password2) {
      event.preventDefault();
      event.stopPropagation();
      alert("รหัสไม่ตรงกันแก้ด้วย")
    }
    setValidated(true);
    event.preventDefault();

    const createuser = {
      "firstname": valuesSignup.firstname,
      "lastname": valuesSignup.lastname,
      "email": valuesSignup.email,
      "password": valuesSignup.password,
      "phone": valuesSignup.phone
    };

    axios.post(`/createuser`, createuser)
      .then(res => {
        console.log(res);
        console.log(res.data);
        if (res.data === "Complete" || res.data === "สำเร็จ" || res.data === "Complete!") {
          alert("สมัครสมาขิกสำเร็จ")
          history.push("/Login")
        } else if (res.data === "Fail") {
          alert("***สมัครสมาขิกไม่สำเร็จ***")
        }
      }).catch(err => {
        alert("***สมัครสมาขิกไม่สำเร็จ***")
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
                value={valuesSignup.firstname}
                onChange={handlevaluesSignupChange("firstname")}
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
                value={valuesSignup.lastname}
                onChange={handlevaluesSignupChange("lastname")}
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
                value={valuesSignup.email}
                onChange={handlevaluesSignupChange("email")}
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
                  type={valuesSignup.showPassword ? "text" : "password"}
                  placeholder="รหัสผ่าน"
                  onChange={handlevaluesSignupChange("password")}
                  value={valuesSignup.password}
                />
                <IconButton onClick={handleClickShowPassword}>
                  {valuesSignup.showPassword ? <Visibility /> : <VisibilityOff />}
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
                  type={valuesSignup2.showPassword2 ? "text" : "password"}
                  placeholder="รหัสผ่าน"
                  onChange={handlevaluesSignupChange("password2")}
                  value={valuesSignup2.password2}
                />
                <IconButton onClick={handleClickShowPassword2}>
                  {valuesSignup2.showPassword2 ? <Visibility /> : <VisibilityOff />}
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
                className="form-control"
                placeholder="xxx-xxx-xxxx"
                mask="999-999-9999"
                value={valuesSignup.phone}
                onChange={handlevaluesSignupChange("phone")}
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
                   รหัสผ่าน?
                </Link>
              </p>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

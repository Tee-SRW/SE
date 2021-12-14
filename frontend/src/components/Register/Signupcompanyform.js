import React, { useState } from "react";
import "./Signupcompanyform.css";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-grid-system";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Input from "@material-ui/core/Input";
const eye = <FontAwesomeIcon icon={faEye} />;
const eye2 = <FontAwesomeIcon icon={faEyeSlash} />;

export default function Signupform(props) {
  const [values, setValues] = React.useState({
    password: "",
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
    <div className="Signupform-outer">
      <div className="Signupform-inner">
        <h3>สมัครสมาชิก</h3>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>ชื่อบริษัท</Form.Label>
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
            <Form.Group as={Col} md="6" controlId="validationCustom03">
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

          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>ยืนยันรหัสผ่าน</Form.Label>
              <div className="box__password">
                <Form.Control
                  required
                  type={values2.showPassword2 ? "text" : "password"}
                  placeholder="รหัสผ่าน"
                  onChange={handlePasswordChange("password2")}
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
                className="form-control"
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
            <Form.Group as={Col} md="4" controlId="validationCustom06">
              <Form.Label>ที่อยู่</Form.Label>
              <Form.Control required type="text" placeholder="ที่อยู่" />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ ที่อยู่
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom07">
              <Form.Label>ตำบล / แขวง</Form.Label>
              <Form.Control required type="text" placeholder="ตำบล / แขวง" />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ ตำบล / แขวง
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom08">
              <Form.Label>อำเภอ / เขต</Form.Label>
              <Form.Control required type="text" placeholder="อำเภอ / เขต" />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ อำเภอ / เขต
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom09">
              <Form.Label>จังหวัด</Form.Label>
              <Form.Control required type="text" placeholder="จังหวัด" />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ จังหวัด
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom10">
              <Form.Label>รหัสไปรษณีย์</Form.Label>
              <InputMask
                required
                className="form-control"
                placeholder="xxxxx"
                mask="99999"
                onChange={props.onChange}
                value={props.value}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ ยืนยันรหัสผ่าน
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
            <Button type="submit" className="btn btn-lg color spacing-top10">
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

import React, { useState } from "react";
import "./Signupcompanyform.css";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-grid-system";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";
import InputMask from "react-input-mask";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import axios from '../../api/axios-signup';

export default function Signupcompanyform() {
  const history = useHistory();

  const [valuesSignupcompany, setvaluesSignupcompany] = React.useState({
    companyname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    subdistrict: "",
    district: "",
    province: "",
    postcode: "",
    showPassword: false,
  });
  const [valuesSignupcompany2, setvaluesSignupcompany2] = React.useState({
    password2: "",
    showPassword2: false,
  });

  function handleClickShowPassword() {
    setvaluesSignupcompany({ ...valuesSignupcompany, showPassword: !valuesSignupcompany.showPassword });
  }
  function handleClickShowPassword2() {
    setvaluesSignupcompany2({ ...valuesSignupcompany2, showPassword2: !valuesSignupcompany2.showPassword2 });
  }

  const handlevaluesSignupcompanyChange = (prop) => (event) => {
    setvaluesSignupcompany({ ...valuesSignupcompany, [prop]: event.target.value });
    setvaluesSignupcompany2({ ...valuesSignupcompany2, [prop]: event.target.value });
  };

  const [validated, setValidated] = useState(false);


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (valuesSignupcompany.password !== valuesSignupcompany2.password2) {
      event.preventDefault();
      event.stopPropagation();
      alert("รหัสไม่ตรงกันแก้ด้วย")
    }
    setValidated(true);
    event.preventDefault();

    const company = {
      "companyname": valuesSignupcompany.companyname,
      "companyemail": valuesSignupcompany.email,
      "companyphone": valuesSignupcompany.phone,
      "address": valuesSignupcompany.address,
      "subdistrict": valuesSignupcompany.subdistrict,
      "district": valuesSignupcompany.district,
      "province": valuesSignupcompany.province,
      "postcode": valuesSignupcompany.postcode,
      "password": valuesSignupcompany.password
    };
    if (validated === true) {
    axios.post(`/createcompany`, company)
      .then(res => {
        console.log(company);
        console.log(res);
        console.log(res.data);
        if (res.data === "Complete") {
          alert("สมัครบริษัทสมาขิกสำเร็จ")
          history.push("/Login")
        } else if (res.data === "Fail") {
          alert("***สมัครบริษัทสมาขิกไม่สำเร็จ***")
        }
      }).catch(err => {
        alert("***สมัครบริษัทสมาขิกไม่สำเร็จ err***")
      })
    }
  };


  return (
    <div className="Signupform-outer">
      <div className="Signupform-inner">
        <h3>สมัครสมาชิก</h3>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>ชื่อบริษัท</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="ชื่อบริษัท"
                value={valuesSignupcompany.companyname}
                onChange={handlevaluesSignupcompanyChange("companyname")}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ ชื่อบริษัท
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
                value={valuesSignupcompany.email}
                onChange={handlevaluesSignupcompanyChange("email")}
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
                  type={valuesSignupcompany.showPassword ? "text" : "password"}
                  placeholder="รหัสผ่าน"
                  onChange={handlevaluesSignupcompanyChange("password")}
                  value={valuesSignupcompany.password}
                />
                <IconButton onClick={handleClickShowPassword}>
                  {valuesSignupcompany.showPassword ? <Visibility /> : <VisibilityOff />}
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
                  type={valuesSignupcompany2.showPassword2 ? "text" : "password"}
                  placeholder="รหัสผ่าน"
                  onChange={handlevaluesSignupcompanyChange("password2")}
                  value={valuesSignupcompany2.password2}
                />
                <IconButton onClick={handleClickShowPassword2}>
                  {valuesSignupcompany2.showPassword2 ? <Visibility /> : <VisibilityOff />}
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
                value={valuesSignupcompany.phone}
                onChange={handlevaluesSignupcompanyChange("phone")}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ เบอร์โทรศัพท์
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom06">
              <Form.Label>ที่อยู่</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="ที่อยู่"
                value={valuesSignupcompany.address}
                onChange={handlevaluesSignupcompanyChange("address")}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ ที่อยู่
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom07">
              <Form.Label>ตำบล / แขวง</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="ตำบล / แขวง"
                value={valuesSignupcompany.subdistrict}
                onChange={handlevaluesSignupcompanyChange("subdistrict")}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ ตำบล / แขวง
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom08">
              <Form.Label>อำเภอ / เขต</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="อำเภอ / เขต"
                value={valuesSignupcompany.district}
                onChange={handlevaluesSignupcompanyChange("district")}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ อำเภอ / เขต
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom09">
              <Form.Label>จังหวัด</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="จังหวัด"
                value={valuesSignupcompany.province}
                onChange={handlevaluesSignupcompanyChange("province")}
              />
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
                value={valuesSignupcompany.postcode}
                onChange={handlevaluesSignupcompanyChange("postcode")}
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
            <Button type="submit" className="btn btn-lg color spacing-top10"  >
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

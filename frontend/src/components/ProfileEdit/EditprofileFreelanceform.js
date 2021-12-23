import React, { useState } from "react";
import "./EditprofileFreelanceform.css";
import Form from "react-bootstrap/Form";
import InputMask from "react-input-mask";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-grid-system";
import axios from "axios";
const baseUsl = "http://203.170.190.226:8080/";

export default function EditprofileFreelance(props) {
  const [values, setValues] = React.useState({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    profile_user: "",
    line: "",
    facebook: "",
    instagram: "",
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
    event.preventDefault();

    const editprofilefreelance = {
      "id": values.id,
      "firstname": values.firstname,
      "lastname": values.lastname,
      "email": values.email,
      "password": values.password,
      "phone": values.phone,
      "profile_user": values.profile_user,
      "line": values.line,
      "facebook": values.facebook,
      "instagram": values.instagram,
    };
    axios
      .put(`${baseUsl}/updatefreelance`, { editprofilefreelance })
      .then((res) => {
        console.log(editprofilefreelance);
        console.log(values.id);
        console.log(values.firstname);
        console.log(values.lastname);
        console.log(values.email);
        console.log(values.phone);
        console.log(values.password);
        console.log(values.profile_user);
        console.log(values.line);
        console.log(values.facebook);
        console.log(values.instagram);
        console.log(res);
        console.log(res.data);
      });
      if(form.checkValidity() === true) {
        history.push("/Profilefreelance")
      }
  };
  const history = useHistory();
  return (
    <div className="EditprofileFreelanceform-outer">
      <div className="EditprofileFreelanceform-inner">
        <h3>โปรไฟล์ของฉัน</h3>
        <div className="d-grid2">
          <img
            src=" "
            className="img-fluid rounded-circle image__freelance"
            alt="Profile Admin"
          ></img>
        </div>
        <div className="d-grid2 spacing-top btn-fontblack">
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
              <Form.Label>ชื่อจริง</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="ชื่อจริง"
                name="firstname"
                onChange={handleValuesChange("firstname")}
                value={values.firstname}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ ชื่อจริง
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
                name="lastname"
                onChange={handleValuesChange("lastname")}
                value={values.lastname}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ นามสกุล
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>อีเมลที่ติดต่อได้</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="อีเมลที่ติดต่อได้"
                name="email"
                onChange={handleValuesChange("email")}
                value={values.email}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ อีเมลที่ติดต่อได้
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>เบอร์โทรศัพท์ที่ติดต่อได้</Form.Label>
              <InputMask
                required
                className="form-control spacing-top"
                placeholder="เบอร์โทรศัพท์ที่ติดต่อได้"
                mask="999-999-9999"
                name="phone"
                onChange={handleValuesChange("phone")}
                value={values.phone}
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
                name="line"
                onChange={handleValuesChange("line")}
                value={values.line}
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
                name="facebook"
                onChange={handleValuesChange("facebook")}
                value={values.facebook}
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
                name="instagram"
                onChange={handleValuesChange("instagram")}
                value={values.instagram}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ Instagram
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <div className="d-grid gap-2 btn-color">
            <Button type="submit" className="btn btn-lg color spacing-top10" >
              บันทึก
            </Button>
          </div>
          <div className="d-grid gap-2 btn-color">
            <Button type="submit" className="btn btn-lg color spacing-top10 "onClick={() => history.push("/Profilefreelance")} >
              ย้อนกลับ
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

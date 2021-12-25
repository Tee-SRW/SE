import React, { useState } from "react";
import "./EditprofileFreelanceform.css";
import Form from "react-bootstrap/Form";
import InputMask from "react-input-mask";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-grid-system";
import axios from "axios";
const baseUsl = "http://203.170.190.226:8080/";

export default function EditprofileFreelance(props) {
  const [valuesEditprofilefreelance, setvaluesEditprofilefreelance] = React.useState({
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
  const handlevaluesEditprofilefreelanceChange = (prop) => (event) => {
    setvaluesEditprofilefreelance({ ...valuesEditprofilefreelance, [prop]: event.target.value });
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
      "id": valuesEditprofilefreelance.id,
      "firstname": valuesEditprofilefreelance.firstname,
      "lastname": valuesEditprofilefreelance.lastname,
      "email": valuesEditprofilefreelance.email,
      "password": valuesEditprofilefreelance.password,
      "phone": valuesEditprofilefreelance.phone,
      "profile_user": valuesEditprofilefreelance.profile_user,
      "line": valuesEditprofilefreelance.line,
      "facebook": valuesEditprofilefreelance.facebook,
      "instagram": valuesEditprofilefreelance.instagram,
    };
    axios
      .put(`${baseUsl}/updatefreelance`, { editprofilefreelance })
      .then((res) => {
        console.log(editprofilefreelance);
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
            className="img-fluid rounded-circle "
            alt=""
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
                onChange={handlevaluesEditprofilefreelanceChange("firstname")}
                value={valuesEditprofilefreelance.firstname}
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
                onChange={handlevaluesEditprofilefreelanceChange("lastname")}
                value={valuesEditprofilefreelance.lastname}
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
                onChange={handlevaluesEditprofilefreelanceChange("email")}
                value={valuesEditprofilefreelance.email}
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
                onChange={handlevaluesEditprofilefreelanceChange("phone")}
                value={valuesEditprofilefreelance.phone}
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
                onChange={handlevaluesEditprofilefreelanceChange("line")}
                value={valuesEditprofilefreelance.line}
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
                onChange={handlevaluesEditprofilefreelanceChange("facebook")}
                value={valuesEditprofilefreelance.facebook}
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
                onChange={handlevaluesEditprofilefreelanceChange("instagram")}
                value={valuesEditprofilefreelance.instagram}
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

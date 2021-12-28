import React, { useEffect, useState, useContext } from "react";
import "./Editprofileform.css";
import Form from "react-bootstrap/Form";
import InputMask from "react-input-mask";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-grid-system";
import axios from "../../api/axios-login";
import DataUser from "../../DataUser/DataUser";

export default function EditprofileFreelance(props) {
  const history = useHistory();
  const dataUser = useContext(DataUser);
  const [valuesEditprofilefreelance, setvaluesEditprofilefreelance] =
    React.useState({
      id: dataUser.userID,
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      profile_user: "",
      line: "",
      facebook: "",
      instagram: "",
    });
  const handlevaluesEditprofilefreelanceChange = (prop) => (event) => {
    setvaluesEditprofilefreelance({
      ...valuesEditprofilefreelance,
      [prop]: event.target.value,
    });
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

    axios.put(`/updatefreelance`, valuesEditprofilefreelance).then((res) => {
      console.log(valuesEditprofilefreelance);
      console.log(res);
      console.log(res.data);
    });
    if (form.checkValidity() === true) {
      history.push("/Profilefreelance");
    }
  };
  const sendUserID = {
    id: dataUser.userID,
  };
  useEffect(() => {
    axios.post(`/getupdatefreelance`, sendUserID).then((res) => {
      console.log(sendUserID);
      console.log(res);
      console.log(res.data);
      let beforeEditto = {
        id: dataUser.userID,
        firstname: res.data.firstname,
        lastname: res.data.lastname,
        email: res.data.email,
        phone: res.data.phone,
        profile_user: res.data.profileuser,
        line: res.data.line,
        facebook: res.data.facebook,
        instagram: res.data.instagram,
      };
      setvaluesEditprofilefreelance(beforeEditto);
    });
  }, []);
  console.log(valuesEditprofilefreelance);
  return (
    <div className="Editprofileform-outer">
      <div className="Editprofileform-inner">
        <h3>โปรไฟล์ของฉัน</h3>
        <div className="d-grid2">
          <img src=" " className="img-fluid rounded-circle " alt=""></img>
        </div>
        <div className="d-grid2 spacing-top btn-fontblack ">
          <button type="submit" className="btn btn-lg bottomprofileprofile ">
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
                className="form-control"
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
            <Button type="submit" className="btn btn-lg color spacing-top10">
              บันทึก
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

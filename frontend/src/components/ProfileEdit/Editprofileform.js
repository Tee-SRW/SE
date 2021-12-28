import React, { useState, useEffect } from "react";
import "./Editprofileform.css";
import Form from "react-bootstrap/Form";
import InputMask from "react-input-mask";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-grid-system";
import { useHistory } from "react-router-dom";
import axios from "../../api/axios-login";
import DataUser from "../../DataUser/DataUser";
import { useContext } from "react";

export default function Editprofileform(props) {
  const dataUser = useContext(DataUser);

  const history = useHistory();

  const [validated, setValidated] = useState(false);

  const handlevaluesEditprofileChange = (prop) => (event) => {
    setvaluesEditprofile({ ...valuesEditprofile, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    event.preventDefault();

    axios.put(`/updateuser`, valuesEditprofile).then((res) => {
      console.log(valuesEditprofile);
      console.log(res);
      console.log(res.data);
    });
    if (form.checkValidity() === true) {
      history.push("/Profile");
    }
  };

  const sendUserID = {
    id: dataUser.userID,
  };

  const [valuesEditprofile, setvaluesEditprofile] = useState({
    id: dataUser.userID,
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    profile_user: "",
  });
  useEffect(() => {
    axios.post(`/getupdateuser`, sendUserID).then((res) => {
      console.log(sendUserID);
      console.log(res);
      console.log(res.data);

      let beforeEditto = {
        id: dataUser.userID,
        firstname: res.data.firstname,
        lastname: res.data.lastname,
        email: res.data.email,
        phone: res.data.phone,
        profile_user: res.data.profile_user,
      };
      setvaluesEditprofile(beforeEditto);
    });
  }, []);
  console.log(valuesEditprofile);

  return (
    <div className="Editprofileform-outer">
      <div className="Editprofileform-inner">
        <h3>โปรไฟล์ของฉัน</h3>
        <div className="d-grid2">
          <img src=" " className="img-fluid rounded-circle" alt=""></img>
        </div>

        <div className="d-grid2 gap-2 spacing-top btn-fontblack">
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
              <Form.Label>ชื่อ</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="ชื่อ"
                name="firstname"
                onChange={handlevaluesEditprofileChange("firstname")}
                value={valuesEditprofile.firstname}
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
                name="lastname"
                onChange={handlevaluesEditprofileChange("lastname")}
                value={valuesEditprofile.lastname}
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
                name="email"
                onChange={handlevaluesEditprofileChange("email")}
                value={valuesEditprofile.email}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ อีเมล
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
                name="phone"
                onChange={handlevaluesEditprofileChange("phone")}
                value={valuesEditprofile.phone}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ เบอร์โทรศัพท์
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

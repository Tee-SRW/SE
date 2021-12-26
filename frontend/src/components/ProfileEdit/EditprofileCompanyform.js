import React, { useEffect, useState, useContext } from "react";
import "./Editprofileform.css";
import Form from "react-bootstrap/Form";
import InputMask from "react-input-mask";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { Row, Col } from "react-grid-system";
import axios from "../../api/axios-login";
import DataUser from "../../DataUser/DataUser";

export default function EditprofileCompanyform(props) {
  const history = useHistory();
  const dataUser = useContext(DataUser);
  const [valuesEditprofilecompany, setvaluesEditprofilecompany] =
    React.useState({
      id: dataUser.userID,
      companyname: "",
      companyemail: "",
      companyPhone: "",
      address: "",
      subdistrict: "",
      district: "",
      province: "",
      postcode: "",
      profileCompany: "",
    });
  const handlevaluesEditprofilecompanyChange = (prop) => (event) => {
    setvaluesEditprofilecompany({
      ...valuesEditprofilecompany,
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

    // const editprofilecompany = {
    //   "id": valuesEditprofilecompany.id,
    //   "companyname": valuesEditprofilecompany.companyname,
    //   "companyemail": valuesEditprofilecompany.companyemail,
    //   "companyPhone": valuesEditprofilecompany.companyPhone,
    //   "address": valuesEditprofilecompany.address,
    //   "subdistrict": valuesEditprofilecompany.subdistrict,
    //   "district": valuesEditprofilecompany.district,
    //   "province": valuesEditprofilecompany.province,
    //   "postcode": valuesEditprofilecompany.postcode,
    //   "profileCompany": valuesEditprofilecompany.profileCompany,
    // };
    axios.put(`/updatecompany`, { valuesEditprofilecompany }).then((res) => {
      console.log(valuesEditprofilecompany);
      console.log(res);
      console.log(res.data);
    });
    if (form.checkValidity() === true) {
      history.push("/Profilecompany");
    }
  };
  const sendUserID = {
    id: dataUser.userID,
  };
  useEffect(() => {
    console.log("Wattttttt");
    axios.post(`/getupdatecompany`, sendUserID).then((res) => {
      console.log(sendUserID);
      console.log(res);
      console.log(res.data);
      let beforeEditto = {
        id: dataUser.userID,
        companyname: res.data.companyname,
        companyemail: res.data.companyemail,
        companyPhone: res.data.companyphone,
        address: res.data.address,
        subdistrict: res.data.subdistrict,
        district: res.data.district,
        province: res.data.province,
        postcode: res.data.postcode,
        profileCompany: res.data.profileCompany,
      };
      setvaluesEditprofilecompany(beforeEditto);
    });
  }, []);
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
                placeholder="ชื่อบริษัท"
                name="companyname"
                onChange={handlevaluesEditprofilecompanyChange("companyname")}
                value={valuesEditprofilecompany.companyname}
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
                name="companyemail"
                onChange={handlevaluesEditprofilecompanyChange("companyemail")}
                value={valuesEditprofilecompany.companyemail}
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
                name="companyphone"
                onChange={handlevaluesEditprofilecompanyChange("companyPhone")}
                value={valuesEditprofilecompany.companyPhone}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ เบอร์โทรศัพท์
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>ที่อยู่</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="ที่อยู่"
                name="address"
                onChange={handlevaluesEditprofilecompanyChange("address")}
                value={valuesEditprofilecompany.address}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ ที่อยู่
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>ตำบล / แขวง</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="ตำบล / แขวง"
                name="subdistrict"
                onChange={handlevaluesEditprofilecompanyChange("subdistrict")}
                value={valuesEditprofilecompany.subdistrict}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ ตำบล / แขวง
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>อำเภอ / เขต</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="อำเภอ / เขต"
                name="district"
                onChange={handlevaluesEditprofilecompanyChange("district")}
                value={valuesEditprofilecompany.district}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ อำเภอ / เขต
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>จังหวัด</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="จังหวัด"
                name="province"
                onChange={handlevaluesEditprofilecompanyChange("province")}
                value={valuesEditprofilecompany.province}
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
                value={valuesEditprofilecompany.postcode}
                onChange={handlevaluesEditprofilecompanyChange("postcode")}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ ยืนยันรหัสผ่าน
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

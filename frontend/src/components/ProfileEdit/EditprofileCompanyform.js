import React, { useState } from "react";
import "./EditprofileCompanyform.css";
import Form from "react-bootstrap/Form";
import InputMask from "react-input-mask";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-grid-system";
import axios from "axios";
const baseUsl = "http://203.170.190.226:8080/";
export default function EditprofileCompanyform(props) {
  const [values, setValues] = React.useState({
    ID: "",
    companyname: "",
    companyemail: "",
    CompanyPhone: "",
    Address: "",
    Subdistrict: "",
    District: "",
    Province: "",
    Postcode: "",
    ProfileCompany: "",
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

    const editprofilecompany = {
      "ID": values.ID,
      "companyname": values.companyname,
      "companyemail": values.companyemail,
      "CompanyPhone": values.CompanyPhone,
      "Address": values.Address,
      "Subdistrict": values.Subdistrict,
      "District": values.District,
      "Province": values.Province,
      "Postcode": values.Postcode,
      "ProfileCompany": values.ProfileCompany,
    };
    axios
      .put(`${baseUsl}/updatecompany`, { editprofilecompany })
      .then((res) => {
        console.log(res.data);
      });
      if(form.checkValidity() === true) {
        history.push("/Profilecompany")
      }
  };
  const history = useHistory();
  return (
    <div className="EditprofileCompanyform-outer">
      <div className="EditprofileCompanyform-inner">
        <h3>โปรไฟล์ของฉัน</h3>
        <div className="d-grid2">
          <img
            src=" "
            className="img-fluid rounded-circle"
            alt="Profile Admin"
          ></img>
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
                onChange={handleValuesChange("companyname")}
                value={values.companyname}
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
                onChange={handleValuesChange("companyemail")}
                value={values.companyemail}
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
                className="form-control spacing-top"
                placeholder="xxx-xxx-xxxx"
                mask="999-999-9999"
                name="Companyphone"
                onChange={handleValuesChange("CompanyPhone")}
                value={values.CompanyPhone}
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
                name="Address"
                onChange={handleValuesChange("Address")}
                value={values.Address}
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
                name="Subdistrict"
                onChange={handleValuesChange("Subdistrict")}
                value={values.Subdistrict}
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
                name="District"
                onChange={handleValuesChange("District")}
                value={values.District}
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
                name="Province"
                onChange={handleValuesChange("Province")}
                value={values.Province}
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
                value={values.Postcode}
                onChange={handleValuesChange("Postcode")}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ ยืนยันรหัสผ่าน
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="gap-2 btn-color">
          <Col>
            <Button
              className="btn color2 shadow1 spacing-top10"
              onClick={() => history.push("/Profilecompany")}
            >
              ยกเลิก
            </Button>
          </Col>
          <Col className="create-work-freelance-buttonSave">
            <Button
              type="submit"
              className="btn color spacing-top10"
            >
              บันทึก
            </Button>
          </Col>
        </Row>
        </Form>
      </div>
    </div>
  );
}

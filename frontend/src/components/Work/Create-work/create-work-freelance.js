import React, { useState, useContext } from "react";
import "./create-work.css";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-grid-system";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import DataUser from "../../../DataUser/DataUser";
import axios from "../../../api/axios-work";



export default function CreateWorkFreelance(props) {
  const dataUser = useContext(DataUser)

  const history = useHistory();
  const [valuesCreateworkfreelance, setvaluesCreateworkfreelance] =
    React.useState({
      typeWorknumber: "",
      namework: "",
      detailwork: "",
      pricepostwork: "",
    });
  const handlevaluesCreateworkfreelanceChange = (prop) => (event) => {
    setvaluesCreateworkfreelance({
      ...valuesCreateworkfreelance,
      [prop]: event.target.value,
    });
  };
  const [validated, setValidated] = useState(false);
  let url = "";
  const geturl = (e) => {
    setSelectedImage(e.target.files[0]);
    url = e.target.files[0].name;
    console.log(url);
  };

  const [selectedImage, setSelectedImage] = useState();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    event.preventDefault();

    const userAddWork = {
      typeWorknumber: Number(valuesCreateworkfreelance.typeWorknumber),
      detailwork: valuesCreateworkfreelance.detailwork,
      userid: Number(dataUser.userID),
      pricepostwork: valuesCreateworkfreelance.pricepostwork,
      namework: valuesCreateworkfreelance.namework,
      imageworkpostfreelance: "imageworkpostfreelancexd",
    };
    
    axios.post(`/addworkFreelance`, userAddWork)
      .then((res) => {
      console.log(userAddWork);
      console.log(res);
      console.log(res.data);
      if (res.data === "Complete!") {
        alert("สร้างงานของคุณสำเร็จ");
        // history.push("/Profilefreelance");
      }
    });

  };
  return (
    <div className="create-work-outer">
      <h3>สร้างงานของฉัน</h3>
      <text>เลือกหมวดหมู่งาน</text>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Select
          size="sm"
          as={Col}
          md="4"
          controlId="validationCustom01"
          value={valuesCreateworkfreelance.typeWorknumber}
          onChange={handlevaluesCreateworkfreelanceChange("typeWorknumber")}
        >
          <option>--------------</option>
          <option value="1">Graphic & Design</option>
          <option value="2">Marketing</option>
          <option value="3">Programming</option>

          {/* <Form.Control.Feedback tooltip type="invalid">
            กรุณาเลือก หมวดหมู่งาน
          </Form.Control.Feedback> */}
        </Form.Select>

        <br />
        <br />
        <Form.Label as={Col} className="text">
          รายละเอียดงาน
        </Form.Label>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>ชื่องาน</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="ชื่องาน"
              name="namework"
              value={valuesCreateworkfreelance.namework}
              onChange={handlevaluesCreateworkfreelanceChange("namework")}
            />
            <Form.Control.Feedback type="invalid">
              โปรดระบุ ชื่องาน
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>อธิบายเพื่มเติมเกี่ยวกับงาน</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="คำอธิบายเพื่มเติม"
              as="textarea"
              rows={5}
              name="description"
              value={valuesCreateworkfreelance.detailwork}
              onChange={handlevaluesCreateworkfreelanceChange("detailwork")}
            />
            <Form.Control.Feedback type="invalid">
              โปรดระบุ คำอธิบายเพื่มเติม
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group md="4" controlId="validationCustom04">
              <Form.Label>ราคาเริ่มต้น</Form.Label>

              <Form.Control
                required
                type="number"
                placeholder="0.00"
                name="minsalary"
                value={valuesCreateworkfreelance.pricepostwork}
                onChange={handlevaluesCreateworkfreelanceChange(
                  "pricepostwork"
                )}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ ราคาเริ่มต้น
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col className="bath2bath">
            <Form.Label>บาท</Form.Label>
          </Col>
        </Row>
        <Form.Group controlId="formFileMultiple" className="mb-3" value={url}>
          <Form.Label>รูปผลงาน</Form.Label>
          <Form.Control type="file" multiple onChange={geturl} />
        </Form.Group>
        <div className="border-list-pic">
          <div className="box-image">
            {selectedImage && (
              <img
                src={URL.createObjectURL(selectedImage)}
                className="img-fluid"
                alt="Thumb"
              />
            )}
          </div>
        </div>
        <Row className="gap-2 btn-color">
          <Col>
            <Button
              className="btn color2 shadow1 spacing-top10"
              onClick={() => history.push("/Profile")}
            >
              ยกเลิก
            </Button>
          </Col>
          <Col className="create-work-freelance-buttonSave">
            <Button type="submit" className="btn color spacing-top10">
              บันทึก
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

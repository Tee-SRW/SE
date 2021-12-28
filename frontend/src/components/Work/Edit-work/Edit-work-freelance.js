import React, { useState } from "react";
import "./edit-work.css";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-grid-system";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

export default function EditWorkFreelanceform(props) {
  const history = useHistory();

  const [valuesEditWfl, setvaluesEditWfl] = React.useState({
    genre: "",
    workname: "",
    description: "",
    minsalary: "",
  });
  const handlevaluesEditWflChange = (prop) => (event) => {
    setvaluesEditWfl({ ...valuesEditWfl, [prop]: event.target.value });
  };

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    console.log(valuesEditWfl.genre);
    console.log(valuesEditWfl.workname);
    console.log(valuesEditWfl.description);
    console.log(valuesEditWfl.minsalary);

    if (form.checkValidity() === true) {
      alert("แก้ไขการสร้างงานของคุณสำเร็จ");
      history.push("/Profilefreelance");
    }
  };
  let url = "";

  const geturl = (e) => {
    setSelectedImage(e.target.files[0]);
    url = e.target.files[0].name;
    console.log(url);
  };
  const [selectedImage, setSelectedImage] = useState();

  // This function will be triggered when the file field change

  // const removeSelectedImage = () => {
  //   setSelectedImage();
  // };

  return (
    <div className="edit-work-outer">
      <h3>แก้ไขงานของฉัน</h3>
      <text>เลือกหมวดหมู่งาน</text>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Select
          size="sm"
          as={Col}
          md="4"
          controlId="validationCustom01"
          value={valuesEditWfl.genre}
          onChange={handlevaluesEditWflChange("genre")}
        >
          <option>--------------</option>
          <option value="Graphic & Design">Graphic & Design</option>
          <option value="Marketing">Marketing</option>
          <option value="Programming">Programming</option>
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
              name="workname"
              onChange={handlevaluesEditWflChange("workname")}
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
              onChange={handlevaluesEditWflChange("description")}
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
                onChange={handlevaluesEditWflChange("minsalary")}
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
        <Form.Group
          controlId="formFileMultiple"
          className="mb-3 spacing-top"
          value={url}
        >
          <Form.Label>รูปผลงาน</Form.Label>
          <Form.Control type="file" multiple onChange={geturl} />
        </Form.Group>

        <div className="border-list-pic">
          <div className="box-image">
            {selectedImage && (
              <img
                src={URL.editObjectURL(selectedImage)}
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
              onClick={() => history.push("/Profilefreelance")}
            >
              ยกเลิก
            </Button>
          </Col>
          <Col className="edit-work-freelance-buttonSave">
            <Button type="submit" className="btn color spacing-top10">
              บันทึก
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

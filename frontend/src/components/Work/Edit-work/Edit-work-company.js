import React, { useState } from "react";
import "./edit-work.css";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-grid-system";
import Button from "react-bootstrap/Button";

import { useHistory } from 'react-router-dom';



export default function EditWorkCompanyform(props) {
  const history = useHistory();

  const [valuesEditWcom, setvaluesEditWcom] = React.useState({
    genre: "",
    workname: "",
    description: "",
    jobtitle: "",
    quantity: "",
    minsalary: "",
    maxsalary: "",
    education: ""
  });
  const handlevaluesEditWcomChange = (prop) => (event) => {
    setvaluesEditWcom({ ...valuesEditWcom, [prop]: event.target.value });
  };

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    console.log(valuesEditWcom);
  

    if(form.checkValidity() === true) {
      alert("แก้ไขประกาศรับสมัครงานสำเร็จ")
      history.push("/Profilecompany")
    }
  };
  let url = ""

  const geturl = (e) => {
    setSelectedImage(e.target.files[0]);
    url = e.target.files[0].name
    console.log(url);
  }

  const [selectedImage, setSelectedImage] = useState();
  return (
    <div className="edit-work-outer">
      <h3>แก้ไขประกาศรับสมัครงาน</h3>
      <text>เลือกหมวดหมู่งาน</text>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>

        <Form.Select
          size="sm"
          as={Col}
          md="4"
          controlId="validationCustom01"
          value={valuesEditWcom.genre}
          onChange={handlevaluesEditWcomChange("genre")}
        >
          <option>--------------</option>
          <option value="Graphic & Design">Graphic & Design</option>
          <option value="Marketing">Marketing</option>
          <option value="Programming">Programming</option>

          {/* <Form.Control.Feedback tooltip type="invalid">
            กรุณาเลือก หมวดหมู่งาน
          </Form.Control.Feedback> */}
        </Form.Select>

        <br /><br />
        <Form.Label as={Col} className="text">รายละเอียดงาน</Form.Label>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>ชื่องาน</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="ชื่องาน"
              name="workname"
              onChange={handlevaluesEditWcomChange("workname")}
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
              required type="text"
              placeholder="คำอธิบายเพื่มเติม"
              as="textarea"
              rows={5}
              name="description"
              onChange={handlevaluesEditWcomChange("description")}
            />
            <Form.Control.Feedback type="invalid">
              โปรดระบุ คำอธิบายเพื่มเติม
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>ตำแหน่ง</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="ตำแหน่ง"
              name="jobtitle"
              onChange={handlevaluesEditWcomChange("jobtitle")}
            />
            <Form.Control.Feedback type="invalid">
              โปรดระบุ ตำแหน่ง
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group md="4" controlId="validationCustom04">
              <Form.Label>จำนวน</Form.Label>

              <Form.Control
                required
                type="number"
                placeholder="0"
                name="quantity"
                onChange={handlevaluesEditWcomChange("quantity")}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ จำนวนคน
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col className="bath2bath">
            <Form.Label>คน</Form.Label>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group md="4" controlId="validationCustom04">
              <Form.Label>เงินเดือน</Form.Label>

              <Form.Control
                required type="number"
                placeholder="0.00"
                name="minsalary"
                onChange={handlevaluesEditWcomChange("minsalary")}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ เงินเดือน
              </Form.Control.Feedback>
            </Form.Group>

          </Col>
          <div className="bath2bath">
            <Form.Label> - </Form.Label>
          </div>
          <Col>

            <Form.Group md="4" controlId="validationCustom04">
              <Form.Label className="whites">.</Form.Label>

              <Form.Control
                required
                type="number"
                placeholder="0.00"
                name="maxsalary"
                onChange={handlevaluesEditWcomChange("maxsalary")}
              />
              <Form.Control.Feedback type="invalid">
                กรุณาใส่ เงินเดือน
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col className="bath2bath">
            <Form.Label>บาท</Form.Label>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Label>วุฒิการศึกษา</Form.Label>
            <Form.Select
              size="sm"
              as={Col}
              md="4"
              controlId="validationCustom01"
              name="education"
              onChange={handlevaluesEditWcomChange("education")}
            >
              <option>----------------</option>
              <option value="ต่ำกว่า มัธยมศึกษาตอนต้น">ต่ำกว่า มัธยมศึกษาตอนต้น</option>
              <option value="มัธยมศึกษาตอนต้น หรือเทียบเท่า">มัธยมศึกษาตอนต้น หรือเทียบเท่า</option>
              <option value="มัธยมศึกษาตอนปลาย หรือเทียบเท่า">มัธยมศึกษาตอนปลาย หรือเทียบเท่า</option>
              <option value="อนุปริญญา">อนุปริญญา</option>
              <option value="ปริญญาตรี">ปริญญาตรี</option>
              <option value="ปริญญาโท">ปริญญาโท</option>
              <option value="ปริญญาเอก">ปริญญาเอก</option>
              <Form.Control.Feedback tooltip type="invalid">
                กรุณาเลือก วุฒิการศึกษา
              </Form.Control.Feedback>
            </Form.Select>
          </Col>
        </Row>

        {/* <Form.Group controlId="formFileMultiple" className="mb-3" value={url}>
          <Form.Label>รูปผลงาน</Form.Label>
          <Form.Control type="file" multiple onChange={geturl} onChange={imageChange} />
        </Form.Group>

      
        {selectedImage && (
          <img
            src={URL.editObjectURL(selectedImage)}
            className="img-fluid"
            alt="Thumb"
          />
        )} */}

        <Form.Group controlId="formFileMultiple" className="mb-3" value={url}>
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
              onClick={() => history.push("/Profilecompany")}
            >
              ยกเลิก
            </Button>
          </Col>
          <Col className="edit-work-freelance-buttonSave">
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
  );
}

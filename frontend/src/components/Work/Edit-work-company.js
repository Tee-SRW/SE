import React, { useState } from "react";
import "../Create-work/create-work.css";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-grid-system";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


export default function EditWorkCompany(props) {
  // const [values, setValues] = React.useState({
  //   password: "",
  //   showPassword: false,
  // });

  // const handleClickShowPassword = () => {
  //   setValues({ ...values, showPassword: !values.showPassword });
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  // const handlePasswordChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };
  const history = useHistory();

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  let url = ""

  const geturl = (e) => {
    setSelectedImage(e.target.files[0]);
    url = e.target.files[0].name
    console.log(url);
  }

  const [selectedImage, setSelectedImage] = useState();

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  const removeSelectedImage = () => {
    setSelectedImage();
  };

  return (
    <div className="create-work-outer">
      <h3>ประกาศรับสมัครงาน</h3>
      <text>เลือกหมวดหมู่งาน</text>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>

        <Form.Select size="sm" as={Col} md="4" controlId="validationCustom01">
          <option>Graphic & Design</option>
          <option value="1">Marketing</option>
          <option value="2">Programming</option>
          <Form.Control.Feedback type="invalid">
            กรุณาเลือก หมวดหมู่งาน
          </Form.Control.Feedback>
        </Form.Select>

        <br /><br />
        <Form.Label as={Col} className="text">รายละเอียดงาน</Form.Label>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>ชื่องาน</Form.Label>
            <Form.Control required type="text" placeholder="ชื่องาน" />
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
            />
            <Form.Control.Feedback type="invalid">
              โปรดระบุ คำอธิบายเพื่มเติม
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>ตำแหน่ง</Form.Label>
            <Form.Control required type="text" placeholder="ตำแหน่ง" />
            <Form.Control.Feedback type="invalid">
              โปรดระบุ ตำแหน่ง
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group md="4" controlId="validationCustom04">
              <Form.Label>จำนวน</Form.Label>

              <Form.Control required type="text" placeholder="0" />
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

              <Form.Control required type="text" placeholder="0.00" />
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

              <Form.Control required type="text" placeholder="0.00" />
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
            <Form.Select size="sm" as={Col} md="4" controlId="validationCustom01">
              <option>----------------</option>
              <option value="1">ต่ำกว่า มัธยมศึกษาตอนต้น</option>
              <option value="2">มัธยมศึกษาตอนต้น หรือเทียบเท่า</option>
              <option value="3">มัธยมศึกษาตอนปลาย หรือเทียบเท่า</option>
              <option value="4">อนุปริญญา</option>
              <option value="5">ปริญญาตรี</option>
              <option value="6">ปริญญาโท</option>
              <option value="7">ปริญญาเอก</option>
              <Form.Control.Feedback type="invalid">
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
            src={URL.createObjectURL(selectedImage)}
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

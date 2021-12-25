import React, { useState } from "react";
import "./create-work.css";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-grid-system";
import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router-dom';
import axios from "axios";


export default function CreateWorkCompany(props) {
  // const [valuesCreateworkcompany, setvaluesCreateworkcompany] = React.useState({
  //   password: "",
  //   showPassword: false,
  // });

  // const handleClickShowPassword = () => {
  //   setvaluesCreateworkcompany({ ...valuesCreateworkcompany, showPassword: !valuesCreateworkcompany.showPassword });
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  // const handlePasswordChange = (prop) => (event) => {
  //   setvaluesCreateworkcompany({ ...valuesCreateworkcompany, [prop]: event.target.value });
  // };
  const history = useHistory();

  const [valuesCreateworkcompany, setvaluesCreateworkcompany] = React.useState({
    typeworknumber: "",
    namework: "",
    detailwork: "",
    position: "",
    numperson: "",
    priceworkmin: "",
    priceworkmax: "",
    education: ""
  });
  const handlevaluesCreateworkcompanyChange = (prop) => (event) => {
    setvaluesCreateworkcompany({ ...valuesCreateworkcompany, [prop]: event.target.value });
  };

  const [validated, setValidated] = useState(false);

  let url = ""

  const geturl = (e) => {
      setSelectedImage(e.target.files[0]);
    url = e.target.files[0].name
    console.log(url);
  }

  const [selectedImage, setSelectedImage] = useState();

  // This function will be triggered when the file field change
  // const imageChange = (e) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setSelectedImage(e.target.files[0]);
  //   }
  // };
  // const removeSelectedImage = () => {
  //   setSelectedImage();
  // };

  const baseUsl = "http://203.170.190.226:8080/"

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    event.preventDefault();

    const user = {
      "companyid":1,
      "typeworknumber":valuesCreateworkcompany.typeworknumber,
      "namework":valuesCreateworkcompany.namework,
      "detailwork":valuesCreateworkcompany.detailwork,
      "position":valuesCreateworkcompany.position,
      "numperson":valuesCreateworkcompany.numperson,
      "priceworkmin":valuesCreateworkcompany.priceworkmin,
      "priceworkmax":valuesCreateworkcompany.priceworkmax,
      "education":valuesCreateworkcompany.education,
      "imageworkpostcompany":"Image_Work_Post_Companyxd"
    };

    axios.post(`${baseUsl}/addworkFreelance`,{ user })
    .then(res => {
      console.log(user);
      // console.log(valuesCreateworkcompany.email);
      // console.log(valuesCreateworkcompany.password);
      // console.log(res);
      // console.log(res.data);    
    })
    if(form.checkValidity() === true) {
      alert("สร้างประกาศรับสมัครงานสำเร็จ")
        history.push("/Profilecompany")
      }
  };

  return (
    <div className="create-work-outer">
      <h3>ประกาศรับสมัครงาน</h3>
      <text>เลือกหมวดหมู่งาน</text>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>

      <Form.Select
          size="sm"
          as={Col}
          md="4"
          controlId="validationCustom01"
          value={valuesCreateworkcompany.typeworknumber}
          onChange={handlevaluesCreateworkcompanyChange("typeworknumber")}
        >
          <option>--------------</option>
          <option value="1">Graphic & Design</option>
          <option value="2">Marketing</option>
          <option value="3">Programming</option>

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
              value={valuesCreateworkcompany.namework}
              onChange={handlevaluesCreateworkcompanyChange("namework")}
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
              value={valuesCreateworkcompany.detailwork}
              onChange={handlevaluesCreateworkcompanyChange("detailwork")}
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
              name="Position"
              value={valuesCreateworkcompany.position}
              onChange={handlevaluesCreateworkcompanyChange("position")}
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
                name="NumPerson"
                value={valuesCreateworkcompany.numperson}
                onChange={handlevaluesCreateworkcompanyChange("numperson")}
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
                name="PriceWorkMin"
                value={valuesCreateworkcompany.priceworkmin}
                onChange={handlevaluesCreateworkcompanyChange("priceworkmin")}
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
                name="PriceWorkMax"
                value={valuesCreateworkcompany.priceworkmax}
                onChange={handlevaluesCreateworkcompanyChange("priceworkmax")}
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
              name="Education"
              value={valuesCreateworkcompany.education}
              onChange={handlevaluesCreateworkcompanyChange("education")}
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
            src={URL.createObjectURL(selectedImage)}
            className="img-fluid"
            alt="Thumb"
          />
        )} */}

        <Form.Group controlId="formFileMultiple" className="mb-3" value={url}>
          <Form.Label>รูปผลงาน</Form.Label>
          <Form.Control type="file" multiple onChange={geturl}  />
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

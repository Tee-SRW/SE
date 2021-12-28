import React, { useState, useEffect } from "react";
import "./edit-work.css";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-grid-system";
import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router-dom';
import axios from "../../../api/axios-work";
import DataUser from "../../../DataUser/DataUser";
import { useContext } from "react";


export default function EditWorkCompanyform(props) {
  const history = useHistory();
  const dataWork = useContext(DataUser);
  const sendWorkID = {
    workpostid: dataWork.userSelectWorkID,
  };
  const sendComID = {
    companyid: dataWork.userID,
  };
  const [valuesEditWcom, setvaluesEditWcom] = React.useState({
    workpostid: dataWork.userID,
    companyid: dataWork.userID,
    typeworknumber: "",
    namework: "",
    detailwork: "",
    position: "",
    numperson: "",
    priceworkmin: "",
    priceworkmax: "",
    education: "",
    imageworkpostcompany: "",
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
    event.preventDefault();
    axios.put(`/updateuser`, valuesEditWcom).then((res) => {
      console.log(valuesEditWcom);
      console.log(res);
      console.log(res.data);
      if (res.data === "Complete" || res.data === "สำเร็จ" || res.data === "Complete!") {
        alert("แก้ไขการสร้างงานของคุณสำเร็จ");
        history.push("/Profilecompany");
      }
    });

  };

  let url = ""
  const geturl = (e) => {
    setSelectedImage(e.target.files[0]);
    url = e.target.files[0].name
    console.log(url);
  }
  useEffect(() => {

    axios.post(`/getworkcompany`, sendWorkID).then((res) => {
      console.log(sendWorkID);
      console.log(res);
      console.log(res.data);

      let beforeEditto = res.data.map(Item => {
        return {
          id: dataWork.userID,
          workpostid: Item.workpostid,
          companyid: Item.companyid,
          typeworknumber: Item.typeworknumber,
          namework: Item.namework,
          detailwork: Item.detailwork,
          position: Item.position,
          numperson: Item.numperson,
          priceworkmin: Item.priceworkmin,
          priceworkmax: Item.priceworkmax,
          education: Item.education,
          imageworkpostcompany: "images/postfreelance/" + Item.imageworkpostcompany,
        }
      })
      setvaluesEditWcom(beforeEditto);
    });

  }, []);

  console.log(valuesEditWcom);
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
          value={Number(valuesEditWcom.typeworknumber)}
          onChange={handlevaluesEditWcomChange("typeworknumber")}
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
              value={valuesEditWcom.namework}
              onChange={handlevaluesEditWcomChange("namework")}
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
              value={valuesEditWcom.detailwork}
              onChange={handlevaluesEditWcomChange("detailwork")}
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
              name="position"
              value={valuesEditWcom.position}
              onChange={handlevaluesEditWcomChange("position")}
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
                value={valuesEditWcom.numperson}
                onChange={handlevaluesEditWcomChange("numperson")}
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
                name="priceworkmin"
                value={valuesEditWcom.priceworkmin}
                onChange={handlevaluesEditWcomChange("priceworkmin")}
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
                name="priceworkmax"
                value={valuesEditWcom.priceworkmax}
                onChange={handlevaluesEditWcomChange("priceworkmax")}
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
              value={valuesEditWcom.education}
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

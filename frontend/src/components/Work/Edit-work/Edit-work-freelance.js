import React, { useState, useEffect, useContext } from "react";
import "./edit-work.css";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-grid-system";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import axios from "../../../api/axios-work";
import DataUser from "../../../DataUser/DataUser";

export default function EditWorkFreelanceform(props) {
  const userData = useContext(DataUser)
  const history = useHistory();

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

  const sendWorkID = {
    // workpostid: userData.userSelectWorkID,
    work_post_id: 1
  };

  const [valuesEditWfl, setvaluesEditWfl] = React.useState({
    userid: userData.userID,
    workpostid: userData.userSelectWorkID,
    typeWorknumber: "",
    namework: "",
    detailwork: "",
    pricepostwork: "",
    imageworkpostfreelance: ""
  });

  const handlevaluesEditWflChange = (prop) => (event) => {
    setvaluesEditWfl({ ...valuesEditWfl
      , [prop]: event.target.value });
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    

    // const putupdatepostfreelance = {
    //   userid: userData.userID,
    //   workpostid: userData.userSelectWorkID,
    //   typeWorknumber: "",
    //   namework: "",
    //   detailwork: "",
    //   pricepostwork: "",
    //   imageworkpostfreelance: ""
    // }

    // axios.put(`/updatepostfreelance`, valuesEditWfl).then((res) => {
    //   console.log(valuesEditWfl);
    //   console.log(res);
    //   console.log(res.data);
    //   if (res.data === "Complete" || res.data === "สำเร็จ" || res.data === "Complete!") {
    //     alert("แก้ไขการสร้างงานของคุณสำเร็จ");
    //     history.push("/Profilefreelance");
    //   }
    // });


  };


  useEffect(() => {
    axios.post(`/getworkfreelance`, sendWorkID).then((res) => {
      console.log(sendWorkID);
      // console.log(res);
      console.log(res.data);
      // let response = Item
      let beforeEditto = res.data.map(Item => {
        return {
          userid: userData.userID,
          workpostid: userData.userSelectWorkID,
          typeWorknumber: Item.type_work_name === "Graphic & Design" ? "1"
                        :  Item.type_work_name === "Marketing" ?        "2"
                        :  Item.type_work_name === "Programming" ?      "3" : null,
          detailwork:  Item.detail_work,
          pricepostwork:  Item.price_post_work,
          namework:  Item.name_work,
          imageworkpostfreelance: "images/postfreelance/" +  Item.image_work_post_freelance
        };
      })
      setvaluesEditWfl(beforeEditto[0]);
      // console.log(response);
      console.log("--------beforce--------");
      console.log(beforeEditto);
      console.log("--------beforce--------");
    });
    
  }, []);
  console.log("--------valuesEditWfl--------");
  console.log(valuesEditWfl);
  console.log("--------valuesEditWfl--------");


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
          onChange={handlevaluesEditWflChange("typeWorknumber")}
          value={valuesEditWfl.typeWorknumber}
        >
          <option>--------------</option>
          <option value={1}>Graphic & Design</option>
          <option value={2}>Marketing</option>
          <option value={3}>Programming</option>
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
              onChange={handlevaluesEditWflChange("namework")}
              value={valuesEditWfl.namework}
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
              name="detailwork"
              onChange={handlevaluesEditWflChange("detailwork")}
              value={valuesEditWfl.detailwork}
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
                name="pricepostwork"
                onChange={handlevaluesEditWflChange("pricepostwork")}
                value={valuesEditWfl.pricepostwork}
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

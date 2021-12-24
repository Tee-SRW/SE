import React, { useState } from "react";
import "./Profileform.css";
import { useHistory } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-grid-system";
// import axios from '../api/axios-profile';


export default function Profileform(props) {
  let url = "";
  const geturl = (e) => {
    url = e.target.files[0].name;
    console.log(url);
  };
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
  const [values, setValues] = React.useState({
    id: "",
    First__name: "",
    Last__name: "",
    Contact__phone: "",
    Contact__email: "",
  });
  const handleValuesChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  // const handleSubmit = (event) => {
  //   console.log("email: " + values.email);
  //   console.log("password: " + values.password);
  // };
  const history = useHistory();
  return (
    <Container className="container-profile">
      <div className="bg">
        <div className="board__container">
          <Row className="mnarginl">
            <Col>
              <Image
                // src={URL.createObjectURL(selectedImage)} {selectedImage && ()}
                // className="img-fluid rounded-circle image"
                // alt="Profile Admin"
                src="/images/IMG_20210208_195921_677.jpg"
                className="img-fluid rounded-circle image"
                // alt="Profile Admin"
                values={values.Profile__image}
                fluid
              />
            </Col>
            <Col className="margin">
              <h1 >สุชัย อัศะ</h1>
              <button
                className="btn btn-outline-primary bottom__profileform"
                type="submit"
                onClick={() => history.push("/Editprofile")}
              >
                แก้ไขโปรไฟล์
              </button>
            </Col>

          </Row>

        </div>

        <div className="box_bg">
          <div className="box__head__inner">
            <label className="box__toptext">ช่องทางการติดต่อ</label>
            <div>
              <label className="box__midtext__start">
                เบอร์โทรศัพท์
                <label className="box__midtext__end">
                  099-297-9490 <text>{props.Contact__phone}</text>
                </label>
              </label>
            </div>
            <div>
              <label className="box__bottomtext__start">
                อีเมล
                <label className="box__bottomtext__end">
                  joppy.inc123@gmail.com<text>{props.Contact__email}</text>
                </label>
              </label>
            </div>
          </div>
          <div className="box__head__work">
            <h3 className="font__topic">งานของฉัน</h3>
            <h3 className="font__midtext">
              คุณไม่ได้ลงทะเบียนการเป็น “ฟรีแลนซ์” ไว้
            </h3>
          </div>
        </div>
      </div>
    </Container>
  );
}

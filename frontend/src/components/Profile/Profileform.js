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
  const [valuesProfile, setvaluesProfile] = React.useState({
    id: "",
    First__name: "",
    Last__name: "",
    Contact__phone: "",
    Contact__email: "",
  });
  const handlevaluesProfileChange = (prop) => (event) => {
    setvaluesProfile({ ...valuesProfile, [prop]: event.target.value });
  };
  // const handleSubmit = (event) => {
  //   console.log("email: " + valuesProfile.email);
  //   console.log("password: " + valuesProfile.password);
  // };
  const history = useHistory();
  return (
    <Container className="container-profile">
      <div className="bg">
        <div className="board__container">
          <Image
            // src={URL.createObjectURL(selectedImage)} {selectedImage && ()}
            // className="img-fluid rounded-circle image"
            // alt="Profile Admin"
            src="/images/ProfileCEO.jpg"
            className="img-fluid rounded-circle image"
            // alt="Profile Admin"
            valuesProfile={valuesProfile.Profile__image}
            fluid
          />
          <div className="board__head">
            <h1 className="board__name">
              สุชัย<text>{props.First__name__freelance}</text>
            </h1>
            <div className="board__setting">
              <div className="board__box">
                {/* <inputvalue={url}
                  className="d-none"
                  type="file"
                  multiple
                  onChange={geturl}
                  onChange={imageChange}
                /> */}
                <button
                  className="btn btn-outline-primary bottom__profileform"
                  type="submit"
                  onClick={() => history.push("/Editprofilefreelance")}
                >
                  แก้ไขโปรไฟล์
                </button>
              </div>
            </div>
          </div>
          <h2 className="board__last__freelance">
            อัศะ<text>{props.Last__name__freelance}</text>
          </h2>
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

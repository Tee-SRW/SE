import React, { useState } from "react";
import "./Profileform.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputMask from "react-input-mask";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-grid-system";
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
  return (
    <Container className="container-profile">
      <div className="bg">
        <div className="board__container">
          <Image
            // src={URL.createObjectURL(selectedImage)} {selectedImage && ()}
            // className="img-fluid rounded-circle image"
            // alt="Profile Admin"
            src="https://discountdoorhardware.ca/wp-content/uploads/2018/06/profile-placeholder-3.jpg"
            className="img-fluid rounded-circle image"
            alt="Profile Admin"
            fluid
          />
          <div className="board__head">
            <h1 className="board__name">ชื่ออะไรสักอย่าง</h1>
            <div className="board__setting">
              <div className="board__box">
                {/* <inputvalue={url}
                  className="d-none"
                  type="file"
                  multiple
                  onChange={geturl}
                  onChange={imageChange}
                /> */}
                <button className="btn btn-outline-primary bottom__profileform">
                  แก้ไขโปรไฟล์
                </button>
              </div>
            </div>
          </div>
          <h2 className="board__last">นามสกุลอะไรสักอย่าง</h2>
        </div>
        <h3>งานของฉัน</h3>
        <div className="box_bg">
          <div className="box__head__inner">
            <label className="box__toptext">ช่องทางการติดต่อ</label>
            <div>
              <label className="box__midtext__start">
                เบอร์โทรศัพท์
                <label className="box__midtext__end">08x-xxx-xxxx</label>
              </label>
            </div>
            <div>
              <label className="box__bottomtext__start">
                อีเมล
                <label className="box__bottomtext__end">
                  zzzzzz@hotmail.com
                </label>
              </label>
            </div>
          </div>
          <div className="box__head__work"></div>
        </div>
      </div>
    </Container>
  );
}

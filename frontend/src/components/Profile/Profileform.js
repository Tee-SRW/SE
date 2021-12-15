import React, { useState } from "react";
import "./Profileform.css";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputMask from "react-input-mask";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-grid-system";
import axios from "axios";
const baseUsl = "http://203.170.190.226:8080/";
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
          <Image
            // src={URL.createObjectURL(selectedImage)} {selectedImage && ()}
            // className="img-fluid rounded-circle image"
            // alt="Profile Admin"
            src=""
            className="img-fluid rounded-circle image"
            alt="Profile Admin"
            values={values.Profile__image}
            fluid
          />
          <div className="board__head">
            <h1 className="board__name ">
              ชื่ออะไรสักอย่าง<text>{props.First__name}</text>
            </h1>
            <div className="board__setting">
              <div className="board__box">
                {/* <inputvalue={url}
                  className="d-none"
                  type="file"
                  multiple
                  onChange={geturl}
                  onChange={imageChange}
                /> */}{" "}
                <button
                  className="btn btn-outline-primary bottom__profileform"
                  type="submit"
                  onClick={() => history.push("/Editprofile")}
                >
                  แก้ไขโปรไฟล์
                </button>
              </div>
            </div>
          </div>
          <h2 className="board__last">
            นามสกุลอะไรสักอย่าง <text>{props.Last__name}</text>
          </h2>
        </div>

        <div className="box_bg">
          <div className="box__head__inner">
            <label className="box__toptext">ช่องทางการติดต่อ</label>
            <div>
              <label className="box__midtext__start">
                เบอร์โทรศัพท์
                <label className="box__midtext__end">
                  08x-xxx-xxxx <text>{props.Contact__phone}</text>
                </label>
              </label>
            </div>
            <div>
              <label className="box__bottomtext__start">
                อีเมล
                <label className="box__bottomtext__end">
                  zzzzzz@hotmail.com<text>{props.Contact__email}</text>
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

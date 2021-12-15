import React, { useState } from "react";
import "./Profilecompanyform.css";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputMask from "react-input-mask";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-grid-system";
import {
  GraphicFree,
  GraphicWork,
  MarketFree,
  MarketWork,
  ProgrammingFree,
  ProgrammingWork,
} from "../CardWorkandFreelance/Carddataset";
import CardItem from "../CardItem";
export default function Profilecompanyform(props) {
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
    First__name: "",
    Contact__phone__company: "",
    Contact__email__company: "",
    Card__1__company: "",
    Card__2__company: "",
    Card__3__company: "",
  });
  const handleValuesChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const history = useHistory();
  return (
    <Container className="container-profile">
      <div className="bg">
        <div className="board__container__company">
          <Image
            // src={URL.createObjectURL(selectedImage)} {selectedImage && ()}
            // className="img-fluid rounded-circle image"
            // alt="Profile Admin"
            src="/images/IMG_20210208_195921_677.jpg"
            className="img-fluid rounded-circle image__company"
            alt="Profile Admin"
            values={values.Profile__company__image}
            fluid
          />
          <div className="board__head__company">
            <h1 className="board__name__company">ชื่อบริษัท<text>{props.First__company}</text></h1>
            {/* <h1 className="board__check">คุณเป็นฟรีแลนซ์</h1> */}
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
                  onClick={() => history.push("/Editprofilecompany")}
                >
                  แก้ไขโปรไฟล์
                </button>
              </div>
            </div>
          </div>
          <h2 className="board__last__freelance"><text>{props.Last__name__freelance}</text></h2>
        </div>

        <div className="box_bg">
          <div className="box__head__inner__company">
            <label className="box__toptext">ช่องทางการติดต่อ</label>
            <div>
              <label className="box__midtext__start">
                เบอร์โทรศัพท์
                <label className="box__midtext__end">08x-xxx-xxxx<text>{props.Contact__phone__company}</text></label>
              </label>
            </div>
            <div>
              <label className="box__bottomtext__start">
                อีเมล
                <label className="box__bottomtext__end">
                  zzzzzz@hotmail.com<text>{props.Contact__email__company}</text>
                </label>
              </label>
            </div>
            <div>
              <label className="box__bottomtext__start">
                ที่อยู่
                <label className="box__bottomtext__end">
                  KMITL
                </label>
              </label>
            </div>
            <div>
              <label className="box__bottomtext__start">
                ตำบล / แขวง
                <label className="box__bottomtext__end">
                  ลาดกระบัง
                </label>
              </label>
            </div>
            <div>
              <label className="box__bottomtext__start">
                อำเภอ  / เขต
                <label className="box__bottomtext__end">
                  ลาดกระบัง
                </label>
              </label>
            </div>
            <div>
              <label className="box__bottomtext__start">
                จังหวัด
                <label className="box__bottomtext__end">
                  กรุงเทพฯ
                </label>
              </label>
            </div>
            <div>
              <label className="box__bottomtext__start">
                รหัสไปรษณีย์
                <label className="box__bottomtext__end">
                  10520
                </label>
              </label>
            </div>
          </div>
          <div className="box__head__work">
            <h3 className="font__topic">การประกาศรับบุคลากรของคุณ</h3>
            <h3 className="font__topicf">Graphic & Design</h3>
            {/* <div className="cards">
              <div className="cards__container">
                <div className="cards__wrapper">
                  <ul className="cards__items">
                    <CardItem
                      srcwork="images/img-9.jpg"
                      text="Explore the hidden waterfall deep inside the Amazon Jungle"
                      label="Adventure"
                      path="/services"
                    />
                  </ul>
                </div>
              </div>
            </div> */}
            <Card style={{ width: "18rem" }}>{props.Card__1__company}
              <Card.Img variant="top" src="holder.js/240px240" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => history.push("/EditworkCompany")}
                >แก้ไข</Button>
              </Card.Body>
            </Card>
            {/* <h3 className="font__midtext">
              คุณไม่ได้ลงทะเบียนการเป็น “ฟรีแลนซ์” ไว้
            </h3> */}
            <h3 className="font__topicf">การตลาด{props.Card__2__company}</h3>
            {/* <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/240px240" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card> */}
            <h3 className="font__midtext">
              คุณไม่ได้ลงประกาศประเภทนี้ไว้
            </h3>
            <h3 className="font__topicf">Programing</h3>
            <Card style={{ width: "18rem" }}>{props.Card__3__company}
              <Card.Img variant="top" src="holder.js/240px240" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => history.push("/EditworkCompany")}
                >แก้ไข</Button>
              </Card.Body>
            </Card>
            {/* <h3 className="font__midtext">
              คุณไม่ได้ลงทะเบียนการเป็น “ฟรีแลนซ์” ไว้
            </h3> */}
          </div>
        </div>
      </div>
    </Container>
  );
}

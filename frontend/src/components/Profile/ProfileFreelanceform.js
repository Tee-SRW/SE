import React, { useState } from "react";
import "./ProfileFreelanceform.css";
import "../css/margin.css"
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputMask from "react-input-mask";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-grid-system";
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import {
  GraphicFree,
  GraphicWork,
  MarketFree,
  MarketWork,
  ProgrammingFree,
  ProgrammingWork,
} from "../CardWorkandFreelance/Carddataset";
import CardItem from "../CardItem";
export default function ProfileFreelanceform(props) {
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
    Last__name: "",
    Contact__phone: "",
    Contact__email: "",
    Card__1__freelance: "",
    Card__2__freelance: "",
    Card__3__freelance: "",
  });
  const handleValuesChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const history = useHistory();
  return (
    <Container className="container-profile">
      <div className="bg">
        <div className="board__container">

          <Row className="marginl">
            <Col>
              <Image
                // src={URL.createObjectURL(selectedImage)} {selectedImage && ()}
                // className="img-fluid rounded-circle image"
                // alt="Profile Admin"
                src="/images/IMG_20210208_195921_677.jpg"
                className="img-fluid rounded-circle image" jpg
                // alt="Profile Admin"
                values={values.Profile__freelance__image}
                fluid
              />
            </Col>
            <Col >
              {/* <text>{props.First__name__freelance}</text> */}
              <Col className="margin">
                <h1 > สุชัย  อัศะ</h1>
                <h1 className="board__check">คุณเป็นฟรีแลนซ์</h1>
                <button
                  className="btn btn-outline-primary bottom__profileform"
                  type="submit"
                  onClick={() => history.push("/Editprofilefreelance")}
                >
                  แก้ไขโปรไฟล์
                </button>
              </Col>

            </Col>
          </Row>

        </div>

        <div className="box_bg">
          <div className="box__head__inner__freelance">
            <label className="box__toptext">ช่องทางการติดต่อ</label>
            <div>
              <label className="box__midtext__start">
                เบอร์โทรศัพท์
                <label className="box__midtext__end">099-297-9490<text>{props.Contact__phone__freelance}</text></label>
              </label>
            </div>
            <div>
              <label className="box__bottomtext__start">
                อีเมล
                <label className="box__bottomtext__end">
                  joppy.inc123@gmail.com<text>{props.Contact__email__freelance}</text>
                </label>
              </label>
            </div>
            <div>
              <label className="box__bottomtext__start">
                Line
                <label className="box__bottomtext__end">
                  JopJop321lnwZa<text>{props.Contact__line__freelance}</text>
                </label>
              </label>
            </div>
            <div>
              <label className="box__bottomtext__start">
                Facebook
                <label className="box__bottomtext__end">
                  R-Jop Mylife<text>{props.Contact__facebook__freelance}</text>
                </label>
              </label>
            </div>
            <div>
              <label className="box__bottomtext__start">
                Instagram
                <label className="box__bottomtext__end">
                  jop_asawa<text>{props.Contact__instagram__freelance}</text>
                </label>
              </label>
            </div>
          </div>
          <div className="box__head__work">
            <h3 className="font__topic">งานของฉัน</h3>
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
            </div> */
            }
            <Card style={{ width: "18rem" }}>{props.Card__1__freelance}
              <Card.Img variant="top" src="holder.js/240px240" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => history.push("/EditWorkFreelance")}
                >แก้ไข</Button>
              </Card.Body>
            </Card>
            {/* <h3 className="font__midtext">
              คุณไม่ได้ลงทะเบียนการเป็น “ฟรีแลนซ์” ไว้
            </h3> */}
            <h3 className="font__topicf">การตลาด {props.Card__2__freelance}</h3>
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
              คุณไม่ได้ลงงานประเภทนี้ไว้
            </h3>
            <h3 className="font__topicf">Programing</h3>
            <Card style={{ width: "18rem" }}>{props.Card__3__freelance}
              <Card.Img variant="top" src="holder.js/240px240" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => history.push("/EditWorkFreelance")}
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

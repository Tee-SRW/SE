import React, { useState, useContext, useEffect } from "react";
import "./Profileform.css";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-grid-system";
import axios from '../../api/axios-profile';
import DataUser from '../../DataUser/DataUser';

export default function ProfileFreelanceform(props) {
  // let url = "";
  // const geturl = (e) => {
  //   url = e.target.files[0].name;
  //   console.log(url);
  // };
  // const [selectedImage, setSelectedImage] = useState();

  // // This function will be triggered when the file field change
  // const imageChange = (e) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setSelectedImage(e.target.files[0]);
  //   }
  // };
  // const removeSelectedImage = () => {
  //   setSelectedImage();
  // };

  const dataUser = useContext(DataUser)

  const history = useHistory();

  const [valuesProfilefreelance, setvaluesProfilefreelance] = React.useState({
    id: "",
    
  });

  const handlevaluesProfilefreelanceChange = (prop) => (event) => {
    setvaluesProfilefreelance({ ...valuesProfilefreelance, [prop]: event.target.value });
  };
  
  const sendUserID = {
    id: dataUser.userID
  }

  useEffect(() => {
    console.log("fakkkkk")

    axios.post(`/getupdatefreelance`, sendUserID)
      .then((res) => {
        console.log(sendUserID);
        console.log(res);
        console.log(res.data);

        let beforeEditto = {
          id: dataUser.userID,
          fullname: res.data.firstname+' '+res.data.lastname,
          // firstname: res.data.firstname,
          // lastname: res.data.lastname,
          email: res.data.email,
          phone: res.data.phone,
          profile_user: res.data.profile_user,
          line: res.data.line,
          facebook: res.data.facebook,
          instagram: res.data.instagram,
        }
        setvaluesProfilefreelance(beforeEditto)
      });
  }, []);
  
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
            valuesProfilefreelance={valuesProfilefreelance.Profile__freelance__image}
            fluid
          />
          
          <div className="board__head">
            <h1 className="board__name">
              {valuesProfilefreelance.fullname}
            </h1>
            <h1 className="board__check">คุณเป็นฟรีแลนซ์</h1>
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
                  className="btn bottom__profileform shadow"
                  type="submit"
                  onClick={() => history.push("/Editprofilefreelance")}
                >
                  แก้ไขโปรไฟล์
                </button>
              </div>
            </div>
          </div>
          {/* <h2 className="board__last__freelance">อัศะ<text>{props.Last__name__freelance}</text></h2> */}
        </div>

        <div className="box_bg">
          <div className="box__head__inner">
            <label className="box__toptext">ช่องทางการติดต่อ</label>
            <div>
              <label className="box__midtext__start">
                เบอร์โทรศัพท์
                <label className="box__midtext__end">
                  {valuesProfilefreelance.phone}
                  </label>
              </label>
            </div>
            <div>
              <label className="box__bottomtext__start">
                อีเมล
                <label className="box__bottomtext__end">
                {valuesProfilefreelance.email}
                </label>
              </label>
            </div>
            <div>
              <label className="box__bottomtext__start">
                Line
                <label className="box__bottomtext__end">
                {valuesProfilefreelance.line}
                </label>
              </label>
            </div>
            <div>
              <label className="box__bottomtext__start">
                Facebook
                <label className="box__bottomtext__end">
                  {valuesProfilefreelance.facebook}
                </label>
              </label>
            </div>
            <div>
              <label className="box__bottomtext__start">
                Instagram
                <label className="box__bottomtext__end">
                {valuesProfilefreelance.instagram}
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

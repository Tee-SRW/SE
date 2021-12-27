import React, { useState, useContext, useEffect } from "react";
import "./Profileform.css";
import { useHistory } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-grid-system";
import axios from '../../api/axios-profile';
import DataUser from '../../DataUser/DataUser';

export default function Profileform(props) {
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

  const sendUserID = {
    id: dataUser.userID
  }

  useEffect(() => {
    console.log("fakkkkk")

    axios.post(`/getupdateuser`, sendUserID)
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
        }
        setvaluesProfile(beforeEditto)
      });
  }, []);

  console.log(valuesProfile);
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
              {valuesProfile.fullname}
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
          {/* <h2 className="board__last__freelance">
            อัศะ<text>{props.Last__name__freelance}</text>
          </h2> */}
        </div>

        <div className="box_bg">
          <div className="box__head__inner">
            <label className="box__toptext">ช่องทางการติดต่อ</label>
            <div>
              <label className="box__midtext__start">
                เบอร์โทรศัพท์
                <label className="box__midtext__end">
                  {valuesProfile.phone}
                </label>
              </label>
            </div>
            <div>
              <label className="box__bottomtext__start">
                อีเมล
                <label className="box__bottomtext__end">
                  {valuesProfile.email}
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

import React, { useContext, useEffect } from "react";
import "./Profileform.css";
import { useHistory } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { Container } from "react-grid-system";
import axios from '../../api/axios-profile';
import DataUser from '../../DataUser/DataUser';

export default function Profileform(props) {
  
  const dataUser = useContext(DataUser)

  const history = useHistory();

  const [valuesProfile, setvaluesProfile] = React.useState({
    id: "",
  });

  const handlevaluesProfileChange = (prop) => (event) => {
    setvaluesProfile({ ...valuesProfile, [prop]: event.target.value });
  };

  const sendUserID = {
    id: dataUser.userID
  }

  useEffect(() => {

    axios.post(`/getupdateuser`, sendUserID)
      .then((res) => {
        console.log(sendUserID);
        console.log(res);
        console.log(res.data);

        let beforeEditto = {
          id: dataUser.userID,
          fullname: res.data.firstname+' '+res.data.lastname,
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
            src="/images/ProfileCEO.jpg"
            className="img-fluid rounded-circle image"
            valuesProfile={valuesProfile.Profile__image}
            fluid
          />
          <div className="board__head">
            <h1 className="board__name">
              {valuesProfile.fullname}
            </h1>
            <div className="board__setting">
              <div className="board__box">
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

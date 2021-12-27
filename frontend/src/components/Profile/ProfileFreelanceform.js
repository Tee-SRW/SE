import React, { useState, useContext, useEffect } from "react";
import "./Profileform.css";
import Card from "react-bootstrap/Card";
import { Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-grid-system";
import axios from '../../api/axios-profile';
import DataUser from '../../DataUser/DataUser';

export default function ProfileFreelanceform(props) {
  const dataUser = useContext(DataUser)
  const history = useHistory();

  const [showWorkCompanyGraphicDesign, setShowWorkCompanyGraphicDesign] = useState([]);
  const [showWorkCompanyMarketing, setShowWorkCompanyMarketing] = useState([]);
  const [showWorkCompanyProgramming, setShowWorkCompanyProgramming] = useState([]);

  function handleClickWork(value) {
    let sentWorkID = {
      workID: value
    }
    props.userWorkSelectID(sentWorkID)
    console.log(value) //shows value
  }

  function handleClickWorkButton(value) {
    let sentWorkID = {
      workID: value
    }
    props.userWorkSelectID(sentWorkID)
    console.log(value) //shows value
    history.push("/EditWorkCompany")
  }

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
          fullname: res.data.firstname + ' ' + res.data.lastname,
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
      }); const job = {
        type_work_id: 2,
        select_id: 2,
      };

    axios.post(`/getallwork`, job).then((res) => {
      console.log(job);
      console.log(res.data);
      let work = res.data.allwork.map(Item => {
        return {
          work_post_id: Item.work_post_id,
          companyName: Item.companyname,
          typeWorkName: Item.type_work_name,
          nameWork: Item.name_work,
          pricePostWork: Item.price_work_min,
          image: "images/postfreelance/" + Item.image_work_post_company,
          srcwork: "images/design.jpeg",
          path: "/WorkFreelance"
        }
      })
      let graghic = work.filter(work => work.typeWorkName === "Graphic & Design")
      setShowWorkCompanyGraphicDesign(graghic)
      let marketing = work.filter(work => work.typeWorkName === "Marketing")
      setShowWorkCompanyMarketing(marketing)
      let programming = work.filter(work => work.typeWorkName === "Programming")
      setShowWorkCompanyProgramming(programming)

    });
  }, []);
  let showContentGraphicDesign = <></>
  if (showWorkCompanyGraphicDesign.length > 0) {
    showContentGraphicDesign =
      <div className="cards__in_profile__wrapper">
        <ul className="cards__in_profile__items">
          {showWorkCompanyGraphicDesign.map((Item, index) => {
            return (
              <>
                <li className="cards__in_profile__item" key={index}>
                  <div className="cards__in_profile__item__link">
                    <Link
                      to="/WorkFreelance"
                      onClick={() => handleClickWork(Item.work_post_id)}
                    >
                      <figure
                        className="cards__in_profile__item__pic-wrap"
                        data-category={Item.companyName}
                      >
                        <img
                          className="cards__in_profile__item__img"
                          // src={Item.srcwork}	Default image job
                          src={Item.image}
                          alt={String(Item.work_post_id)}
                        />
                      </figure>
                    </Link>
                    <div className="cards__in_profile__item__info">
                      <h5 className="cards__in_profile__item__text">
                        {Item.typeWorkName}
                      </h5>
                      <h5 className="cards__in_profile__item__text">
                        {Item.nameWork}
                      </h5>
                      <Button
                        variant="primary"
                        onClick={() => handleClickWorkButton(Item.work_post_id)}
                      >
                        แก้ไข
                      </Button>
                    </div>
                    <h5 className="cards__in_profile__item__text_price">
                      {Item.pricePostWork}
                    </h5>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>
  } else {
    showContentGraphicDesign =
      <h3 className="font__midtext">
        คุณไม่ได้ลงประกาศประเภทนี้ไว้
      </h3>
  }

  let showContentMarketing = <></>
  if (showWorkCompanyMarketing.length > 0) {
    showContentMarketing =
      <div className="cards__in_profile__wrapper">
        <ul className="cards__in_profile__items">
          {showWorkCompanyMarketing.map((Item, index) => {
            return (
              <>
                <li className="cards__in_profile__item" key={index}>
                  <div className="cards__in_profile__item__link">
                    <Link
                      to="/WorkFreelance"
                      onClick={() => handleClickWork(Item.work_post_id)}
                    >
                      <figure
                        className="cards__in_profile__item__pic-wrap"
                        data-category={Item.companyName}
                      >
                        <img
                          className="cards__in_profile__item__img"
                          // src={Item.srcwork}	Default image job
                          src={Item.image}
                          alt={String(Item.work_post_id)}
                        />
                      </figure>
                    </Link>
                    <div className="cards__in_profile__item__info">
                      <h5 className="cards__in_profile__item__text">
                        {Item.typeWorkName}
                      </h5>
                      <h5 className="cards__in_profile__item__text">
                        {Item.nameWork}
                      </h5>
                      <Button
                        variant="primary"
                        onClick={() => handleClickWorkButton(Item.work_post_id)}
                      >
                        แก้ไข
                      </Button>
                    </div>
                    <h5 className="cards__in_profile__item__text_price">
                      {Item.pricePostWork}
                    </h5>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>
  } else {
    showContentMarketing =
      <h3 className="font__midtext">
        คุณไม่ได้ลงประกาศประเภทนี้ไว้
      </h3>
  }

  let showContentProgramming = <></>
  if (showWorkCompanyProgramming.length > 0) {
    showContentProgramming =
      <div className="cards__in_profile__wrapper">
        <ul className="cards__in_profile__items">
          {showWorkCompanyProgramming.map((Item, index) => {
            return (
              <>
                <li className="cards__in_profile__item" key={index}>
                  <div className="cards__in_profile__item__link">
                    <Link
                      to="/WorkFreelance"
                      onClick={() => handleClickWork(Item.work_post_id)}
                    >
                      <figure
                        className="cards__in_profile__item__pic-wrap"
                        data-category={Item.companyName}
                      >
                        <img
                          className="cards__in_profile__item__img"
                          // src={Item.srcwork}	Default image job
                          src={Item.image}
                          alt={String(Item.work_post_id)}
                        />
                      </figure>
                    </Link>
                    <div className="cards__in_profile__item__info">
                      <h5 className="cards__in_profile__item__text">
                        {Item.typeWorkName}
                      </h5>
                      <h5 className="cards__in_profile__item__text">
                        {Item.nameWork}
                      </h5>
                      <Button
                        variant="primary"
                        onClick={() => handleClickWorkButton(Item.work_post_id)}
                      >
                        แก้ไข
                      </Button>
                    </div>
                    <h5 className="cards__in_profile__item__text_price">
                      {Item.pricePostWork}
                    </h5>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>
  } else {
    showContentProgramming =
      <h3 className="font__midtext">
        คุณไม่ได้ลงประกาศประเภทนี้ไว้
      </h3>
  }
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
            <h3 className="font__topic">การประกาศรับบุคลากรของคุณ</h3>
            <h3 className="font__topicf">Graphic & Design</h3>  {/*-------------------การตลาด-------------------*/}
            <div className="cards__in_profile">
              <div className="cards__in_profile__container">
                {showContentGraphicDesign}
              </div>
            </div>
            <h3 className="font__topicf">Marketing{props.Card__2__company}</h3> {/*-------------------การตลาด-------------------*/}
            <div className="cards__in_profile">
              <div className="cards__in_profile__container">
                {showContentMarketing}
              </div>
            </div>

            <h3 className="font__topicf">Programing</h3> {/*-------------------Programing-------------------*/}
            <div className="cards__in_profile">
              <div className="cards__in_profile__container">
                {showContentProgramming}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

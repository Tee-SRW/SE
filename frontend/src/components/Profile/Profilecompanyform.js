import React, { useState, useContext, useEffect } from "react";
import "./Profileform.css";
import "./CardJob.css";
import { Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Container } from "react-grid-system";
import axios from '../../api/axios-profile';
import DataUser from '../../DataUser/DataUser';

export default function Profilecompanyform(props) {
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


  const [valuesProfilecompany, setvaluesProfilecompany] = React.useState({
    id: ""
  });

  const sendUserID = {
    id: dataUser.userID
  }

  useEffect(() => {

    axios.post(`/getupdatecompany`, sendUserID)
      .then((res) => {
        console.log(sendUserID);
        console.log(res);
        console.log(res.data);

        let beforeEditto = {
          id: dataUser.userID,
          address: res.data.address,
          companyemail: res.data.companyemail,
          companyname: res.data.companyname,
          companyphone: res.data.companyphone,
          district: res.data.district,
          postcode: res.data.postcode,
          profilecompany: res.data.profilecompany,
          province: res.data.province,
          subdistrict: res.data.subdistrict,
        }

        setvaluesProfilecompany(beforeEditto)
      });

    const job = {
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
          path: "/WorkCompany"
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
                      to="/WorkCompany"
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
                      {"เงินเดือนเริ่มต้น : " + Item.pricePostWork}
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
                      to="/WorkCompany"
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
                      {"เงินเดือนเริ่มต้น : " + Item.pricePostWork}
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
                      to="/WorkCompany"
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
                      {"เงินเดือนเริ่มต้น : " + Item.pricePostWork}
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
            src="/images/postfreelance/cp.jpg"
            className="img-fluid rounded-circle image"
            valuesProfilecompany={valuesProfilecompany.Profile__company__image}
            fluid
          />
          <div className="board__head">
            <h1 className="board__name">
              {valuesProfilecompany.companyname}
            </h1>
            <div className="board__setting">
              <div className="board__box">
                <button
                  className="btn  bottom__profileform shadow"
                  type="submit"
                  onClick={() => history.push("/Editprofilecompany")}
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
                  {valuesProfilecompany.companyphone}
                </label>
              </label>
            </div>
            <div>
              <label className="box__bottomtext__start">
                อีเมล
                <label className="box__bottomtext__end">
                  {valuesProfilecompany.companyemail}
                </label>
              </label>
            </div>
            <div>
              <label className="box__bottomtext__start">
                ที่อยู่
                <label className="box__bottomtext__end">
                  {valuesProfilecompany.address}
                </label>
              </label>
            </div>
            <div>
              <label className="box__bottomtext__start">
                ตำบล / แขวง
                <label className="box__bottomtext__end">
                  {valuesProfilecompany.subdistrict}
                </label>
              </label>
            </div>
            <div>
              <label className="box__bottomtext__start">
                อำเภอ  / เขต
                <label className="box__bottomtext__end">
                  {valuesProfilecompany.district}
                </label>
              </label>
            </div>
            <div>
              <label className="box__bottomtext__start">
                จังหวัด
                <label className="box__bottomtext__end">
                  {valuesProfilecompany.province}
                </label>
              </label>
            </div>
            <div>
              <label className="box__bottomtext__start">
                รหัสไปรษณีย์
                <label className="box__bottomtext__end">
                  {valuesProfilecompany.postcode}
                </label>
              </label>
            </div>
          </div>
          <div className="box__head__work">
            <h3 className="font__topic">การประกาศรับบุคลากรของคุณ</h3>
            <h3 className="font__topicf">Graphic & Design</h3>  {/*-------------------Graphic & Design-------------------*/}
            <div className="cards__in_profile">
              <div className="cards__in_profile__container">
                {showContentGraphicDesign}
              </div>
            </div>
            <h3 className="font__topicf">Marketing</h3> {/*-------------------การตลาด-------------------*/}
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

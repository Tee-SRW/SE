import React, { useState, useEffect } from "react";
import { Row, Col } from "react-grid-system";
import "./Work.css";
import Image from "react-bootstrap/Image";
import DataUser from '../../DataUser/DataUser';
import { useContext } from "react";
import axios from '../../api/axios-work';

export default function WorkFreelanceform(props) {
  const dataWork = useContext(DataUser)

  const sendWorkID = {
    // work_post_id: dataWork.userSelectWorkID
    work_post_id: 1
  }

  const [valuesWork, setvaluesWork] = useState({
    id: dataWork.userSelectWorkID,
    detail_work: "",
    email: "",
    facebook: "",
    firstName: "",
    image_work_post_freelance: "",
    instagram: "",
    lastName: "",
    line: "",
    name_work: "",
    phone: "",
    price_post_work: "",
    type_work_name: "",
  });

  useEffect(() => {
    // if(checkPost){
    console.log("fakkkkk")

    axios.post(`/getworkfreelance`, sendWorkID)
      .then((res) => {
        console.log(sendWorkID);
        console.log(res);
        console.log(res.data);

        let beforeEditto = {
          detail_work: res.data.detail_work,
          email: res.data.email,
          facebook: res.data.facebook,
          firstName: res.data.firstName,
          image_work_post_freelance: res.data.image_work_post_freelance,
          instagram: res.data.instagram,
          lastName: res.data.lastName,
          line: res.data.line,
          name_work: res.data.name_work,
          phone: res.data.phone,
          price_post_work: res.data.price_post_work,
          type_work_name: res.data.type_work_name,
        }
        setvaluesWork(beforeEditto)
      });
    // console.log(valuesEditprofile);
    //   setCheck(false)
    // }detail_work: "Photoshop"
    // email: "pulawat741@hotmail.com"
    // facebook: "pulawat"
    // firstName: "Pulawat"
    // image_work_post_freelance: "Image_Work_Post_Freelance1"
    // instagram: "pulawat_u"
    // lastName: "Boonsiri"
    // line: "mumumumu"
    // name_work: "you want"
    // phone: "178234"
    // price_post_work: 3000
    // type_work_name: "Graphic & Design"
  }, []);
  // }
  console.log(valuesWork);

  return (
    <div className="Container-work">
      <div className="">
        <div className="Work-title">
          <h3>ฟรีแลนซ์ - {valuesWork.type_work_name}</h3>
        </div>
        <Row>
          <Col className="">
            <div className="Work-box-image">
              <h3 className="Work__box__image__midtext">
                รูปผลงานที่จะให้แสดง
              </h3>
            </div>
          </Col>
          <Col className="">
            <div className="Work-box-detail">
              <h3 className="font__topic__work">{valuesWork.name_work}</h3>
              <div className="font__topcif__work">
                <div className="font__tail">
                  <h3>
                    หมวดหมู่:{" "}
                    <text className="font__detail__work">{valuesWork.type_work_name}</text>{" "}
                  </h3>
                  <h3>
                    ราคาเริ่มต้น :{" "}
                    <text className="font__detail__work">
                      {valuesWork.price_post_work} บาท
                    </text>{" "}
                  </h3>
                  <h3>
                    คำอธิบาย :{" "}
                    <text className="font__detail__work">
                      {valuesWork.detail_work}
                    </text>{" "}
                  </h3>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="">
            <div className="Company-box-detail">
              <div className="box__contact__user">
                <Image
                  src="https://discountdoorhardware.ca/wp-content/uploads/2018/06/profile-placeholder-3.jpg"
                  className="img-fluid rounded-circle box__image"
                  alt="Profile Admin"
                  fluid
                />
                <div className="box__contact__text">
                  <div>
                    <h3 className="box__contact__fonttext">
                      {valuesWork.firstName} {valuesWork.lastName}
                    </h3>
                    <div>
                      <h3 className="box__contact__textline">
                        เป็นคนดีที่เธอไม่มอง
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box__contact__ct">
                <h3 className="box__contact__ct__topic">ช่องทางการติดต่อ</h3>
                <div className="box__contact__ct__topicline__top">
                  <h3 className="box__contact__ct__topicline">
                    เบอร์โทรศัพท์: {valuesWork.phone} <text></text>{" "}
                  </h3>
                  <h3 className="box__contact__ct__topicline">
                    อีเมล: {valuesWork.email} <text></text>{" "}
                  </h3>
                  <h3 className="box__contact__ct__topicline">
                    Line: {valuesWork.line} <text></text>{" "}
                  </h3>
                  <h3 className="box__contact__ct__topicline">
                    Facebook: {valuesWork.facebook} <text></text>{" "}
                  </h3>
                  <h3 className="box__contact__ct__topicline">
                    Instagram: {valuesWork.instagram} <text></text>{" "}
                  </h3>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Row, Col } from "react-grid-system";
import "./Work.css";
import Image from "react-bootstrap/Image";
import DataUser from '../../DataUser/DataUser';
import { useContext } from "react";
import axios from '../../api/axios-work';

export default function WorkFreelanceform() {
  const dataWork = useContext(DataUser)

  const sendWorkComID = {
    workpostid: dataWork.userSelectWorkID
  }

  const [valuesWorkCom, setvaluesWorkCom] = useState([]);

  useEffect(() => {
    console.log("faqqqq")

    axios.post(`/getworkcompany`, sendWorkComID)
      .then((res) => {
        console.log(sendWorkComID);
        console.log(res);
        console.log(res.data);

        let beforeEdit = res.data.map(Item => {
          return {
            workname: Item.workname,
            companyname: Item.companyname,
            companyemail: Item.companyemail,
            companyphone: Item.companyphone,
            typenamework: Item.typenamework,
            position: Item.position,
            numperson: Item.numperson,
            priceworkmin: Item.priceworkmin,
            priceworkmax: Item.priceworkmax,
            education: Item.education,
            detailwork: Item.detailwork,
            imageworkpostcompany: Item.imageworkpostcompany,
          }
        })
        setvaluesWorkCom(beforeEdit)
      });

  }, []);

  console.log(valuesWorkCom);
  console.log(valuesWorkCom.type_work_name)

  return (
    <div className="Container-work">
      {valuesWorkCom.map((item, index) => {
        return (
      <div className="">
        <div className="Work-title">
          <h3>หางาน - {item.typenamework}</h3>
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
              <h3 className="font__topic__work">ชื่องาน: {item.workname}</h3>
              <div className="font__topcif__work">
                <div className="font__tail">
                  <h3>
                    หมวดหมู่:{" "}
                    <text className="font__detail__work">{item.typenamework}</text>{" "}
                  </h3>
                  <h3>
                    ตำแหน่ง : <text className="font__detail__work">{item.position}</text>{" "}
                  </h3>
                  <h3>
                    จำนวน : <text className="font__detail__work">{item.numperson} คน</text>{" "}
                  </h3>
                  <h3>
                    เงินเดือน :{" "}
                    <text className="font__detail__work">
                      {item.priceworkmin} - {item.priceworkmax} บาท
                    </text>{" "}
                  </h3>
                  <h3>
                    วุฒิการศึกษา :{" "}
                    <text className="font__detail__work">{item.education}</text>{" "}
                  </h3>
                  <h3>
                    คำอธิบาย :{" "}
                    <text className="font__detail__work">
                      {item.detailwork}
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
                    <h3 className="box__contact__fonttext">{item.companyname}</h3>
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
                    เบอร์โทรศัพท์: {item.companyphone} <text></text>{" "}
                  </h3>
                  <h3 className="box__contact__ct__topicline">
                    อีเมล: {item.companyemail} <text></text>{" "}
                  </h3>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
       );
      })}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Row, Col } from "react-grid-system";
import "./Work.css";
import Image from "react-bootstrap/Image";
import DataUser from "../../DataUser/DataUser";
import { useContext } from "react";
import axios from "../../api/axios-work";

export default function WorkFreelanceform(props) {
  const dataWork = useContext(DataUser);

  const sendWorkID = {
    work_post_id: dataWork.userSelectWorkID,
  };

  const [valuesWork, setvaluesWork] = useState([]);

  useEffect(() => {
    axios.post(`/getworkfreelance`, sendWorkID).then((res) => {
      console.log(sendWorkID);
      console.log(res);
      console.log(res.data);

      let beforeEditto = res.data.map((Item) => {
        return {
          detail_work: Item.detail_work,
          email: Item.email,
          facebook: Item.facebook,
          firstName: Item.firstName,
          image_work_post_freelance: Item.image_work_post_freelance,
          instagram: Item.instagram,
          lastName: Item.lastName,
          line: Item.line,
          name_work: Item.name_work,
          phone: Item.phone,
          price_post_work: Item.price_post_work,
          type_work_name: Item.type_work_name,
        };
      });
      setvaluesWork(beforeEditto);
    });
  }, []);

  console.log(valuesWork);
  console.log(valuesWork.type_work_name);

  return (
    <div className="Container-work">
      {valuesWork.map((item, index) => {
        return (
          <div className="">
            <div className="Work-title">
              <h3>ฟรีแลนซ์ - {item.type_work_name}</h3>
            </div>
            <Row>
              <Col className="">
                <div className="Work-box-image">
                  {/* <h3 className="Work__box__image__midtext">
                    รูปผลงานที่จะให้แสดง
                  </h3> */}
                  <img 
                    className="work-image-set"
                    src={ "images/postfreelance/" + item.image_work_post_freelance}
                    alt="work"
                  />
                </div>
              </Col>
              <Col className="">
                <div className="Work-box-detail">
                  <h3 className="font__topic__work">
                    ชื่องาน: {item.name_work}
                  </h3>
                  <div className="font__topcif__work">
                    <div className="font__tail">
                      <h3>
                        หมวดหมู่:{" "}
                        <text className="font__detail__work">
                          {item.type_work_name}
                        </text>{" "}
                      </h3>
                      <h3>
                        ราคาเริ่มต้น :{" "}
                        <text className="font__detail__work">
                          {item.price_post_work} บาท
                        </text>{" "}
                      </h3>
                      <h3>
                        คำอธิบาย :{" "}
                        <text className="font__detail__work">
                          {item.detail_work}
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
                          {item.firstName} {item.lastName}
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
                    <h3 className="box__contact__ct__topic">
                      ช่องทางการติดต่อ
                    </h3>
                    <div className="box__contact__ct__topicline__top">
                      <h3 className="box__contact__ct__topicline">
                        เบอร์โทรศัพท์: {item.phone} <text></text>{" "}
                      </h3>
                      <h3 className="box__contact__ct__topicline">
                        อีเมล: {item.email} <text></text>{" "}
                      </h3>
                      <h3 className="box__contact__ct__topicline">
                        Line: {item.line} <text></text>{" "}
                      </h3>
                      <h3 className="box__contact__ct__topicline">
                        Facebook: {item.facebook} <text></text>{" "}
                      </h3>
                      <h3 className="box__contact__ct__topicline">
                        Instagram: {item.instagram} <text></text>{" "}
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

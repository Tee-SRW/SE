import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./Work.css";
import Image from "react-bootstrap/Image";

export default function WorkFreelanceform() {
  return (
    <div className="Container-work">
      <div className="">
        <div className="Work-title">
          <h3>ฟรีแลนต์ - Graphic & Design</h3>
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
              <h3 className="font__topic__work">ชื่องาน</h3>
              <div className="font__topcif__work">
                <div className="font__tail">
                  <h3>
                    หมวดหมู่:{" "}
                    <text className="font__detail__work">Graphic & Design</text>{" "}
                  </h3>
                  <h3>
                    ราคาเริ่มต้น :{" "}
                    <text className="font__detail__work">
                      10000 - 1000000 บาท
                    </text>{" "}
                  </h3>
                  <h3>
                    คำอธิบาย :{" "}
                    <text className="font__detail__work">
                      งานนี้เป็นอย่างไร
                      รับสอนว่ายน้ำครับสำหรับคนที่จมอยู่กับอดีต
                      เราจะวิ่งตามคนที่เรารักไปทำไมในเมื่อเรามีมอเตอร์ไซค์
                      นั้นที-เร็กซ์ ส่วนนี่ที่รัก รักน้ำรักปลา
                      รักตัวเองบ้างไอ้สัส จะลืมใครต้องใช้เวลา
                      ยามาฮาเป็นยี่ห้อมอไซค์
                      หิวก็แดกข้าวแต่อย่ากินเยอะนะระวังอ้วน ถ้าเธอง่วง
                      ก็ไปนอนไอสัสอยู่ทำควยอะไร เธอๆ เมื่อคืนเราเหนื่อยมากเลย
                      เราไปขโมยของบ้านคนอื่นมา
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
                      ศุภชัย อัศวสัมฤทธิ์
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
                    เบอร์โทรศัพท์ <text></text>{" "}
                  </h3>
                  <h3 className="box__contact__ct__topicline">
                    อีเมล <text></text>{" "}
                  </h3>
                  <h3 className="box__contact__ct__topicline">
                    Line <text></text>{" "}
                  </h3>
                  <h3 className="box__contact__ct__topicline">
                    Facebook <text></text>{" "}
                  </h3>
                  <h3 className="box__contact__ct__topicline">
                    Instagram <text></text>{" "}
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

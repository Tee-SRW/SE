import React, { useState } from "react";
import "./Profileform.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputMask from "react-input-mask";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-grid-system";
export default function Profileform(props) {
  return (
    <Container className="Container-profile">
      <div className="bgblock">
        <div className="boardblock">
          {/* <img
          src="https://discountdoorhardware.ca/wp-content/uploads/2018/06/profile-placeholder-3.jpg"
          className="rounded-circle image "
          alt="Profile Admin"
        ></img> */}
        </div>
        <div className="Profileform-inner">
          <label className="profilebox">ช่องทางการติดต่อ</label>
          <text>เบอร์โทรศัพท์</text>
        </div>
      </div>
    </Container>
  );
}

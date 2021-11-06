import React  from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "./Loginform.css";
import { Container, Row, Col } from 'react-grid-system';

export default function Loginform()  {
    return (
      <div className="Loginform-outer">
        <div className="Loginform-inner">
          <form>
            <h3>เข้าสู่ระบบ</h3>
            <div className="form-group">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>อีเมล</Form.Label>
                <Form.Control type="email" placeholder="อีเมล" />
              </Form.Group>
            </div>

            <div className="form-group spacing-top">
              <label>รหัสผ่าน</label>
              <input
                type="password"
                className="form-control spacing-top"
                placeholder="รหัสผ่าน"
              />
            </div>
            <div className="form-group spacing-top ">
              <div className="custom-control custom-checkbox spacing-top ">
                <input
                  type="checkbox"
                  className="custom-control-input spacing-right "
                  id="customCheck1"
                />
                <label className="custom-control-label spacing-top" htmlFor="customCheck1">
                จดจำฉัน
                </label>
              </div>
            </div>
            <div className="d-grid gap-2">
            <button type="submit" className="btn btn-dark btn-lg btn-block spacing-top">
              Sign in
            </button>
            </div>
            <Container>
              <Row>
                <Col>
                  <p className="haveaccount spacing spacing-top">
                  ไม่มีบัญชี
                  <Link to="/ChooseCreate">
                    <a href="#">  ใช่ไหม?</a>
                  </Link>
                  </p>
                </Col>
                <Col>
                  <p className="forgot-password spacing-right spacing-top">
                    ลืม
                    <Link to="/Forgetpassword">
                      <a href="#"> รหัสผ่าน?</a>
                    </Link>
                  </p>
                </Col>
              </Row>
            </Container>
          </form>
        </div>
      </div>
    );
  }

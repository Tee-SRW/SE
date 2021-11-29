import React from "react";
import Form from "react-bootstrap/Form";
import "./Forgetpasswordform.css";

export default function Forgetpasswordform() {
  return (
    <div className="Forgetpasswordform-outer">
      <div className="Forgetpasswordform-inner">
        <form>
          <h3>ลืมรหัสผ่าน</h3>
          <div className="text">
            <p>ไม่ต้องกังวล!</p> การรีเซ็ตรหัสผ่านของคุณเป็นเรื่องง่าย
            ป้อนที่อยู่อีเมลของคุณและเราจะส่งลิงก์เพื่อรีเซ็ตรหัสผ่านของคุณ
          </div>
          <div className="form-group spacing-top">
            <Form.Group className="mb-3 spacing-top" controlId="formBasicEmail">
              <Form.Label>อีเมล</Form.Label>
              <Form.Control type="email" placeholder="อีเมล" />
            </Form.Group>
          </div>
          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn btn-dark btn-lg btn-block spacing-top"
            >
              ส่ง
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

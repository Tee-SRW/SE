import React, { useState } from "react";
import "./Signupform.css";
import InputMask from "react-input-mask";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const eye2 = <FontAwesomeIcon icon={faEyeSlash} />;
export default function SignUp(props) {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const togglePasswordVisiblity2 = () => {
    setPasswordShown2(passwordShown2 ? false : true);
  };
  return (
    <div className="Signupform-outer">
      <div className="Signupform-inner">
        <form>
          <h3>สมัครสมาชิก</h3>

          <div className="form-group spacing-top">
            <label>ชื่อ</label>
            <input
              type="text"
              className="form-control pacing-top"
              placeholder="ชื่อ"
            />
          </div>

          <div className="form-group spacing-top">
            <label>นามสกุล</label>
            <input
              type="text"
              className="form-control spacing-top"
              placeholder="นามสกุล"
            />
          </div>

          <div className="form-group spacing-top">
            <label>อีเมล</label>
            <input
              type="email"
              className="form-control spacing-top"
              placeholder="อีเมล"
            />
          </div>
          <div className="pass-wrapper">
            <div className="form-group spacing-top">
              <label>รหัสผ่าน</label>
              <input
                type={passwordShown ? "text" : "password"}
                className="form-control "
                placeholder="รหัสผ่าน"
              />
              <i className="eyeicon" onClick={togglePasswordVisiblity}>
                {passwordShown ? eye : eye2}
              </i>
            </div>
          </div>
          <div className="pass-wrapper">
            <div className="form-group spacing-top">
              <label>ยืนยันรหัสผ่าน</label>
              <input
                type={passwordShown2 ? "text" : "password"}
                className="form-control "
                placeholder="ยืนยันรหัสผ่าน"
              />
              <i className="eyeicon2" onClick={togglePasswordVisiblity2}>
                {passwordShown2 ? eye : eye2}
              </i>
            </div>
          </div>
          <div className="form-group spacing-top">
            <label>เบอร์โทรศัพท์</label>
            <div className="form-group spacing-top">
              <InputMask
                className="form-control spacing-top"
                placeholder="xxx-xxx-xxxx"
                mask="999-999-9999"
                onChange={props.onChange}
                value={props.value}
              />
            </div>
          </div>
          <div className="form-group spacing-top">
            <div className="custom-control custom-checkbox ">
              <input
                type="checkbox"
                className="custom-control-input spacing-right"
                id="customCheck1"
              />
              <label
                className="custom-control-label spacing-top"
                htmlFor="customCheck1"
              >
                ฉันยอมรับข้อตกลงและเงื่อนไขการใช้ JobMaiFair
              </label>
            </div>
          </div>
          <div className="d-grid gap-2 spacing-top">
            <button
              type="submit"
              className="btn btn-dark btn-lg btn-block spacing-top"
            >
              สมัครสมาชิก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

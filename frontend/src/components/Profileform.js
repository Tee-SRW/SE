import React, { useState } from "react";
import "./Signupform.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
export default function SignUp() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <div className="outer">
      <div className="inner">
        <form>
          <h3>โปรไฟล์</h3>

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
                {eye}
              </i>
            </div>
          </div>
          <div className="form-group spacing-top">
            <label>ยืนยันรหัสผ่าน</label>
            <input
              type={passwordShown ? "text" : "password"}
              className="form-control "
              placeholder="ยืนยันรหัสผ่าน"
            />
          </div>
          <div className="form-group spacing-top">
            <label>เบอร์โทรศัพท์</label>
            <div className="form-group spacing-top">
            <PhoneInput
            country = "th"
            placeholder='xxx-xxx-xxx-x'
            inputStyle={{
              width: '100%',
              height: '35px',
              fontSize: '15px',
              paddingLeft: '48px',
              borderRadius: '5px'
            }}
            disableCountryCode
            disableDropdown
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

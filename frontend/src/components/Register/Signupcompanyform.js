import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signupcompanyform.css";
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
      <div className="Signupcompanyform-outer">
        <div className="Signupcompanyform-inner">
          <form>
            <h3>สร้างบัญชีบริษัท</h3>

            <div className="form-group spacing-top">
              <label>ชื่อบริษัท</label>
              <input
                type="text"
                className="form-control tiny-spacing-top"
                placeholder="ชื่อบริษัท"
              />
            </div>

            <div className="form-group spacing-top">
              <label>อีเมล</label>
              <input
                type="email"
                className="form-control tiny-spacing-top"
                placeholder="อีเมล"
              />
            </div>

            <div className="pass-wrapper">
              <div className="form-group spacing-top">
                <label>รหัสผ่าน</label>
                <input
                  type={passwordShown ? "text" : "password"}
                  className="form-control tiny-spacing-top"
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
                type="password"
                className="form-control tiny-spacing-top"
                placeholder="ยืนยันรหัสผ่าน"
              />
            </div>

            <div className="form-group spacing-top">
            <label>เบอร์โทรศัพท์</label>
            <div className="form-group tiny-spacing-top">
              <PhoneInput 
                className="form-control" 
                country="th" 
                regions={"asia"}
                inputStyle={{width: '100%',}} 
                placeholder='xxx-xxx-xxxx'
                disableCountryCode
                disableDropdown
              />
            </div>
          </div>

            <div className="form-group huge-spacing-top">
              <label>ที่อยู่</label>
              <input
                type="text"
                className="form-control tiny-spacing-top"
                placeholder="ที่อยู่"
              />
            </div>

            <div className="form-group spacing-top">
              <label>ตำบล / แขวง</label>
              <input
                type="text"
                className="form-control tiny-spacing-top"
                placeholder="ตำบล / แขวง"
              />
            </div>

            <div className="form-group spacing-top">
              <label>อำเภอ / เขต</label>
              <input
                type="text"
                className="form-control tiny-spacing-top"
                placeholder="อำเภอ / เขต"
              />
            </div>

            <div className="form-group spacing-top">
              <label>จังหวัด</label>
              <input
                type="text"
                className="form-control tiny-spacing-top"
                placeholder="จังหวัด"
              />
            </div>

            <div className="form-group spacing-top">
              <label>รหัสไปรษณีย์</label>
              <input
                type="number"
                className="form-control tiny-spacing-top"
                placeholder="รหัสไปรษณีย์"
              />
            </div>

            <div className="form-group ">
              <div className="custom-control custom-checkbox spacing-top">
                <input
                  type="checkbox"
                  className="custom-control-input spacing-right spacing-top"
                  id="customCheck1"
                />
                <label className="custom-control-label spacing-top" htmlFor="customCheck1">
                ฉันยอมรับข้อตกลงและเงื่อนไขการใช้ JobMaiFair
                </label>
              </div>
            </div>
            <div className="d-grid gap-2 spacing-top">
              <button
                type="submit"
                className="btn btn-dark btn-lg btn-block spacing-top"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signupform.css";
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
            <h3>Register</h3>

            <div className="form-group spacing">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>

            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="pass-wrapper">
              <div className="form-group">
                <label>Password</label>
                <input
                  type={passwordShown ? "text" : "password"}
                  className="form-control"
                  placeholder="Password"
                />
                <i className="eyeicon" onClick={togglePasswordVisiblity}>
                  {eye}
                </i>
              </div>
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="PhoneNumber"
                className="form-control"
                placeholder="Phone Number"
              />
            </div>
            <div className="form-group ">
              <div className="custom-control custom-checkbox ">
                <input
                  type="checkbox"
                  className="custom-control-input spacing2"
                  id="customCheck1"
                />
                <label className="custom-control-label spacing" htmlFor="customCheck1">
                ฉันยอมรับข้อตกลงและเงื่อนไขการใช้ JobMaiFair
                </label>
              </div>
            </div>
            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-dark btn-lg btn-block spacing"
              >
                Register
              </button>
            </div>
            <p className="forgot-password text-center">
              Have account{" "}
              <Link to="/Login">
                {" "}
                <a href="#"> login?</a>{" "}
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  }

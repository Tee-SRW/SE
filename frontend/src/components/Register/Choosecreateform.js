import React from "react";
import { useHistory } from 'react-router-dom';
import "./Choosecreateform.css";

export default function ChooseCreateForm() {
    const history = useHistory();

    return (
      <div className="Choosecreateform-outer">
        <div className="Choosecreateform-inner">
          <form>
            <h3>สมัครรับข้อมูล</h3>

            <div className="d-grid gap-2 btn-color spacing-top">
              <button
                type="submit"
                className="btn btn-lg color2 shadow1 spacing-top"
                onClick={()=> history.push("/sign-up")}
              >
                ผู้ใช้ทั่วไป
              </button>
            </div>

            <div className="d-grid gap-2 btn-color spacing-top">
              <button
                type="submit"
                className="btn btn-lg color2 shadow1 spacing-top"
                onClick={()=> history.push("/sign-up-company")}
              >
                บริษัท
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

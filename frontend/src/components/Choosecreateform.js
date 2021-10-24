import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./Choosecreateform.css";

export default function ChooseCreateForm() {
    const history = useHistory();

    return (
      <div className="outer">
        <div className="inner">
          <form>
            <h3>Register</h3>

            <div className="d-grid gap-2 spacing-top">
              <button
                type="submit"
                className="btn btn-dark btn-lg btn-block spacing-top"
                onClick={()=> history.push("/sign-up")}
              >
                General
              </button>
            </div>

            <div className="d-grid gap-2 spacing-top">
              <button
                type="submit"
                className="btn btn-dark btn-lg btn-block spacing-top"
                onClick={()=> history.push("/sign-up-company")}
              >
                Company
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

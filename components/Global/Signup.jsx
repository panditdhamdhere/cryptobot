import React from "react";
import { useState, useEffect } from "react";

const Signup = ({ axios, setActiveComponent, notifyError, notifySuccess }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (fieldName, e) => {
    setUser({ ...user, [fieldName]: e.target.value });
  };

  const createAccount = async (e) => {
    e.preventDefault();
    if (
      user.name == "" ||
      user.email == "" ||
      user.password == "" ||
      user.passwordConfirm == ""
    ) {
      return notifyError("All fields are required");
    }

    notifySuccess("Wait Creating Account...");

    try {
      // api call
    } catch (error) {}
  };
  return (
    <div className="techwave_fn_sign">
      <div className="sign_content">
        <h1 className="logo">Design by Pandit</h1>
        <form className="login">
          <div className="form_content">
            <div className="form_title">Sign Up</div>
            <div className="form_username">
              <label htmlFor="user_login">Name</label>
              <input
                type="text"
                className="input"
                onChange={(e) => handleChange("name", e)}
              />
            </div>
            <div className="form_username">
              <label htmlFor="user_login">Email</label>
              <input
                type="text"
                className="input"
                onChange={(e) => handleChange("email", e)}
              />
            </div>
            <div className="form_username">
              <label htmlFor="user_login">Password</label>
              <input
                type="text"
                className="input"
                onChange={(e) => handleChange("password", e)}
              />
            </div>
            <div className="form_username">
              <label htmlFor="user_login">Confirm Password</label>
              <input
                type="text"
                className="input"
                onChange={(e) => handleChange("passwordConfirm", e)}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

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
      const response = await axios({
        method: "POST",
        url: `/api/v1/user/signup`,
        withCredentials: true,
        data: {
          name: user.name,
          email: user.email,
          password: user.password,
          passwordConfirm: user.passwordConfirm,
        },
      });

      if (response.data.status == "success") {
        notifySuccess("Account Created Successfully");
        localStorage.setItem(
          "USER_MEMBERSHIP",
          response.data.data.user.membershipType
        );
        localStorage.setItem("CryptoBot_BackEnd", response.data.data.user._id);
        localStorage.setItem("CRYPTO_AUTH_TOKEN", response.data.token);
        window.location.reload();
      } else {
        notifyError("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(user);
  return (
    <div className="techwave_fn_sign">
      <div className="sign__content">
        <h1 className="logo">Design by Pandit</h1>
        <form className="login">
          <div className="form__content">
            <div className="form__title">Sign Up</div>
            <div className="form__username">
              <label htmlFor="user__login">Name</label>
              <input
                type="text"
                className="input"
                onChange={(e) => handleChange("name", e)}
              />
            </div>
            <div className="form__username">
              <label htmlFor="user__login">Email</label>
              <input
                type="text"
                className="input"
                onChange={(e) => handleChange("email", e)}
              />
            </div>
            <div className="form__username">
              <label htmlFor="user__login">Password</label>
              <input
                type="text"
                className="input"
                onChange={(e) => handleChange("password", e)}
              />
            </div>
            <div className="form__username">
              <label htmlFor="user_login">Confirm Password</label>
              <input
                type="text"
                className="input"
                onChange={(e) => handleChange("passwordConfirm", e)}
              />
            </div>

            <div className="form_alternative">
              <a
                onClick={(e) => createAccount(e)}
                className="techwave_fn_button"
              >
                <span className="">Create Account</span>
              </a>
            </div>
          </div>
        </form>

        <div className="sign__desc">
          <p>
            Not a Member ?
            <a onClick={() => setActiveComponent("Login")}>Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

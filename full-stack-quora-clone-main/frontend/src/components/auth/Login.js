import React from "react";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import logo from "../../logo_website.jpeg";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const handleSubmit = async () => {
    await signInWithPopup(auth, provider)
      .then(async (result) => {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        console.log("cmdmdslbv", result._tokenResponse);
        const { email, displayName, photoUrl } = result._tokenResponse;
        const body = {
          userName: displayName,
          photo: photoUrl,
          email: email,
        };
        await axios
          .post("/api/users", body, config)
          .then((res) => {
            console.log(res.data);
            alert(res.data.message);
          })
          .catch((e) => {
            console.log(e);
            alert("Error in adding question");
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login-container">
      <div className="login-content">
        <img src={logo} alt="logo" />
        <button onClick={handleSubmit} className="btn-login">
          Login to continue
        </button>
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import "../css/Login.css";
import { useNavigate } from "react-router-dom";
import img from "../assests/1.png";

const Login = () => {
  const nav = useNavigate();
  return (
    <div className='login-main'>
      <div className='sub-1'>
        <img src={img} height={"60%"} width={"60%"} />
      </div>
      <div className='sub-2'>
        <div className='login-card'>
          <h1>Login</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "80%",
              alignItems: "start",
              //   backgroundColor:"red"
            }}>
            <label className='label'>Username</label>
            <input type='text' className='input' />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "80%",
              alignItems: "start",
              marginTop: "10%",
              //   backgroundColor:"red"
            }}>
            <label className='label'>Password</label>
            <input type='password' className='input' />
          </div>
          <button className='button'>Login</button>
          <div
            onClick={() => nav("/create")}
            style={{
              display: "flex",
              width: "80%",
              justifyContent: "center",
              marginTop: "10%",
              fontSize: "0.8rem",
              cursor: "pointer",
              //   backgroundColor: "red",
            }}>
            <p>Don't have an account? Create one</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

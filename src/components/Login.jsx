import "./Login.css";
import giffy from "../assets/images/gif.gif";
import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GoogleIcon from "@mui/icons-material/Google";

function Login({setLogin}){

  
  return(
    <div className="login-page">
        <div className="login-container">
            <div className="login-left">
                <ArrowForwardIosIcon
                onClick={()=>setLogin(false)}
                sx={{position: "absolute",
                    top: "35px",
                    left: "60px",
                    color: "red"
                }}
                />
                <img src={giffy} alt="gif" />
            </div>
            <div className="login-right">
                <h1>Welcome!</h1>
                
                 <div className="phone-box">

                <label>Phone Number (3XXXXXXXXX)</label>

                 <div className="phone-input">
                 <span>+92</span>
                 <input
                 type="text"
                 placeholder=""
                 maxLength={10}
                />
               </div>

             </div>

                 <button className="loginn-btn">
                   LOGIN
                </button>

                <button className="google-btn">
                  <GoogleIcon />
                  <span>LOGIN WITH GOOGLE</span>
                </button>
            </div>
            
        </div>
    </div>
  )

}

export default Login;
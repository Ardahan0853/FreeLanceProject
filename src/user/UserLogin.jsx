import React from "react";
import { useState, useRef, useEffect } from "react";
import "./UserLogin.css";

function UserLogin() {
  const userRef = useRef();
  const errRef = useRef();
  // Submit Part
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!success) {
      popup();
    }
  };
  // User Information Part

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  // Success Part
  const [success, setSuccess] = useState(true);

  //
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // Retrying to Login
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  // Popup Part
  const [popupStyle, showPopup] = useState("hide");
  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 2000);
  };

  return (
    <div className="page">
      <div className="cover">
        <h1>Üye Girişi</h1>
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          ref={userRef}
          onChange={(e) => setUser(e.target.value)}
          value={user}
        />
        <input
          type="password"
          placeholder="Şifre"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
        />

        <div className="login-btn" onClick={handleSubmit}>
          Giriş Yap!
        </div>

        <div className={popupStyle}>
          <h3>Hatalı Giriş</h3>
          <p>Kullanıcı Adı yada Şifre hatalı!</p>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;

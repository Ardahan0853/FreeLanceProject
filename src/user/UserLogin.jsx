import React from "react";
import { useState, useRef, useEffect } from "react";
import "./UserLogin.css";
import axios from "axios";

function UserLogin() {
  const userRef = useRef();

  // Submit Part
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/login", { username, password });
      setUser(res.data);
    } catch (err) {
      popup();
    }
  };
  // User Information Part

  const [user, setUser] = useState("Üye Girişi");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // Popup Part
  const [popupStyle, showPopup] = useState("hide");
  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 2000);
  };

  return (
    <div className="page">
      <div className="cover flex justify-center">
        <h2 className="text-center text-yellow-500">{user}</h2>
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          ref={userRef}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          placeholder="Şifre"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
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

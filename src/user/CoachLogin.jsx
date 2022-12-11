import React from "react";
import { useState, useRef, useEffect } from "react";
import "./UserLogin.css";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { redirect } from "react-router-dom";

function UserLogin() {
  const userRef = useRef();
  // Expire olan tokeni refresh etme.
  const refreshToken = async () => {
    try {
      const res = await axios.post("/refresh", { token: user.refreshToken });
      setUser({
        ...user,
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      let currentDate = new Date();
      const decodedToken = jwt_decode(user.accessToken);
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        const data = await refreshToken();
        config.headers["authorization"] = "Bearer " + data.accessToken;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Submit Part
  const handleSubmit = async (e) => {
    // e.preventDefault();
    if (e) redirect("/dashboard");
    else popup();
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

  // Delete
  // const handleDelete = async (id) => {
  //   try {
  //     await axiosJWT.delete("/api/remove/" + id, {
  //       headers: { authorization: "Bearer " + user.accessToken },
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <div className="page">
      <div className="cover flex justify-center">
        <h2 className="text-center text-yellow-500" key={user.id}>
          {user.username}
        </h2>
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
          <a href="https://fitbodyclub.netlify.app/dashboard">Giriş Yap!</a>
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

import React from "react";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=<05434242415>&text=<FitBody!>",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      style={{
        background:
          "linear-gradient(to right, var(--yellow), var(--yellowDark))",
        border: "none",
        borderRadius: "1rem",
        padding: "1rem 2rem",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp.png"
        alt="WhatsApp"
        style={{
          width: "2rem",
          marginRight: "1rem",
        }}
      />
      <span>WhatsApp'a Bağlan</span>
    </button>
  );
};

export default WhatsAppButton;

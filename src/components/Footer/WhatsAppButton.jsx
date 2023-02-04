import React from "react";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=<05434242415>&text=<message>",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      style={{
        background: "linear-gradient(to right, #ffc94d, #fffd7e)",
        border: "none",
        borderRadius: "10px",
        padding: "px 20px",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp.png"
        alt="WhatsApp"
      />
    </button>
  );
};

export default WhatsAppButton;

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div
      className=" text-center "
      style={{
        backgroundColor: "#464242",
        color: "white",
        fontFamily: "Montserrat",
        fontSize: '16px'
      }}
    >
      <div>
        <span className="climax mt-5">ClimaX</span> Movie App
      </div>
      <div>©2023, Movie, Inc. or its Affiliates</div>
    </div>
  );
};

export default Footer;

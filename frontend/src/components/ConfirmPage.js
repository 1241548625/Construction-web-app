import React from "react";
import Navbar from "./Navbar";
import CheckMark from "../asset/CheckMark.jpg";
import "./ConfirmPage.css";

const ConfirmPage = () => {
  return (
    <div>
      <Navbar />
      <div className="confirm-message">
        <img src={CheckMark} className="check-pic" />
        <p>
          Thank you for considering Construction Inc for your construction
          needs. We look forward to the possibility of working with you.
        </p>
      </div>
    </div>
  );
};

export default ConfirmPage;

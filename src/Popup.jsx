import React from "react";

const Popup = ({ openPopup, togglePopup }) => {
  return (
    <div className={`popup ${openPopup ? "open" : ""}`}>
      <div className="popupBody">
        <div className="popupContent">
          <span onClick={togglePopup} className="closePopup">
            +
          </span>
          <h1 className="popupTitle">POPUP</h1>
          <span className="popupItem">popular</span>
          <span className="popupItem">price</span>
          <span className="popupItem">name</span>
        </div>
      </div>
      <div onClick={togglePopup} className="overlay" />
    </div>
  );
};

export default Popup;

import React from "react";

const Popup = ({ openPopup, togglePopup }) => {
  const [activeSort, setActiveSort] = React.useState(0);
  const changeActiveSort = (index) => {
    setActiveSort(index);
  };

  const sortItems = ["popular", "price", "name"];

  let sortItem = sortItems.map((e, index) => (
    <p
      onClick={() => changeActiveSort(index)}
      className={`popupItem ${activeSort === index ? "active" : ""}`}
      key={index}
    >
      {e}
    </p>
  ));

  return (
    <div className={`popup ${openPopup ? "open" : ""}`}>
      <div className="popupBody">
        <div className="popupContent">
          <span onClick={togglePopup} className="closePopup">
            +
          </span>
          <h1 className="popupTitle">POPUP</h1>
          {sortItem}
        </div>
      </div>
      <div onClick={togglePopup} className="overlay" />
    </div>
  );
};

export default Popup;

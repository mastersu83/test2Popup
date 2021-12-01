import "./App.css";
import Popup from "./Popup";
import React from "react";

function App() {
  const [openPopup, setOpenPopup] = React.useState(false);

  const togglePopup = () => {
    setOpenPopup(!openPopup);
  };

  return (
    <div className="App">
      <div className="container">
        <button onClick={togglePopup}>popup</button>
        <Popup openPopup={openPopup} togglePopup={togglePopup} />
      </div>
    </div>
  );
}

export default App;

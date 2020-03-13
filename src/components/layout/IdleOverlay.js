import React from "react";
import "./style.scss";
import clock from "../../resources/icons/clock.png";

const IdleOverlay = props => {
  return (
    <>
      <div className="overlay">
        <div className="ghost popup linear-gradient">
          <div className="popup-content">
            <span className="title">
              <img src={clock} alt="" className="clock-icon" />
              <span className="popup-title">Your session will expire soon</span>
            </span>
            <span className="popup-prompt">
              Please click Continue to keep working
            </span>
            <button className="check-idle" onClick={props.func}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IdleOverlay;

import React from "react";
import "../styles/Intro.css";
const Intro = () => {
  return (
    <>
      <div className="header">
        <div className="name">FlashPanels</div>

        <div className="p1">
          <div className="p2">Features</div>
          <div className="p2">Pricing</div>
          <div className="p2">Demo</div>
        </div>
        <button className="btn">Sign Up</button>
      </div>
      <div className="cntnt">
        <div style={{ padding: "30px" }}>
          <h1>Ignite Your SMM Business</h1>
          <h1>with the Ultimate Solution!</h1>
        </div>
        <p style={{ textAlign: "center", fontSize: "17px" }}>
          Unleash Your Entrepreneurial Spirit: Create Your Thriving Digital
          Empire with Global SMM Services!
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button className="btn2" style={{ margin: "10px" }}>
            Get Your $2 First Month
          </button>
          <button className="btn2" style={{ margin: "10px" }}>
            See Pricing
          </button>
        </div>
        <div style={{ textAlign: "center", padding: "20px" }}>
          ⭐️⭐️⭐️⭐️⭐️ Years of Exceptional 5-Star Service
        </div>
      </div>
    </>
  );
};

export default Intro;

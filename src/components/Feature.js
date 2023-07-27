import React from "react";
import Card from "react-bootstrap/Card";
import myImage from "../img/img.jpg";

import "../styles/feature.css";
const Feature = () => {
  return (
    <div className="feature">
      <h1>Efficiency & Cost</h1>
      <h1>Savings with Our SMM</h1>
      <h1>Panels</h1>
      <p style={{ textAlign: "center", fontSize: "17px" }}>
        Unleash Your Entrepreneurial Spirit: Create Your Thriving Digital Empire
        with Global SMM Services!
      </p>
      <div className="card1">
        <Card style={{ width: "38vh", height: "50vh" }}>
          <Card.Img variant="top" src={myImage} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "38vh", height: "50vh" }}>
          <Card.Img variant="top" src={myImage} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "38vh", height: "50vh" }}>
          <Card.Img variant="top" src={myImage} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="feature2">
        <div className="left">
          <p style={{ fontSize: "2.4rem" }}>
            How we help you get the best solution?
          </p>
          <div style={{ marginTop: "4rem" }}>
            <h2>Gain Knowledge</h2>
            <h2>about panel growth</h2>
            <h2>security</h2>
          </div>
        </div>
        <div className="right">
          <div className="elmnt1">
            <h5>Trusted by partners and providers</h5>
          </div>
          <div className="elmnt1">
            <h5>No programming skills needed</h5>
          </div>
          <div className="elmnt1">
            <h5>Reasonable & Affordable Pricing</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

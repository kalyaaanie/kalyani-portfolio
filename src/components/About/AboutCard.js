import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kalyani Pathak </span>
            from <span className="purple"> Indore, India.</span>
            <br />
            I am currently pursuing my B.Tech in Computer Science from IET DAVV Indore (2022-2026)
            <br />

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
         
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

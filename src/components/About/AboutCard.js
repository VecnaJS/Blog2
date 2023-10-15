import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yiğit Güneş </span>
            I live in <span className="purple"> Turkey.</span>
            <br /> I'm doing an associate Degree in <span className="purple">computer and software</span>
            <br/>  and I'm also preparing for<span className="purple"> software engineering.</span> 
            <br />
            I am also currently working as a software developer on various platforms.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "we'll see you soon.."{" "}
          </p>
          <footer className="blockquote-footer">Senior Vecna</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

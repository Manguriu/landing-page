import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

function FooterComponent() {
  return (
    <div className="main">
      <Container>
        <div>
          <div className="row">
            <div className="col">
              <h4> things</h4>
              <ul className=" list-list">
                <li>heloo</li>
              </ul>
            </div>
            <div className="col">
              <h4> Stuff </h4>
              <ul className=" list-list">
                <li>heloo</li>
              </ul>
            </div>
            <div className="col">
              <h4> Other stuff </h4>
              <ul className=" list-list">
                <li>heloo</li>
              </ul>
            </div>
            <div></div>
          </div>
          <hr />
          <div className="row">
            <p className="small-col">
              &copy;{new Date().getFullYear()} Writers arena| Terms Of Service |
              All Rights Reserved | Privacy{" "}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default FooterComponent;

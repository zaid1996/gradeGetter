import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../../App.css";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom"
import "./index.css";
import NavBar from "../NavBar/Navigation";
import Footer from "../Footer"
class AboutUs extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <br />
        <br />
        <br />
        <br />
        <br />

        <center>
          {" "}
          <h1 className="font-Maax-Bold">
            Best Online Tutoring Platform. Try It!
          </h1>
        </center>
        <br />
        <br />

        <center>
          {" "}
          <div style={{ position: "relative" }}>
            <input
              style={{ display: "inline-block" }}
              type="email"
              className="form-control"
              placeholder="Your e-mail"
            />
            <MDBBtn
              className="btnColor"
              style={{
                display: "inline-block",
                width: "200px",
                height: "60px",
                fontFamily: "Maax-Bold",
                fontSize: "17px"
              }}
            >
              Get Started
            </MDBBtn>
          </div>
          <br />
          <br />
        </center>
        <MDBContainer>
          <MDBRow>
            <MDBCol size="1"></MDBCol>
            <MDBCol size="10">
              <img
                style={{ height: "100%", width: "100%" }}
                src={require("../../Images/tryIt.png")}
              />
            </MDBCol>
            <MDBCol size="1"></MDBCol>
          </MDBRow>
        </MDBContainer>
        <center>
          <br />
          <br />
          <br />
          <br />
          <Link to="/demoStep1" >
          <img
            style={{ height: "80px", width: "300px" }}
            src={require("../../Images/GetStarted.png")}
          />
          </Link>
        </center>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer/>
      </div>
    );
  }
}

export default AboutUs;

import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput
} from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import ImageUploader from "react-images-upload";
import "../../App.css";
import "../universal.css";
import Accordion from "./Acco";
import "../FAQ/styles.css";
import { blockStatement } from "@babel/types";

class ChoosePayment extends Component {
  render() {
    let title1 = (
      <span
        style={{ color: "white", fontFamily: "Maax-Medium", fontSize: "20px" }}
      >
        What next after entering payment information?
      </span>
    );
    let title2 = (
      <span style={{ color: "white", fontFamily: "Maax", fontSize: "20px" }}>
        How do I get match with tutor?
      </span>
    );
    let title3 = (
      <span style={{ color: "white", fontFamily: "Maax", fontSize: "20px" }}>
        How do I know who my tutor is?
      </span>
    );

    let paypal = (
      <span style={{ fontFamily: "Maax", width: "100%" }}>
        <img src={require("../../Images/paypal.png")} /> Paypal
      </span>
    );
    let creditCard = (
      <span style={{ fontFamily: "Maax", width: "100%" }}>
        <img src={require("../../Images/creditCard.png")} /> Credit Card
      </span>
    );
    return (
      <div>
        <MDBRow>
          <MDBCol
            size="4"
            className="BG"
            style={{ height: window.innerHeight, width: "100%" }}
          >
            <div style={{ height: "100%" }}>
              <a>
                {" "}
                <img
                  style={{ margin: "17px" }}
                  src={require("../../Images/arrow.png")}
                />
              </a>{" "}
              <br />
              <br />
              <div
                className="academic_front_txt"
                style={{
                  //   zIndex: "-1",
                  position: "relative",
                  marginLeft: "12%"
                }}
              >
                <p
                  style={{
                    fontSize: "50px",
                    fontFamily: "Maax-Bold",
                    color: "white"
                  }}
                >
                  Payment
                  <br />
                  Information
                </p>
                <img
                  style={{
                    verticalAlign: "bottom",
                    position: "absolute",
                    bottom: "0",
                    marginLeft: "35px"
                  }}
                  src={require("../../Images/dots.png")}
                />

                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img
                    style={{ height: "30px", width: "30px" }}
                    src={require("../../Images/roundTick.png")}
                  />
                  <p
                    style={{
                      color: "white",
                      fontSize: "17px",
                      marginLeft: "10px"
                    }}
                  >
                    $34.99/hr flat pay as you go rates
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img
                    style={{ height: "30px", width: "30px" }}
                    src={require("../../Images/roundTick.png")}
                  />
                  <p
                    style={{
                      color: "white",
                      fontSize: "17px",
                      marginLeft: "10px"
                    }}
                  >
                    We only charge your card after the lesson is completed and
                    your 100% satisfied{" "}
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img
                    style={{ height: "30px", width: "30px" }}
                    src={require("../../Images/roundTick.png")}
                  />
                  <p
                    style={{
                      color: "white",
                      fontSize: "17px",
                      marginLeft: "10px"
                    }}
                  >
                    Cancel any time
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img
                    style={{ height: "30px", width: "30px" }}
                    src={require("../../Images/roundTick.png")}
                  />
                  <p
                    style={{
                      color: "white",
                      fontSize: "17px",
                      marginLeft: "10px"
                    }}
                  >
                    100% tutor satisfaction
                  </p>
                </div>
               
                <br />
              </div>{" "}
              <div
                  style={{
                    verticalAlign: "bottom",
                    position: "absolute",
                    bottom: "0",
                    marginLeft: "12%",
                    marginRight:'3%'
                  }}
                >
                  <Accordion title={title1} content="Will add details later." />
                  <Accordion title={title2} content="Will add details later." />
                  <Accordion title={title3} content="Will add details later." />
                </div>
            </div>
          </MDBCol>

          <MDBCol xl="8" l="8" md="8" sm="12" xs="12">
            <div className="logoSecond">
              <img
                style={{ margin: "17px", height: "55px" }}
                src={require("../../Images/logo.png")}
              />
              <br />
            </div>
            <div className="whenBig">
              <br />
              <br />
              <br />
              <br />
            </div>
            <div className="whenSmall">
              <br />

              <div style={{ width: "80%", marginLeft: "11%" }}>
                <MDBRow>
                  <MDBCol size="3">
                    <strike style={{ color: "#23A4EF" }}>
                      {" "}
                      <p
                        style={{
                          fontFamily: "Maax-Medium",
                          fontSize: "13px",
                          color: "#23A4EF",
                          borderBottom: "1px solid #23A4EF"
                        }}
                      >
                        ACADAMICS
                      </p>{" "}
                    </strike>
                  </MDBCol>
                  <MDBCol size="3">
                    <strike style={{ color: "#23A4EF" }}>
                      {" "}
                      <p
                        style={{
                          fontFamily: "Maax-Medium",
                          fontSize: "13px",
                          color: "#23A4EF",
                          borderBottom: "1px solid #23A4EF"
                        }}
                      >
                        DATE
                      </p>{" "}
                    </strike>
                  </MDBCol>
                  <MDBCol size="3">
                    <strike style={{ color: "#23A4EF" }}>
                      {" "}
                      <p
                        style={{
                          fontFamily: "Maax-Medium",
                          fontSize: "13px",
                          color: "#23A4EF",
                          borderBottom: "1px solid #23A4EF"
                        }}
                      >
                        PROFILE
                      </p>{" "}
                    </strike>
                  </MDBCol>
                  <MDBCol size="3">
                    <p
                      style={{
                        fontFamily: "Maax-Medium",
                        fontSize: "13px",
                        color: "#23A4EF",
                        borderBottom: "1px solid #23A4EF"
                      }}
                    >
                      PAYMENT
                    </p>
                  </MDBCol>
                </MDBRow>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
            <div style={{ marginLeft: "11%", marginRight: "5%" }}>
              <MDBRow>
                <MDBCol xl="10" l="12" md="12" sm="12" xs="12">
                  <p className="emailTXT">Choose Payment Method</p>
                </MDBCol>
              </MDBRow>

              <MDBRow style={{ marginTop: "-10px" }}>
                <MDBCol xl="6" l="6" md="6" sm="12" xs="12">
                  <div className="radio_toolbar" style={{ marginTop: "4%" }}>
                    <input
                      type="radio"
                      id="computer"
                      name="radioFruit"
                      value="computer"
                    />
                    <label for="computer">{creditCard}</label>
                    <img
                      style={{
                        zIndex: "-1",
                        position: "absolute",
                        marginLeft: "-325px",
                        marginTop: "10px"
                      }}
                      src={require("../../Images/buttonDots.png")}
                    />
                  </div>
                </MDBCol>
                <MDBCol xl="6" l="6" md="6" sm="12" xs="12">
                  <div className="radio_toolbar" style={{ marginTop: "4%" }}>
                    <input
                      type="radio"
                      id="computer"
                      name="radioFruit"
                      value="computer"
                    />
                    <label for="computer">{paypal}</label>
                    <img
                      style={{
                        zIndex: "-1",
                        position: "absolute",
                        marginLeft: "-325px",
                        marginTop: "10px"
                      }}
                      src={require("../../Images/buttonDots.png")}
                    />
                  </div>
                </MDBCol>
              </MDBRow>

              <br />
            </div>
            <br />
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default ChoosePayment;

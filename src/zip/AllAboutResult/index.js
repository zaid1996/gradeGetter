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
import StarRatings from "react-star-ratings";

import "../../App.css";
import "../universal.css";
import { blockStatement } from "@babel/types";

class AllAboutResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 3
    };
  }
  changeRating(newRating, name) {
    this.setState({
      rating: newRating
    });
  }
  render() {
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
              <br />
              <br />
              <br />
              <br />
              <br />
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
                  All about
                  <br />
                  results
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    fontFamily: "Maax",
                    color: "white"
                  }}
                >
                  If you like your tutor at the completion of your first lesson,
                  then that would be your permanent tutor for that semester.
                  However, if the tutor wasn't a good fit, we will credit you
                  back for that lesson and assign you a new tutor at no
                  additional cost.
                </p>
                <br />
                <img
                  style={{
                    verticalAlign: "bottom",
                    position: "absolute",
                    bottom: "0",
                    marginLeft: "35px"
                  }}
                  src={require("../../Images/dots.png")}
                />
              </div>{" "}
            </div>
          </MDBCol>

          <MDBCol xl="8" l="8" md="8" sm="12" xs="12">
            <div className="logoSecond">
              <img
                style={{ margin: "17px", height: "55px" }}
                src={require("../../Images/logo.png")}
              />
              <br />

              <p className="emailTXT"> All About Results</p>
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
                    <p
                      style={{
                        fontFamily: "Maax-Medium",
                        fontSize: "13px",
                        color: "#23A4EF",
                        borderBottom: "1px solid #23A4EF"
                      }}
                    >
                      PROFILE
                    </p>
                  </MDBCol>
                  <MDBCol size="3">
                    <p
                      style={{
                        fontFamily: "Maax-Medium",
                        fontSize: "13px",
                        opacity: "0.1"
                      }}
                    >
                      PAYMENT
                    </p>
                  </MDBCol>
                </MDBRow>
              </div>
              <br />
              <br />
            </div>
            <div style={{ marginLeft: "11%" }}>
              <MDBRow>
                <MDBCol xl='8' l='8' md='8' sm='10'>
                  <div className="home-clients-div" style={{ }}>
                    <MDBRow>
                      <MDBCol size="3" style={{ paddingLeft: "20px" }}>
                        <center>
                          <img
                            src={require("../../Images/AL.png")}
                            className="home-clients-pp"
                          ></img>
                        </center>
                      </MDBCol>
                      <MDBCol size="9" style={{}}>
                        <div
                          style={{
                            lineHeight: "15px",
                            marginLeft: "10px",
                            display: "flex",
                            flexDirection: "column"
                          }}
                        >
                          <p
                            className="font-Maax"
                            style={{ marginTop: "20px", float: "left" }}
                          >
                            <span style={{}} className="font-Maax-Bold">
                              Alex Tyshchenko .
                            </span>
                            from Aledo, TX
                          </p>
                          <div style={{ position: "relative" }}>
                            <p
                              style={{
                                textAlign: "left",
                                display: "inline-block",
                                marginRight: "10px",
                                color: "#7B88A0 "
                              }}
                              className="font-Maax"
                            >
                              Knowledge:{" "}
                            </p>
                            <StarRatings
                              rating={this.state.rating}
                              starRatedColor="#23A4EF"
                              numberOfStars={5}
                              isSelectable={false}
                              starDimension="18px"
                              starSpacing="2px"
                              name="rating"
                              style={{
                                display: "inline-block"
                              }}
                            />
                          </div>
                          <div style={{ position: "relative" }}>
                            <p
                              style={{
                                textAlign: "left",
                                display: "inline-block",
                                marginRight: "10px",
                                color: "#7B88A0 "
                              }}
                              className="font-Maax"
                            >
                              Presentation:
                            </p>
                            <StarRatings
                              rating={this.state.rating}
                              starRatedColor="#23A4EF"
                              numberOfStars={5}
                              isSelectable={false}
                              starDimension="18px"
                              starSpacing="2px"
                              name="rating"
                              style={{
                                display: "inline-block"
                              }}
                            />
                          </div>
                        </div>
                      </MDBCol>
                    </MDBRow>
                    <div style={{ padding: "25px", paddingTop: "10px" }}>
                      <p style={{ color: "#083349", fontSize: "18px" }}>
                        Jordan did a great jon in tutoring me. He listened to my
                        problems and questions carefully and answered them
                        thoughly. He was easy to work with and excited to help
                        me with my goals. He was very knowledgeable and quick to
                        help me find solutions.
                      </p>
                    </div>
                    <div>
                      <p
                        className="home-client-date font-Maax"
                        style={{ color: "#7B88A0 " }}
                      >
                        March 19, 2019
                      </p>
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>

              <MDBRow>
                  <MDBCol size='12'>
                      <p style={{opacity:'0.4'}}>
                      *Students who use GradeGetter are likely to develop better study habits and improve grades
                      </p>
                  </MDBCol>
              </MDBRow>

              <br />

              <MDBRow>
                <MDBCol size="6">
                  <a>
                    <img src={require("../../Images/back.png")} />
                  </a>
                </MDBCol>
                <MDBCol size="5">
                  <a>
                    <img
                      style={{ width: "100%", height: "90%" }}
                      src={require("../../Images/ContinueBtn.png")}
                    />
                  </a>
                </MDBCol>
              </MDBRow>
            </div>
            <br />
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default AllAboutResult;

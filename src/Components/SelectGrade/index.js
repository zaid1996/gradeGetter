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
import "../../App.css";
import "./index.css";
import { Link } from "react-router-dom";


class SelectGrade extends Component {
  state = {};

  render() {
    let subject_label = (
      <span style={{ fontFamily: "Maax", width: "100%", opacity: "0.4" }}>
        <img src={require("../../Images/shopping-list.png")} /> Type Subjects
      </span>
    );
    let male = (
      <span style={{ fontFamily: "Maax-Bold", width: "100%" }}>
        <img src={require("../../Images/male.png")} /> Male
      </span>
    );
    let female = (
      <span style={{ fontFamily: "Maax-Bold", width: "100%" }}>
        <img src={require("../../Images/female.png")} /> Female
      </span>
    );
    let either = (
      <span style={{ fontFamily: "Maax-Bold", width: "100%" }}>
        <img src={require("../../Images/either.png")} /> Either
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
              <Link to="/" >
              <a>
                {" "}
                <img
                  style={{ margin: "17px" }}
                  src={require("../../Images/arrow.png")}
                />
              </a>{" "}
              </Link>
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
                  Academic &
                  <br /> tutoring needs
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    fontFamily: "Maax",
                    color: "white"
                  }}
                >
                  Over 10,000 verified background checked U.S based tutors ready
                  to work you
                </p>
                <br />
                <img
                  style={{
                    verticalAlign: "bottom",
                    position: "absolute",
                    bottom: "0",
                    margin: "15px"
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

              <p className="emailTXT">
                {" "}
                Academic &
                <br /> tutoring needs
              </p>
            </div>
            <div className="whenBig">
              <br />
              <br />
              <br />
              <br />
            </div>
            <div className="whenSmall">
            
              <br />
              <br />
              <div style={{width:'80%', marginLeft:'11%'}}>
              <MDBRow>
           
                  <MDBCol size='3'>
                      <p style={{fontFamily:'Maax-Medium', fontSize:'13px', color:'#23A4EF', borderBottom:'1px solid #23A4EF'}}>ACADAMICS</p>
                  </MDBCol>
                  <MDBCol size='3'>
                  <p style={{fontFamily:'Maax-Medium', fontSize:'13px', opacity:'0.1'}}>DATE</p>
                  </MDBCol>
                  <MDBCol size='3'>
                  <p style={{fontFamily:'Maax-Medium', fontSize:'13px', opacity:'0.1'}}>PROFILE</p>
                  </MDBCol>
                  <MDBCol size='3'>
                  <p style={{fontFamily:'Maax-Medium', fontSize:'13px', opacity:'0.1'}}>PAYMENT</p>
                  </MDBCol>
                 
              </MDBRow>
              </div>
              <br />
              <br />
              <br />
              <br />
            </div>

            <MDBRow className="marginLeftt">
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
              <MDBCol xl="10" l="12" md="12" sm="12" xs="12">
                <p className="emailTXT">Select grade level of students</p>
              </MDBCol>
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
              <MDBCol xl="5" l="12" md="12" sm="12" xs="12">
                <div className="radio_toolbar" style={{ marginLeft: "20px" }}>
                  <input
                    type="radio"
                    id="highSchool"
                    name="radioFruit"
                    value="highSchool"
                  />
                  <label for="highSchool">High School</label>
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
              <MDBCol xl="5" l="12" md="12" sm="12" xs="12">
                <div className="radio_toolbar" style={{ marginLeft: "20px" }}>
                  <input
                    type="radio"
                    id="middleSchool"
                    name="radioFruit"
                    value="middleSchool"
                  />
                  <label for="middleSchool">Middle School</label>
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
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
            </MDBRow>
            <br />
            <br />
            <MDBRow>
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
              <MDBCol xl="5" l="12" md="12" sm="12" xs="12">
                <div className="radio_toolbar" style={{ marginLeft: "20px" }}>
                  <input
                    type="radio"
                    id="elementrySchool"
                    name="radioFruit"
                    value="elementrySchool"
                  />
                  <label for="elementrySchool">Elementry School</label>
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
              <MDBCol xl="5" l="12" md="12" sm="12" xs="12">
                <div className="radio_toolbar" style={{ marginLeft: "20px" }}>
                  <input
                    type="radio"
                    id="college"
                    name="radioFruit"
                    value="college"
                  />
                  <label for="college">College</label>
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
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
            </MDBRow>
            <br />
            <br />
            <MDBRow>
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
              <MDBCol xl="5" l="12" md="12" sm="12" xs="12">
                <div className="radio_toolbar" style={{ marginLeft: "20px" }}>
                  <input
                    type="radio"
                    id="testPrep"
                    name="radioFruit"
                    value="testPrep"
                  />
                  <label for="testPrep">Test Prep</label>
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
              <MDBCol xl="5" l="12" md="12" sm="12" xs="12">
                <div className="radio_toolbar" style={{ marginLeft: "20px" }}>
                  <input
                    type="radio"
                    id="computer"
                    name="radioFruit"
                    value="computer"
                  />
                  <label for="computer">Computer</label>
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
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
            </MDBRow>
            <br />
            <br />
            <MDBRow>
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
              <MDBCol xl="5" l="12" md="12" sm="12" xs="12">
                <div
                  className="radio_toolbar"
                  style={{ position: "relative", marginLeft: "20px" }}
                >
                  <input
                    type="radio"
                    id="language"
                    name="radioFruit"
                    value="language"
                  />
                  <label for="language">Language</label>
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

              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
            </MDBRow>
            <br />
            <br />
            <br />
            <br />

            <MDBRow className="marginLeftt">
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
              <MDBCol xl="10" l="12" md="12" sm="12" xs="12">
                <p className="emailTXT">Subjects</p>
              </MDBCol>
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
            </MDBRow>

            <MDBRow className="marginLeftt">
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
              <MDBCol xl="10" l="12" md="12" sm="12" xs="12">
                <div style={{ backgroundColor: "#fafbfc" }}>
                  <MDBInput
                    style={{
                      width: "100%",
                      height: "60px",
                      zIndex: "1"
                    }}
                    label={subject_label}
                    outline
                    size="lg"
                  />
                </div>
                <div>
                  <img
                    style={{
                      position: "relative",
                      zIndex: "-1",
                      width: "100%",
                      height: "40px",
                      marginLeft: "2%",
                      marginTop: "-80px"
                    }}
                    src={require("../../Images/subjectDots.png")}
                  />
                </div>
              </MDBCol>

              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
            </MDBRow>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <MDBRow className="marginLeftt">
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
              <MDBCol xl="10" l="12" md="12" sm="12" xs="12">
                <p className="emailTXT">Additional Information</p>
              </MDBCol>
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
            </MDBRow>

            <MDBRow className="marginLeftt">
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
              <MDBCol xl="10" l="12" md="12" sm="12" xs="12">
                <div style={{ backgroundColor: "#fafbfc" }}>
                  <textarea
                    className="additional_info"
                    style={{
                      width: "100%",
                      height: "150px",
                      zIndex: "1"
                    }}
                    placeholder=" What additional information would you like the tutor to know about the student (optional)"
                    outline
                    size="lg"
                  />
                </div>
                <div>
                  <img
                    style={{
                      position: "relative",
                      zIndex: "-1",
                      width: "100%",
                      marginLeft: "2%",
                      marginTop: "-50px"
                    }}
                    src={require("../../Images/subjectDots.png")}
                  />
                </div>
              </MDBCol>

              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
            </MDBRow>
            <br />
            <br />
            <br />
            <MDBRow className="marginLeftt">
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
              <MDBCol xl="10" l="12" md="12" sm="12" xs="12">
                <p className="emailTXT">Preference on the type of tutor</p>
              </MDBCol>
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol xl="1" l="1" md="1" sm="1" xs="1"></MDBCol>
              <MDBCol xl="5" l="5" md="5" sm="5" xs="5">
                <div className="gender_toolbar" style={{ marginLeft: "20px" }}>
                  <input
                    type="radio"
                    id="male"
                    name="radioGender"
                    value="male"
                  />
                  <label for="male">{male}</label>
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
              <MDBCol xl="5" l="5" md="5" sm="5" xs="5">
                <div className="gender_toolbar" style={{ marginLeft: "20px" }}>
                  <input
                    type="radio"
                    id="female"
                    name="radioGender"
                    value="female"
                  />
                  <label for="female">{female}</label>
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
              <MDBCol xl="1" l="1" md="1" sm="1" xs="1"></MDBCol>
            </MDBRow>
            <br />
            <br />

            <MDBRow>
              <MDBCol xl="1" l="1" md="1" sm="1" xs="1"></MDBCol>
              <MDBCol xl="5" l="5" md="5" sm="5" xs="5">
                <div className="gender_toolbar" style={{ marginLeft: "20px" }}>
                  <input
                    type="radio"
                    id="either"
                    name="radioGender"
                    value="either"
                  />
                  <label for="either">{either}</label>
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
            <br />
            <br />
            <br />
            <br />
            <hr style={{ border: "1px solid #D8D8D8" }} />
            <br />
            <br />
            <br />

            <MDBRow>
              <MDBCol size="1"></MDBCol>
              <MDBCol size="5">
              <Link to="/" >
                <a>
                  <img src={require("../../Images/back.png")} />
                </a>
                </Link>
              </MDBCol>
              <MDBCol size="5">
                <a>
                <Link to="/timeAndDate" >
                  <img
                    style={{ width: "100%", height: "90%" }}
                    src={require("../../Images/ContinueBtn.png")}
                  />
                  </Link>
                </a>
              </MDBCol>
              <MDBCol size="1"></MDBCol>
            </MDBRow>
            <br />
            <br />
            <br />
            <br />
            <br />
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default SelectGrade;

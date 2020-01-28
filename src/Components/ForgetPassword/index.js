import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../../App.css";
import "./index.css";

class ForgetPassword extends Component {
  state = {};
 
  render() {
    let envo = <span style={{ fontFamily:'Maax', width: "100%" }}><img src={require("../../Images/email.png")}/> Type Your E-mail</span>;
    return (
      <div>
        <MDBRow>
          <MDBCol
            size="4"
            className="BG"
            style={{ height: window.innerHeight, width: "100%" }}
          >
            <div style={{ position: "relative", height: "100%" }}>
              <img
                style={{ margin: "17px" }}
                src={require("../../Images/logo.png")}
                className="nav-bar-logo"
              />

              <center>
                {" "}
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontFamily: "Maax",
                      color: "white"
                    }}
                  >
                    {" "}
                    TOP ARTICLE FROM BLOG
                  </p>
                  <p
                    style={{
                      fontSize: "26px",
                      fontFamily: "Maax-Bold",
                      color: "white"
                    }}
                  >
                    6 Simple Ways You Can Use
                    <br /> Neuroscience to Increase
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontFamily: "Maax",
                      color: "white"
                    }}
                  >
                    The tutor will inforce key concepts the student
                    <br /> may have missed to ensure the student is never left
                    behind.
                  </p>
                  <br />
                  <img src={require("../../Images/ReadNowBtn.png")} />
                </div>{" "}
              </center>
              <img
                style={{
                  verticalAlign: "bottom",
                  position: "absolute",
                  bottom: "0",
                  margin: "15px"
                }}
                src={require("../../Images/NewPasswordIcon.png")}
              />
            </div>
          </MDBCol>

          <MDBCol xl="8" l="8" md="8" sm="12" xs="12">

            <div className='logoSecond'>
            <img
              style={{ margin: "17px", height:'55px' }}
              src={require("../../Images/logo.png")}
          
            />
            </div>  
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="whenSmall">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>

            <MDBRow className="marginLeftt">
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
              <MDBCol xl="10" l="12" md="12" sm="12" xs="12">
                <p className="emailTXT">
                  Forget Password
                </p>
              </MDBCol>
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
                <MDBCol xl="10" l="12" md="12" sm="12" xs="12">
             <div style={{  marginLeft:'20px' }}>
                <MDBInput style={{ width: "95%" }} label= {envo}   outline size='lg' />
           
                </div>
                </MDBCol>
                <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>    
            </MDBRow>

            <MDBRow style={{ marginLeft: "20px" }}>
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
              <MDBCol xl="4" l="4" md="4" sm="12" xs="12" className="firstCol">
                <p
                  className="signupTXT"
                  style={{
                    marginTop: "20px"
                  }}
                >
                  Haven't an account?
                  <a
                    className="signupTXT"
                    href="https://www.google.com"
                    style={{
                      color: "#24a4ef"
                    }}
                  >
                    {" "}
                    Sign Up
                  </a>
                </p>
              </MDBCol>
              <grid></grid>
              <MDBCol xl="6" l="6" md="6" sm="12" xs="12" className="secondCol">
                <img
                  style={{ height: "95%", width: "90%" }}
                  src={require("../../Images/ContinueBtn.png")}
                />
              </MDBCol>
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default ForgetPassword;

import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput
} from "mdbreact";
import {Link} from "react-router-dom"
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../../App.css";
import "./index.css";

class SignIn extends Component {
  state = {};

  render() {
    let emailTxt = (
      <span style={{ fontFamily: "Maax", width: "100%" }}>
        <img src={require("../../Images/email.png")} /> Type Your E-mail
      </span>
    );
    let passwordTxt = (
        <span style={{ fontFamily: "Maax", width: "100%" }}>
          <img src={require("../../Images/key.png")} /> **********
        </span>
      );
    return (
      <div className="demo-step1" >
        <MDBRow>
          <MDBCol
            size="4"
            className="demo-bg"
            style={{ height: window.innerHeight, width: "100%" }}
          >
            <div style={{ position: "relative", height: "100%" }}>
              <a>
              <Link to="/tryIt" >
              <img
                style={{ margin: "17px", height:'30px' }}
                src={require("../../Images/back-icon.png")}
                className="nav-bar-logo"
              />
              </Link>
              </a>
              <center>
                {" "}
                <br />
                <br />
                <br />
                <br />
                <br />
                <div>
                  <h2
                    style={{
                      fontSize: "50px",
                      fontFamily: "Maax-Bold",
                      color: "white",
                      
                    }}
                  >
                    {" "}
                    Tutoring Terms and Conditions
                  </h2>
                  <p
                    style={{
                      fontSize: "16px",
                      fontFamily: "Maax",
                      color: "white",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <br />
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
            <div className="logoSecond">
              <img
                style={{ margin: "17px", height: "55px" }}
                src={require("../../Images/logo.png")}
              />
            </div>
            <br />
            <br />
            <br />
            <div className="whenSmall">
            </div>
            <MDBRow>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="10" className="shadows" style={{ paddingLeft: "30px" }}>
            <br />
            <br />
            <h3>Title 1</h3>
            <p>
              FROG TUTORING, LLC, of 1751 River Run Suite 200, Fort Worth, Texas
              76107, telephone (877) 904 0134, e- mail info@frogtutoring.com
              (hereinafter referred to as the "Tutor"), and:
              Services will be provided to Student through in-person lessons
              (the "Lessons"), conducted by the individual teachers selected by
              the Tutor (hereinafter referred to as the "Lesson Tutors") in its
              sole discretion.
            </p>
            <br />

            <h3>Title 2</h3>
            <p>
              The Tutor's current rate plans subject to the limitations and
              conditions expressed in the plan.
              No additional fees shall be charged for preparation time of the
              Lesson Tutors. The fees charged by Tutor may be adjusted from time
              to time and shall become effective after having giving the Student
              thirty (30) days written notice.
            </p>
            <br />

            <h3>Title 3</h3>
            <p>
              For any additional lessons requested by Student not included in
              the plan, Tutor shall invoice Student: Student shall pay such
              invoices within 14 days of the invoice date. Student agrees that
              Tutor shall charge interest at the rate of 18% per annum on any
              late payments.
            </p>
            <br />

            <h3>Signature</h3>
            <p>22333232</p>
            <br/>
            <h3>Date</h3>
            <p>March 19 2019</p>

          </MDBCol>
        </MDBRow>
        <br/><br/><br/><br/>
            <MDBRow style={{ marginLeft: "0px" }}>
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
              <MDBCol xl="4" l="4" md="4" sm="12" xs="12" className="firstCol">
               <Link to="/tryIt" >
              <MDBBtn style={{ height: "70%", width: "90%" }} outline color="dark" className="z-depth-0">
                  Decline
                </MDBBtn>
                </Link>
              </MDBCol>
              <grid></grid>
              <MDBCol xl="6" l="6" md="6" sm="12" xs="12" className="secondCol">
                <a>
                <Link to="/demoStep2" >
                <img
                  style={{ height: "90%", width: "90%", marginTop:'5px' }}
                  src={require("../../Images/ContinueBtn.png")}
                />
                </Link>
                </a>
              </MDBCol>
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default SignIn;

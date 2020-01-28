import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBTable,
  MDBTableBody,
  MDBTableHead
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
              <Link to="/demoStep1" >
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
          <MDBCol lg="10" sm="12" style={{ }}>
          <MDBTable className="plans"  bordered>
      <MDBTableHead>
        <tr>
          <th>Plans</th>
          <th>Purple IV</th>
          <th>Purple III</th>
          <th>Purple II</th>
          <th>Purple I</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>Hourly rate for less then 2hrs per person</td>
          <td>$49.5</td>
          <td>$47.5</td>
          <td>$45.5</td>
          <td>$43.5</td>
        </tr>
        <tr>
        <td>Hourly rate for two hours or more per lesson</td>
          <td>$44.5</td>
          <td>$42.5</td>
          <td>$40.5</td>
          <td>$38.5</td>
        </tr>
        <tr>
        <td>Estimated Tutoring hours</td>
          <td>12</td>
          <td>26</td>
          <td>46</td>
          <td>12</td>
        </tr>
        <tr>
        <td>Amount</td>
          <td>$534</td>
          <td>$1105</td>
          <td>$1863</td>
          <td>$2112</td>
        </tr>
        <tr>
          <td></td>
          <td>
          <MDBBtn className="plan-btn" style={{padding:'10px', fontSize:'12px'}} outline color="primary">Select Plan</MDBBtn>
          </td>
          <td>
          <MDBBtn className="plan-btn" style={{padding:'10px', fontSize:'12px'}} outline color="primary">Select Plan</MDBBtn>
          </td>
          <td>
          <MDBBtn className="plan-btn" style={{padding:'10px', fontSize:'12px'}} outline color="primary">Select Plan</MDBBtn>
          </td>
          <td>
          <MDBBtn className="plan-btn" style={{padding:'10px', fontSize:'12px'}} outline color="primary">Select Plan</MDBBtn>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>

    <br/>
    <hr/>
          </MDBCol>
        </MDBRow>
        <br/><br/><br/><br/>
            <MDBRow style={{ marginLeft: "0px" }}>
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
              <MDBCol xl="4" l="4" md="4" sm="12" xs="12" className="firstCol">
              <MDBBtn  style={{ height: "70%", width: "90%" }} outline color="dark" className="z-depth-0">
                  Skip
                </MDBBtn>
              </MDBCol>
              <grid></grid>
              <MDBCol xl="6" l="6" md="6" sm="12" xs="12" className="secondCol">
                <a>
                <img
                  style={{ height: "90%", width: "90%", marginTop:'5px' }}
                  src={require("../../Images/ContinueBtn.png")}
                />
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

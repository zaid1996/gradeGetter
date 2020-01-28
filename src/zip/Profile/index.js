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
import { blockStatement } from "@babel/types";

class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
          file: null
        }
        this.handleChange = this.handleChange.bind(this)
      }

      handleChange(event) {
        document.getElementById('beforeUpload').style.display= "none";
        document.getElementById('uploadedImg').style.display= "block";
        this.setState({
            
          file: URL.createObjectURL(event.target.files[0])
        })
       
      }
  render() {
    let fNameTxt = (
      <span style={{ fontFamily: "Maax", width: "100%", opacity: "0.4" }}>
        <img src={require("../../Images/user.png")} /> Type Your First Name
      </span>
    );
    let lNameTxt = (
      <span style={{ fontFamily: "Maax", width: "100%", opacity: "0.4" }}>
        Type Your Last Name
      </span>
    );
    let emailTxt = (
      <span style={{ fontFamily: "Maax", width: "100%", opacity: "0.4" }}>
        <img src={require("../../Images/email.png")} /> Type Your E-mail
      </span>
    );
    let passwordTxt = (
      <span style={{ fontFamily: "Maax", width: "100%", opacity: "0.4" }}>
        <img src={require("../../Images/key.png")} /> Create Password
      </span>
    );
    let phoneTxt = (
      <span style={{ fontFamily: "Maax", width: "100%", opacity: "0.4" }}>
        <img src={require("../../Images/telephone.png")} /> Type Your Phone
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
                  Create your
                  <br />
                  account
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    fontFamily: "Maax",
                    color: "white"
                  }}
                >
                  Your information is protected by
                  <br /> high level security and we don't share your personal
                  info with third parties
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

              <p className="emailTXT"> Create your account</p>
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
            <div style={{ marginLeft: "11%", marginRight: "5%" }}>
              <MDBRow>
                <MDBCol xl="10" l="12" md="12" sm="12" xs="12">
                  <p className="emailTXT">Profile</p>
                </MDBCol>
              </MDBRow>

              <div className='uploadPicture'>
              <MDBRow>
                <MDBCol size='4'>
                  <img  id='beforeUpload'  src={require("../../Images/AL.png")}/>
                  <img  id='uploadedImg' src={this.state.file} />
                </MDBCol>
                <MDBCol size='8'>
                   <div className='inputPicture'>
                  <input   type="file" onChange={this.handleChange} />
                  </div>
                </MDBCol>
              </MDBRow>
              </div>

              <MDBRow style={{ marginTop: "-10px" }}>
                <MDBCol xl="6" l="6" md="6" sm="12" xs="12">
                  <MDBInput
                    style={{ width: "100%", height: "65px" }}
                    label={fNameTxt}
                    outline
                    size="lg"
                  />
                </MDBCol>
                <MDBCol xl="6" l="6" md="6" sm="12" xs="12">
                  <MDBInput
                    style={{ width: "100%", height: "65px" }}
                    label={lNameTxt}
                    outline
                    size="lg"
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol size="12">
                  <MDBInput
                    style={{ width: "100%", height: "65px" }}
                    label={emailTxt}
                    outline
                    size="lg"
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol size="12">
                  <MDBInput
                    style={{ width: "100%", height: "65px" }}
                    label={passwordTxt}
                    outline
                    size="lg"
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol size="12">
                  <MDBInput
                    style={{ width: "100%", height: "65px" }}
                    label={phoneTxt}
                    outline
                    size="lg"
                  />
                </MDBCol>
              </MDBRow>

              <br />
          
              <MDBRow>
                <MDBCol size="6">
                  <a>
                    <img src={require("../../Images/back.png")} />
                  </a>
                </MDBCol>
                <MDBCol size="6">
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

export default Profile;

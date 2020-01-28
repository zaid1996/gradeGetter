import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBBadge, MDBCardTitle, MDBCardText } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../../App.css";
import "./index.css"
import NavBar from "../NavBar/Navigation";
import Footer from "../Footer";
import blog2 from "../../Images/blog-image.png"
import Blog_template from "./blog_template"

class Blog extends Component {
  state = {};
  render() {
    return (
      <div>
        <div style={{zIndex:'7', position:'absolute', width:'100%'}} >
        <NavBar />
        </div>
        <br/><br/><br/>
        <div>
          <div style={{zIndex:'1'}} className="blog-top" >
            <MDBContainer>
              <br /><br />
              <MDBRow>
                <MDBCol lg="6" sm="12" >
                  <br />
                  <h2 >The Best Education Articles!</h2>
                  <p>Subscribe and get our weekly newslatter in your index.</p>
                  <div style={{ width: "100%" }}>
                    <input
                      style={{
                        height: "40px",
                        marginLeft: "0px",
                        marginRight: "0px",
                        marginTop: "0px",
                        width: "50%",
                        float: "left",
                        paddingLeft: "20px"
                      }}
                      className="home-top-input"
                      placeholder="Enter Your Email"
                    ></input>
                    <MDBBtn
                      color="info"

                      style={{
                        height: "40px",
                        marginLeft: "0px",
                        marginRight: "0px",
                        //  width: "30%",
                        marginTop: "0px",
                        float: "left",
                        fontSize: "12px",
                        fontFamily: "Maax-Bold"
                      }}
                    >
                      Get Started
                  </MDBBtn>
                  </div>
                </MDBCol>
                <MDBCol lg="6" sm="12" >
                  <img style={{ height: '75%' }} src={require("../../Images/blog-top-left.png")} />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
          <MDBContainer className="blog-head" >
            <MDBRow>
              <MDBCol lg="6" sm="12" md="6" >
                <br /><br /><br /><br />
                <div className="head-title" >
                  <h2 className="blog-title" >
                    Shazam!
                    How Editor Michel Aller Transformed into a
                    Blockbuster Editor
                      </h2>
                  <MDBBadge className="blog-badge" pill color="light">
                    <span>Accounting</span>
                  </MDBBadge>
                  <span className="blog-read-time" >5 min read</span>
                  <br /><br />
                  <p className="blog-text" >
                    Neuroscience is a multidisciplinary science that is concerned with the study of the structure and function...
                  </p>
                  <img src={require("../../Images/blog-blue-arrow.png")} />
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <MDBContainer>
            <br /><br /><br />
            <MDBRow>
              <MDBCol>
                <ul className="nav md-tabs lighten-1 mx-0 mb-0 mt-1 categories">
                  <li className="nav-item">
                    <a className="nav-link " href="#!">All</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#!">Math</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#!">Algebra</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#!">Algebra</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#!">Algebra</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#!">Algebra</a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <br />
          <MDBContainer style={{ marginLeft: '10%' }} >
            <MDBRow>
              <MDBCol className="bb" lg="6" md="12" sm="12" >
                <Blog_template />
              </MDBCol>
              <MDBCol className="bb" lg="6" md="12" sm="12" >
                <Blog_template />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <center><MDBBtn outline color="dark" className="z-depth-0">
            Load More
                </MDBBtn></center>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="home-top-div">
        <br />
          <div style={{ width: "80%", marginLeft: "10%" }}>
            <MDBRow className="home-top-row">
              <MDBCol xl="6" lg="6" md="12">
                <h1
                  style={{
                    textAlign: "left",
                    color: "white",
                    fontSize: "50px",
                    fontFamily: "Maax-Bold"
                  }}
                >
                  No contract.
                </h1>
                <h1
                  style={{
                    textAlign: "left",
                    color: "white",
                    fontSize: "50px",
                    fontFamily: "Maax-Bold"
                  }}
                >
                  No min commitment.
                </h1>
                <br></br>
                <p
                  style={{
                    textAlign: "left",
                    color: "white",
                    fontSize: "23px",
                    fontFamily: "Maax"
                  }}
                >
                  Only 1-on-1 Pay As You Go Online Tutoring With U.S Based
                  Tutors In All Subjects & Test Prep
                </p>
                <br></br>
                <div style={{ width: "100%" }}>
                  <input
                    style={{
                      height: "70px",
                      marginLeft: "0px",
                      marginRight: "0px",
                      marginTop: "0px",
                      // width: "65%",
                      float: "left",
                      paddingLeft: "20px"
                    }}
                    className="home-top-input"
                    placeholder="Enter Your Email"
                  ></input>
                  <MDBBtn
                    color="info"
                    className="home-top-button"
                    style={{
                      height: "70px",
                      marginLeft: "0px",
                      marginRight: "0px", // width: "35%",
                      marginTop: "0px",
                      float: "left",
                      fontSize: "17px",
                      fontFamily: "Maax-Bold"
                    }}
                  >
                    Get Started
                  </MDBBtn>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p
                  style={{
                    textAlign: "left",
                    color: "white",
                    fontSize: "14px",
                    fontFamily: "Maax"
                  }}
                >
                  Over 10,000 verified and background checks U.S tutors ready to
                  work with you
                </p>
              </MDBCol>
              <MDBCol xl="6" lg="6" md="12" style={{ position: "relative" }}>
                <img
                  style={{
                    marginTop: "-50px",
                    marginLeft: "20px",
                    position: "absolute",
                    width: "90%"
                  }}
                  className="home-top-price-img"
                  src={require("../../Images/HomeTopPriceImage.png")}
                ></img>
              </MDBCol>
            </MDBRow>
            <MDBRow style={{ marginTop: "40px", paddingBottom: "40px" }}>
              <MDBCol
                xl="6"
                lg="12"
              // style={{ marginTop: "40px", paddingBottom: "40px" }}
              >
                <MDBRow>
                  <MDBCol size="4">
                    <img
                      src={require("../../Images/HomeTopLogo1.png")}
                      className="home-top-company-logos"
                    ></img>
                  </MDBCol>
                  <MDBCol size="5">
                    <img
                      src={require("../../Images/HomeTopLogo2.png")}
                      className="home-top-company-logos"
                      style={{ marginLeft: "px" }}
                    ></img>
                  </MDBCol>
                  <MDBCol size="3">
                    <img
                      src={require("../../Images/HomeTopLogo3.png")}
                      className="home-top-company-logos"
                    ></img>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol
                xl="6"
                lg="12"
              // style={{ marginTop: "30px", paddinBottom: "40px" }}
              >
                <MDBRow>
                  <MDBCol size="6">
                    <img
                      src={require("../../Images/HomeTopLogo4.png")}
                      className="home-top-company-logos home-top-price-img-right2"
                    ></img>
                  </MDBCol>
                  <MDBCol size="6">
                    <img
                      src={require("../../Images/HomeTopLogo5.png")}
                      className="home-top-company-logos home-top-price-img-right2"
                    ></img>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Blog;

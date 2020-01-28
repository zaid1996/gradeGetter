import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBInput
} from "mdbreact";
import { BrowserRouter } from "react-router-dom";
import "./index.css"; //Import here your file style
import "../../App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import NavbarHome from "../NavBar/navbarHome";
import Footer from "../Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StarRatings from "react-star-ratings";
import { isAbsolute } from "path";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1360 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1360, min: 900 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 900, min: 0 },
    items: 1
  }
};

class TutorLandingPage extends React.Component {
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
    let username_input = (
      <span style={{ background: "transparent", margin: "0px" }}>
        <img src={require("../../Images/TutorLandManLogo.png")}></img> Type your
        first name
      </span>
    );
    var backImage = {
      backgroundImage: "url(../../Image/TutorLandMainImg.png)"
    };
    return (
      <div>
        <div className="tutor-top-div">
          <div className="tutor-land-input-main-div">
            <NavbarHome />
            <div style={{ marginTop: "50px" }}>
              <center>
                <p
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: "45px",
                    fontFamily: "Maax-Bold",
                    lineHeight: "57px"
                  }}
                >
                  Access Hundreds Of Online & In-Person Tutoring Jobs
                </p>
                <p
                  style={{
                    fontFamily: "Maax",
                    fontSize: "20px",
                    lineHeight: "22px",
                    color: "#FFFFFF",
                    marginTop: "50px"
                  }}
                >
                  On your way to becoming a grade improver
                </p>
                <div
                  style={{
                    width: "70%",
                    marginTop: "20px",
                    marginBottom: "50px"
                  }}
                >
                  <MDBRow>
                    <MDBCol xl="6">
                      <div className="tutor-land-input-div ">
                        <img
                          src={require("../../Images/TutorLandManLogo.png")}
                          className="tutor-land-input-img"
                        ></img>
                        <input
                          placeholder="Type Your First Name"
                          className="tutor-land-input"
                        ></input>
                      </div>
                    </MDBCol>
                    <MDBCol xl="6">
                      <div className="tutor-land-input-div ">
                        <img
                          src={require("../../Images/TutorLandManLogo.png")}
                          className="tutor-land-input-img"
                        ></img>
                        <input
                          placeholder="Type Your Last Name"
                          className="tutor-land-input"
                        ></input>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol xl="6">
                      <div className="tutor-land-input-div ">
                        <img
                          src={require("../../Images/TutorLandEmailLogo.png")}
                          className="tutor-land-input-img"
                        ></img>
                        <input
                          placeholder="Create Password"
                          className="tutor-land-input"
                        ></input>
                      </div>
                    </MDBCol>
                    <MDBCol xl="6">
                      <div className="tutor-land-input-div ">
                        <img
                          src={require("../../Images/TutorLandPassLogo.png")}
                          className="tutor-land-input-img"
                        ></img>
                        <input
                          placeholder="Type Your Last Name"
                          className="tutor-land-input"
                        ></input>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <div style={{ marginTop: "30px", textAlign: "left" }}>
                    <span className="tutor-land-checkbox-line">
                      <input type="checkbox" className="tutor-land-checkbox " />{" "}
                      I agree to GradeGetter terms of use for tutors and also
                      privacy policy.{" "}
                      <a style={{ color: "#23A4EF" }}>Read More</a>
                    </span>
                  </div>
                  <MDBBtn
                    color="info"
                    className="home-top-button"
                    style={{
                      height: "70px",
                      width: "100%",
                      marginTop: "0px",
                      fontSize: "17px",
                      fontFamily: "Maax-Bold",
                      marginTop: "30px"
                    }}
                  >
                    Get Started
                  </MDBBtn>
                </div>
              </center>
            </div>
          </div>
        </div>
        <div className="tutor-land-features-main-div">
          <h1
            style={{
              fontFamily: "Maax-Bold",
              fontSize: "34px",
              lineHeight: "38px",
              /* identical to box height */
              textAlign: "center",

              color: "#203662"
            }}
          >
            Features
          </h1>
          <div style={{ width: "100%" }}>
            <center>
              <MDBRow>
                <MDBCol xl="4">
                  <div className="tutor-land-feature-card-div">
                    <div
                      style={{
                        padding: "25px"
                      }}
                    >
                      <h1
                        style={{
                          fontFamily: "Maax-Bold",
                          fontSize: "28px",
                          lineHeight: "31px",
                          textAlign: "left",
                          color: "#203662"
                        }}
                      >
                        Qualification
                      </h1>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginTop: "30px"
                        }}
                      >
                        <img
                          src={require("../../Images/HomeCoreDoneIcons.png")}
                          style={{ height: "25px", width: "25px" }}
                        ></img>
                        <p
                          style={{
                            textAlign: "left",
                            marginLeft: "10px",
                            fontSize: "15px",
                            fontFamily: "Maax",
                            color: "#203662"
                          }}
                        >
                          Expertise in at least one specific subject area
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row"
                        }}
                      >
                        <img
                          src={require("../../Images/HomeCoreDoneIcons.png")}
                          style={{ height: "25px", width: "25px" }}
                        ></img>
                        <p
                          style={{
                            textAlign: "left",
                            marginLeft: "10px",
                            fontSize: "15px",
                            fontFamily: "Maax",
                            color: "#203662"
                          }}
                        >
                          Minimum of 3.0 GPA
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row"
                        }}
                      >
                        <img
                          src={require("../../Images/HomeCoreDoneIcons.png")}
                          style={{ height: "25px", width: "25px" }}
                        ></img>
                        <p
                          style={{
                            textAlign: "left",
                            marginLeft: "10px",
                            fontSize: "15px",
                            fontFamily: "Maax",
                            color: "#203662"
                          }}
                        >
                          Previous tutoring experience
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row"
                        }}
                      >
                        <img
                          src={require("../../Images/HomeCoreDoneIcons.png")}
                          style={{ height: "25px", width: "25px" }}
                        ></img>
                        <p
                          style={{
                            textAlign: "left",
                            marginLeft: "10px",
                            fontSize: "15px",
                            fontFamily: "Maax",
                            color: "#203662"
                          }}
                        >
                          Punctuality and self discipline
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row"
                        }}
                      >
                        <img
                          src={require("../../Images/HomeCoreDoneIcons.png")}
                          style={{ height: "25px", width: "25px" }}
                        ></img>
                        <p
                          style={{
                            textAlign: "left",
                            marginLeft: "10px",
                            fontSize: "15px",
                            fontFamily: "Maax",
                            color: "#203662"
                          }}
                        >
                          Excellent interpersonal skills
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row"
                        }}
                      >
                        <img
                          src={require("../../Images/HomeCoreDoneIcons.png")}
                          style={{ height: "25px", width: "25px" }}
                        ></img>
                        <p
                          style={{
                            textAlign: "left",
                            marginLeft: "10px",
                            fontSize: "15px",
                            fontFamily: "Maax",
                            color: "#203662"
                          }}
                        >
                          Passionate about being a mentor and working with
                          students
                        </p>
                      </div>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol xl="4">
                  <div className="tutor-land-feature-card-div">
                    <div
                      style={{
                        padding: "25px"
                      }}
                    >
                      <h1
                        style={{
                          fontFamily: "Maax-Bold",
                          fontSize: "28px",
                          lineHeight: "31px",
                          textAlign: "left",
                          color: "#203662"
                        }}
                      >
                        Benifits
                      </h1>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginTop: "30px"
                        }}
                      >
                        <img
                          src={require("../../Images/HomeCoreDoneIcons.png")}
                          style={{ height: "25px", width: "25px" }}
                        ></img>
                        <p
                          style={{
                            textAlign: "left",
                            marginLeft: "10px",
                            fontSize: "15px",
                            fontFamily: "Maax",
                            color: "#203662"
                          }}
                        >
                          Great Pay
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row"
                        }}
                      >
                        <img
                          src={require("../../Images/HomeCoreDoneIcons.png")}
                          style={{ height: "25px", width: "25px" }}
                        ></img>
                        <p
                          style={{
                            textAlign: "left",
                            marginLeft: "10px",
                            fontSize: "15px",
                            fontFamily: "Maax",
                            color: "#203662"
                          }}
                        >
                          Set your own tutoring schedule
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row"
                        }}
                      >
                        <img
                          src={require("../../Images/HomeCoreDoneIcons.png")}
                          style={{ height: "25px", width: "25px" }}
                        ></img>
                        <p
                          style={{
                            textAlign: "left",
                            marginLeft: "10px",
                            fontSize: "15px",
                            fontFamily: "Maax",
                            color: "#203662"
                          }}
                        >
                          Rewards - Gift cards, T Shirts
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row"
                        }}
                      >
                        <img
                          src={require("../../Images/HomeCoreDoneIcons.png")}
                          style={{ height: "25px", width: "25px" }}
                        ></img>
                        <p
                          style={{
                            textAlign: "left",
                            marginLeft: "10px",
                            fontSize: "15px",
                            fontFamily: "Maax",
                            color: "#203662"
                          }}
                        >
                          Up to $50 for referrer bonus
                        </p>
                      </div>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol xl="4">
                  <div className="tutor-land-feature-card-div">
                    <div
                      style={{
                        padding: "25px"
                      }}
                    >
                      <h1
                        style={{
                          fontFamily: "Maax-Bold",
                          fontSize: "28px",
                          lineHeight: "31px",
                          textAlign: "left",
                          color: "#203662"
                        }}
                      >
                        Job Description
                      </h1>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginTop: "30px"
                        }}
                      >
                        <p
                          style={{
                            textAlign: "left",
                            marginLeft: "10px",
                            fontSize: "15px",
                            fontFamily: "Maax",
                            color: "#203662"
                          }}
                        >
                          1. Provide one on one tutoring
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          lineHeight: "24px"
                        }}
                      >
                        <p
                          style={{
                            textAlign: "left",
                            marginLeft: "10px",
                            fontSize: "15px",
                            fontFamily: "Maax",
                            color: "#203662"
                          }}
                        >
                          2. Teach Organization and Study skills
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          lineHeight: "24px"
                        }}
                      >
                        <p
                          style={{
                            textAlign: "left",
                            marginLeft: "10px",
                            fontSize: "15px",
                            fontFamily: "Maax",
                            color: "#203662"
                          }}
                        >
                          3. Coordinate with teachers
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          lineHeight: "24px"
                        }}
                      >
                        <p
                          style={{
                            textAlign: "left",
                            marginLeft: "10px",
                            fontSize: "15px",
                            fontFamily: "Maax",
                            color: "#203662"
                          }}
                        >
                          4. Work a minimum of 5-15hrs a week
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          lineHeight: "24px"
                        }}
                      >
                        <p
                          style={{
                            textAlign: "left",
                            marginLeft: "10px",
                            fontSize: "15px",
                            fontFamily: "Maax",
                            color: "#203662"
                          }}
                        >
                          5. Create individual lesson plan for student
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          lineHeight: "24px"
                        }}
                      >
                        <p
                          style={{
                            textAlign: "left",
                            marginLeft: "10px",
                            fontSize: "15px",
                            fontFamily: "Maax",
                            color: "#203662"
                          }}
                        >
                          6. Motivate Students to want to learn, achieve, and be
                          self-motivated
                        </p>
                      </div>
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>
            </center>
          </div>
        </div>
        <div className="tutor-land-jobs-main-div">
          <h1
            style={{
              fontFamily: "Maax-Bold",
              fontSize: "34px",
              lineHeight: "38px",
              /* identical to box height */
              textAlign: "center",

              color: "#203662"
            }}
          >
            Jobs
          </h1>
          <div className="tutor-land-Jobs-card-desktop">
            <MDBRow className="tutor-land-jobs-card-rows">
              <MDBCol
                size="6"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "20px"
                }}
              >
                <img
                  src={require("../../Images/HomeClientsDP.png")}
                  className="tutor-land-jobs-card-rows-img "
                ></img>
                <div style={{ marginLeft: "-100px" }}>
                  <h2 className="tutor-land-jobs-card-rows-name">Aswathy A.</h2>
                  <p className="tutor-land-jobs-card-rows-from">
                    from Aledo, TX{" "}
                  </p>
                </div>
                <img
                  src={require("../../Images/Path.png")}
                  className="tutor-land-jobs-card-rows-img-arrow"
                ></img>
              </MDBCol>
              <MDBCol size="6">
                <div>
                  <p className="tutor-land-jobs-card-rows-text-right">
                    <span style={{ fontWeight: "bold" }}>Subject</span>: ACT
                    Prep Math
                  </p>
                  <p className="tutor-land-jobs-card-rows-text-right">
                    <span style={{ fontWeight: "bold" }}>Grade Level</span>:
                    Test Prep
                  </p>
                  <p className="tutor-land-jobs-card-rows-text-right">
                    <span style={{ fontWeight: "bold" }}>Time</span>: I really
                    struggle with math, and it’a holding me back from getting
                    the score I want
                  </p>
                </div>
              </MDBCol>
            </MDBRow>
            <hr></hr>
            <MDBRow className="tutor-land-jobs-card-rows">
              <MDBCol
                size="6"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "20px"
                }}
              >
                <img
                  src={require("../../Images/HomeClientsDP2.png")}
                  className="tutor-land-jobs-card-rows-img "
                ></img>
                <div style={{ marginLeft: "-100px" }}>
                  <h2 className="tutor-land-jobs-card-rows-name">Aswathy A.</h2>
                  <p className="tutor-land-jobs-card-rows-from">
                    from Aledo, TX{" "}
                  </p>
                </div>
                <img
                  src={require("../../Images/Path.png")}
                  className="tutor-land-jobs-card-rows-img-arrow"
                ></img>
              </MDBCol>
              <MDBCol size="6">
                <div>
                  <p className="tutor-land-jobs-card-rows-text-right">
                    <span style={{ fontWeight: "bold" }}>Subject</span>: ACT
                    Prep Math
                  </p>
                  <p className="tutor-land-jobs-card-rows-text-right">
                    <span style={{ fontWeight: "bold" }}>Grade Level</span>:
                    Test Prep
                  </p>
                  <p className="tutor-land-jobs-card-rows-text-right">
                    <span style={{ fontWeight: "bold" }}>Time</span>: I really
                    struggle with math, and it’a holding me back from getting
                    the score I want
                  </p>
                </div>
              </MDBCol>
            </MDBRow>
            <hr></hr>
            <MDBRow className="tutor-land-jobs-card-rows">
              <MDBCol
                size="6"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "20px"
                }}
              >
                <img
                  src={require("../../Images/HomeClientsDP3.png")}
                  className="tutor-land-jobs-card-rows-img "
                ></img>
                <div style={{ marginLeft: "-100px" }}>
                  <h2 className="tutor-land-jobs-card-rows-name">Aswathy A.</h2>
                  <p className="tutor-land-jobs-card-rows-from">
                    from Aledo, TX{" "}
                  </p>
                </div>
                <img
                  src={require("../../Images/Path.png")}
                  className="tutor-land-jobs-card-rows-img-arrow"
                ></img>
              </MDBCol>
              <MDBCol size="6">
                <div>
                  <p className="tutor-land-jobs-card-rows-text-right">
                    <span style={{ fontWeight: "bold" }}>Subject</span>: ACT
                    Prep Math
                  </p>
                  <p className="tutor-land-jobs-card-rows-text-right">
                    <span style={{ fontWeight: "bold" }}>Grade Level</span>:
                    Test Prep
                  </p>
                  <p className="tutor-land-jobs-card-rows-text-right">
                    <span style={{ fontWeight: "bold" }}>Time</span>: I really
                    struggle with math, and it’a holding me back from getting
                    the score I want
                  </p>
                </div>
              </MDBCol>
            </MDBRow>
          </div>
          <Carousel responsive={responsive}>
            <div className={"tutor-land-Jobs-card-mobile"}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "20px"
                }}
              >
                <img
                  src={require("../../Images/HomeClientsDP.png")}
                  className="tutor-land-Jobs-card-mobile-img"
                  
                ></img>
                <div style={{ marginLeft: "20px" }}>
                  <h2 className="tutor-land-Jobs-card-mobile-name">
                    Aswathy A.
                  </h2>
                  <p className="tutor-land-Jobs-card-mobile-from">
                    from Aledo, TX
                  </p>
                </div>
              </div>
              <hr></hr>
              <div style={{ marginTop: "30px" }}>
                <p className="tutor-land-jobs-card-mobile-text-bottom">
                  <span style={{ fontWeight: "bold" }}>Subject</span>: ACT Prep
                  Math
                </p>
                <p className="tutor-land-jobs-card-mobile-text-bottom">
                  <span style={{ fontWeight: "bold" }}>Grade Level</span>: Test
                  Prep
                </p>
                <p className="tutor-land-jobs-card-mobile-text-bottom">
                  <span style={{ fontWeight: "bold" }}>Time</span>: I really
                  struggle with math, and it’a holding me back from getting the
                  score I want
                </p>
              </div>
            </div>
            <div className={"tutor-land-Jobs-card-mobile"}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "20px"
                }}
              >
                <img
                  src={require("../../Images/HomeClientsDP.png")}
                  className="tutor-land-Jobs-card-mobile-img"
                ></img>
                <div style={{ marginLeft: "20px" }}>
                  <h2 className="tutor-land-Jobs-card-mobile-name">
                    Aswathy A.
                  </h2>
                  <p className="tutor-land-Jobs-card-mobile-from">
                    from Aledo, TX
                  </p>
                </div>
              </div>
              <hr></hr>
              <div style={{ marginTop: "30px" }}>
                <p className="tutor-land-jobs-card-mobile-text-bottom">
                  <span style={{ fontWeight: "bold" }}>Subject</span>: ACT Prep
                  Math
                </p>
                <p className="tutor-land-jobs-card-mobile-text-bottom">
                  <span style={{ fontWeight: "bold" }}>Grade Level</span>: Test
                  Prep
                </p>
                <p className="tutor-land-jobs-card-mobile-text-bottom">
                  <span style={{ fontWeight: "bold" }}>Time</span>: I really
                  struggle with math, and it’a holding me back from getting the
                  score I want
                </p>
              </div>
            </div>
            <div className={"tutor-land-Jobs-card-mobile"}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "20px"
                }}
              >
                <img
                  src={require("../../Images/HomeClientsDP.png")}
                  className="tutor-land-Jobs-card-mobile-img"
                ></img>
                <div style={{ marginLeft: "20px" }}>
                  <h2 className="tutor-land-Jobs-card-mobile-name">
                    Aswathy A.
                  </h2>
                  <p className="tutor-land-Jobs-card-mobile-from">
                    from Aledo, TX
                  </p>
                </div>
              </div>
              <hr></hr>
              <div style={{ marginTop: "30px" }}>
                <p className="tutor-land-jobs-card-mobile-text-bottom">
                  <span style={{ fontWeight: "bold" }}>Subject</span>: ACT Prep
                  Math
                </p>
                <p className="tutor-land-jobs-card-mobile-text-bottom">
                  <span style={{ fontWeight: "bold" }}>Grade Level</span>: Test
                  Prep
                </p>
                <p className="tutor-land-jobs-card-mobile-text-bottom">
                  <span style={{ fontWeight: "bold" }}>Time</span>: I really
                  struggle with math, and it’a holding me back from getting the
                  score I want
                </p>
              </div>
            </div>
          </Carousel>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default TutorLandingPage;

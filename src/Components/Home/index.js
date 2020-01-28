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
  MDBBtn
} from "mdbreact";
import { BrowserRouter } from "react-router-dom";
import "../../App.css"; //Import here your file style
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
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1360 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1360, min: 900 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 900, min: 0 },
    items: 1
  }
};
const responsiveForTutors = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1360 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1360, min: 900 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 900, min: 0 },
    items: 1
  }
};

class Home extends React.Component {
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
        <div className="home-top-div">
          <div style={{ width: "80%", marginLeft: "10%" }}>
            <NavbarHome />
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
                    marginTop: "-100px",
                    marginLeft: "30px",
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
        <div>
          <div className="home-middle-main-div">
            <h1 className="home-second-sec-title">Clients are saying</h1>
            <br></br>
            <Carousel responsive={responsive} style={{}}>
              <div className="home-clients-div" style={{}}>
                <MDBRow>
                  <MDBCol size="3" style={{ paddingLeft: "20px" }}>
                    <center>
                      <img
                        src={require("../../Images/HomeClientsDP.png")}
                        className="home-clients-pp"
                      ></img>
                    </center>
                  </MDBCol>
                  <MDBCol size="9" style={{}}>
                    <div style={{ lineHeight: "15px", marginLeft: "10px" }}>
                      <p
                        className="font-Maax"
                        style={{ marginTop: "20px", float: "left" }}
                      >
                        <span
                          style={{ fontWeight: "bold" }}
                          className="font-Maax-Bold"
                        >
                          Alex Tyshchenko
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
                  <p
                    className="font-PN-Semibold"
                    style={{ color: "#083349", fontSize: "17px" }}
                  >
                    Jordan did a great jon in tutoring me. He listened to my
                    problems and questions carefully and answered them thoughly.
                    He was easy to work with and excited to help me with my
                    goals. He was very knowledgeable and quick to help me find
                    solutions.
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
              <div className="home-clients-div" style={{}}>
                <MDBRow>
                  <MDBCol size="3" style={{ paddingLeft: "20px" }}>
                    <center>
                      <img
                        src={require("../../Images/HomeClientsDP2.png")}
                        className="home-clients-pp"
                      ></img>
                    </center>
                  </MDBCol>
                  <MDBCol size="9" style={{}}>
                    <div style={{ lineHeight: "15px", marginLeft: "10px" }}>
                      <p
                        className="font-Maax"
                        style={{ marginTop: "20px", float: "left" }}
                      >
                        <span
                          style={{ fontWeight: "bold" }}
                          className="font-Maax-Bold"
                        >
                          Alex Tyshchenko
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
                  <p
                    className="font-PN-Semibold"
                    style={{ color: "#083349", fontSize: "17px" }}
                  >
                    Jordan did a great jon in tutoring me. He listened to my
                    problems and questions carefully and answered them thoughly.
                    He was easy to work with and excited to help me with my
                    goals. He was very knowledgeable and quick to help me find
                    solutions.
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
              <div className="home-clients-div" style={{}}>
                <MDBRow>
                  <MDBCol size="3" style={{ paddingLeft: "20px" }}>
                    <center>
                      <img
                        src={require("../../Images/HomeClientsDP3.png")}
                        className="home-clients-pp"
                      ></img>
                    </center>
                  </MDBCol>
                  <MDBCol size="9" style={{}}>
                    <div style={{ lineHeight: "15px", marginLeft: "10px" }}>
                      <p
                        className="font-Maax"
                        style={{ marginTop: "20px", float: "left" }}
                      >
                        <span
                          style={{ fontWeight: "bold" }}
                          className="font-Maax-Bold"
                        >
                          Alex Tyshchenko
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
                  <p
                    className="font-PN-Semibold"
                    style={{ color: "#083349", fontSize: "17px" }}
                  >
                    Jordan did a great jon in tutoring me. He listened to my
                    problems and questions carefully and answered them thoughly.
                    He was easy to work with and excited to help me with my
                    goals. He was very knowledgeable and quick to help me find
                    solutions.
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
              <div className="home-clients-div" style={{}}>
                <MDBRow>
                  <MDBCol size="3" style={{ paddingLeft: "20px" }}>
                    <center>
                      <img
                        src={require("../../Images/HomeClientsDP.png")}
                        className="home-clients-pp"
                      ></img>
                    </center>
                  </MDBCol>
                  <MDBCol size="9" style={{}}>
                    <div style={{ lineHeight: "15px", marginLeft: "10px" }}>
                      <p
                        className="font-Maax"
                        style={{ marginTop: "20px", float: "left" }}
                      >
                        <span
                          style={{ fontWeight: "bold" }}
                          className="font-Maax-Bold"
                        >
                          Alex Tyshchenko
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
                  <p
                    className="font-PN-Semibold"
                    style={{ color: "#083349", fontSize: "17px" }}
                  >
                    Jordan did a great jon in tutoring me. He listened to my
                    problems and questions carefully and answered them thoughly.
                    He was easy to work with and excited to help me with my
                    goals. He was very knowledgeable and quick to help me find
                    solutions.
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
              <div className="home-clients-div" style={{}}>
                <MDBRow>
                  <MDBCol size="3" style={{ paddingLeft: "20px" }}>
                    <center>
                      <img
                        src={require("../../Images/HomeClientsDP2.png")}
                        className="home-clients-pp"
                      ></img>
                    </center>
                  </MDBCol>
                  <MDBCol size="9" style={{}}>
                    <div style={{ lineHeight: "15px", marginLeft: "10px" }}>
                      <p
                        className="font-Maax"
                        style={{ marginTop: "20px", float: "left" }}
                      >
                        <span
                          style={{ fontWeight: "bold" }}
                          className="font-Maax-Bold"
                        >
                          Alex Tyshchenko
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
                  <p
                    className="font-PN-Semibold"
                    style={{ color: "#083349", fontSize: "17px" }}
                  >
                    Jordan did a great jon in tutoring me. He listened to my
                    problems and questions carefully and answered them thoughly.
                    He was easy to work with and excited to help me with my
                    goals. He was very knowledgeable and quick to help me find
                    solutions.
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
            </Carousel>
            <div className="home-tutors-main-div">
              <h1 className="home-second-sec-title">Who are our tutors</h1>
              <br></br>
              <Carousel responsive={responsiveForTutors}>
                <div style={{ height: "550px" }}>
                  <div className="cardIMG">
                    <img
                      height="250px"
                      width="250px"
                      src={
                        "http://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                      }
                    ></img>
                  </div>
                  <div className="cardBox">
                    <div>
                      <MDBCardTitle className="cardTitle">
                        Aswathy A.
                      </MDBCardTitle>
                      <MDBCardText className="cardTextt">
                        Graduate CS Student at UTA
                      </MDBCardText>
                      <hr
                        style={{ marginLeft: "15px", marginRight: "15px" }}
                      ></hr>
                      <div>
                        <img
                          src={require("../../Images/HomeTutorsUniLogo.png")}
                          style={{
                            height: "25px",
                            float: "left",
                            margin: "10px"
                          }}
                        ></img>
                        <MDBCardText className="cardTextt">
                          University of Texas in Arlington
                        </MDBCardText>
                      </div>
                      <hr
                        style={{ marginLeft: "15px", marginRight: "15px" }}
                      ></hr>
                      <p
                        style={{
                          marginRight: "15px",
                          marginLeft: "15px",
                          fontFamily: "ProximaNova-Regular",
                          color: "284c5f",
                          fontSize: "17px"
                        }}
                      >
                        I am a Bachelor's Degree student at Univresity of Texas
                        at Arlington
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="cardIMG">
                    <img
                      height="250px"
                      width="250px"
                      src={
                        "http://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                      }
                    ></img>
                  </div>
                  <div className="cardBox">
                    <div>
                      <MDBCardTitle className="cardTitle">
                        Aswathy A.
                      </MDBCardTitle>
                      <MDBCardText className="cardTextt">
                        Graduate CS Student at UTA
                      </MDBCardText>
                      <hr
                        style={{ marginLeft: "15px", marginRight: "15px" }}
                      ></hr>
                      <div>
                        <img
                          src={require("../../Images/HomeTutorsUniLogo.png")}
                          style={{
                            height: "25px",
                            float: "left",
                            margin: "10px"
                          }}
                        ></img>
                        <MDBCardText className="cardTextt">
                          University of Texas in Arlington
                        </MDBCardText>
                      </div>
                      <hr
                        style={{ marginLeft: "15px", marginRight: "15px" }}
                      ></hr>
                      <p
                        style={{
                          marginRight: "15px",
                          marginLeft: "15px",
                          fontFamily: "ProximaNova-Regular",
                          color: "284c5f",
                          fontSize: "17px"
                        }}
                      >
                        I am a Bachelor's Degree student at Univresity of Texas
                        at Arlington
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="cardIMG">
                    <img
                      height="250px"
                      width="250px"
                      src={
                        "http://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                      }
                    ></img>
                  </div>
                  <div className="cardBox">
                    <div>
                      <MDBCardTitle className="cardTitle">
                        Aswathy A.
                      </MDBCardTitle>
                      <MDBCardText className="cardTextt">
                        Graduate CS Student at UTA
                      </MDBCardText>
                      <hr
                        style={{ marginLeft: "15px", marginRight: "15px" }}
                      ></hr>
                      <div>
                        <img
                          src={require("../../Images/HomeTutorsUniLogo.png")}
                          style={{
                            height: "25px",
                            float: "left",
                            margin: "10px"
                          }}
                        ></img>
                        <MDBCardText className="cardTextt">
                          University of Texas in Arlington
                        </MDBCardText>
                      </div>
                      <hr
                        style={{ marginLeft: "15px", marginRight: "15px" }}
                      ></hr>
                      <p
                        style={{
                          marginRight: "15px",
                          marginLeft: "15px",
                          fontFamily: "ProximaNova-Regular",
                          color: "284c5f",
                          fontSize: "17px"
                        }}
                      >
                        I am a Bachelor's Degree student at Univresity of Texas
                        at Arlington
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="cardIMG">
                    <img
                      height="250px"
                      width="250px"
                      src={
                        "http://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                      }
                    ></img>
                  </div>
                  <div className="cardBox">
                    <div>
                      <MDBCardTitle className="cardTitle">
                        Aswathy A.
                      </MDBCardTitle>
                      <MDBCardText className="cardTextt">
                        Graduate CS Student at UTA
                      </MDBCardText>
                      <hr
                        style={{ marginLeft: "15px", marginRight: "15px" }}
                      ></hr>
                      <div>
                        <img
                          src={require("../../Images/HomeTutorsUniLogo.png")}
                          style={{
                            height: "25px",
                            float: "left",
                            margin: "10px"
                          }}
                        ></img>
                        <MDBCardText className="cardTextt">
                          University of Texas in Arlington
                        </MDBCardText>
                      </div>
                      <hr
                        style={{ marginLeft: "15px", marginRight: "15px" }}
                      ></hr>
                      <p
                        style={{
                          marginRight: "15px",
                          marginLeft: "15px",
                          fontFamily: "ProximaNova-Regular",
                          color: "284c5f",
                          fontSize: "17px"
                        }}
                      >
                        I am a Bachelor's Degree student at Univresity of Texas
                        at Arlington
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="cardIMG">
                    <img
                      height="250px"
                      width="250px"
                      src={
                        "http://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                      }
                    ></img>
                  </div>
                  <div className="cardBox">
                    <div>
                      <MDBCardTitle className="cardTitle">
                        Aswathy A.
                      </MDBCardTitle>
                      <MDBCardText className="cardTextt">
                        Graduate CS Student at UTA
                      </MDBCardText>
                      <hr
                        style={{ marginLeft: "15px", marginRight: "15px" }}
                      ></hr>
                      <div>
                        <img
                          src={require("../../Images/HomeTutorsUniLogo.png")}
                          style={{
                            height: "25px",
                            float: "left",
                            margin: "10px"
                          }}
                        ></img>
                        <MDBCardText className="cardTextt">
                          University of Texas in Arlington
                        </MDBCardText>
                      </div>
                      <hr
                        style={{ marginLeft: "15px", marginRight: "15px" }}
                      ></hr>
                      <p
                        style={{
                          marginRight: "15px",
                          marginLeft: "15px",
                          fontFamily: "ProximaNova-Regular",
                          color: "284c5f",
                          fontSize: "17px"
                        }}
                      >
                        I am a Bachelor's Degree student at Univresity of Texas
                        at Arlington
                      </p>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
            <div>
              <h1 className="home-second-sec-title">Why us</h1>
              <br></br>
              <center>
                <div className="home-whyus-main-div">
                  <MDBRow>
                    <MDBCol xl="6" lg="12">
                      <MDBRow
                        style={{ position: "relative" }}
                        className="home-why-row"
                      >
                        <MDBCol size="10" style={{}}>
                          <p className="home-whyus-p">
                            We only charge at the end of each tutoring lesson
                            after you're 100% satisfied
                          </p>
                        </MDBCol>
                        <MDBCol size="2">
                          <img
                            className="home-whyus-img"
                            src={require("../../Images/tick.png")}
                          ></img>
                        </MDBCol>
                      </MDBRow>
                      <hr className="home-whyus-hr"></hr>
                      <MDBRow
                        style={{ position: "relative" }}
                        className="home-why-row"
                      >
                        <MDBCol size="10">
                          <p className="home-whyus-p">
                            We only charge $34.99/hr
                          </p>
                        </MDBCol>
                        <MDBCol size="2">
                          <img
                            className="home-whyus-img"
                            src={require("../../Images/tick.png")}
                          ></img>
                        </MDBCol>
                      </MDBRow>
                      <hr className="home-whyus-hr"></hr>
                      <MDBRow
                        style={{ position: "relative" }}
                        className="home-why-row"
                      >
                        <MDBCol size="10">
                          <p className="home-whyus-p">We have no contracts</p>
                        </MDBCol>
                        <MDBCol size="2">
                          <img
                            className="home-whyus-img"
                            src={require("../../Images/tick.png")}
                          ></img>
                        </MDBCol>
                      </MDBRow>
                      <hr className="home-whyus-hr"></hr>
                      <MDBRow
                        style={{ position: "relative" }}
                        className="home-why-row"
                      >
                        <MDBCol size="10">
                          <p className="home-whyus-p">
                            We have no commitment plan or package
                          </p>
                        </MDBCol>
                        <MDBCol size="2">
                          <img
                            className="home-whyus-img"
                            src={require("../../Images/tick.png")}
                          ></img>
                        </MDBCol>
                      </MDBRow>
                      <hr className="home-whyus-hr"></hr>
                      <MDBRow
                        style={{ position: "relative" }}
                        className="home-why-row"
                      >
                        <MDBCol size="10">
                          <p className="home-whyus-p">
                            We have over 10,000 tutors
                          </p>
                        </MDBCol>
                        <MDBCol size="2">
                          <img
                            className="home-whyus-img"
                            src={require("../../Images/tick.png")}
                          ></img>
                        </MDBCol>
                      </MDBRow>
                      <hr className="home-whyus-hr"></hr>
                    </MDBCol>
                    <MDBCol xl="6" lg="12">
                      <MDBRow
                        style={{ position: "relative" }}
                        className="home-why-row"
                      >
                        <MDBCol size="10">
                          <p className="home-whyus-p">
                            We are disrupting the expensive and un affordable
                            tutoring market
                          </p>
                        </MDBCol>
                        <MDBCol size="2">
                          <img
                            className="home-whyus-img"
                            src={require("../../Images/tick.png")}
                          ></img>
                        </MDBCol>
                      </MDBRow>
                      <hr className="home-whyus-hr"></hr>
                      <MDBRow
                        style={{ position: "relative" }}
                        className="home-why-row"
                      >
                        <MDBCol size="10">
                          <p className="home-whyus-p">
                            We have done background checks on all our tutors
                          </p>
                        </MDBCol>
                        <MDBCol size="2">
                          <img
                            className="home-whyus-img"
                            src={require("../../Images/tick.png")}
                          ></img>
                        </MDBCol>
                      </MDBRow>
                      <hr className="home-whyus-hr"></hr>
                      <MDBRow
                        style={{ position: "relative" }}
                        className="home-why-row"
                      >
                        <MDBCol size="10">
                          <p className="home-whyus-p">
                            We have the most reliabale and easy to use tutoring
                            platform
                          </p>
                        </MDBCol>
                        <MDBCol size="2">
                          <img
                            className="home-whyus-img"
                            src={require("../../Images/tick.png")}
                          ></img>
                        </MDBCol>
                      </MDBRow>
                      <hr className="home-whyus-hr"></hr>
                      <MDBRow
                        style={{ position: "relative" }}
                        className="home-why-row"
                      >
                        <MDBCol size="10">
                          <p className="home-whyus-p">
                            We only offer online tutoring
                          </p>
                        </MDBCol>
                        <MDBCol size="2">
                          <img
                            className="home-whyus-img"
                            src={require("../../Images/tick.png")}
                          ></img>
                        </MDBCol>
                      </MDBRow>
                      <hr className="home-whyus-hr"></hr>
                      <MDBRow
                        style={{ position: "relative" }}
                        className="home-why-row"
                      >
                        <MDBCol size="10">
                          <p className="home-whyus-p">
                            We only hire US based tutor
                          </p>
                        </MDBCol>
                        <MDBCol size="2">
                          <img
                            className="home-whyus-img"
                            src={require("../../Images/tick.png")}
                          ></img>
                        </MDBCol>
                      </MDBRow>
                      <hr className="home-whyus-hr"></hr>
                    </MDBCol>
                  </MDBRow>
                </div>
                <img
                  src={require("../../Images/GetStarted.png")}
                  style={{ height: "80px" }}
                ></img>
              </center>
            </div>
          </div>
          <div className="home-core-main-div">
            <h1
              className="home-second-sec-title"
              style={{ paddingTop: "100px" }}
            >
              At Our Core
            </h1>
            <MDBRow style={{ paddingLeft: "8%", paddingTop: "30px" }}>
              <MDBCol xl="5" lg="12">
                <img
                  src={require("../../Images/homeCoreImg.png")}
                  style={{ height: "70%" }}
                ></img>
              </MDBCol>
              <MDBCol
                xl="7"
                lg="12"
                style={{
                  paddingTop: "10px",
                  lineHeight: "35px",
                  paddingRight: "15%"
                }}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div xl="1" sm="3">
                    <img
                      src={require("../../Images/HomeCoreDoneIcons.png")}
                      style={{ height: "35px" }}
                    ></img>
                  </div>
                  <div xl="11" sm="8">
                    <p className="home-core-p">
                      We believe every student can learn if match the right
                      tutor
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div xl="1" sm="2">
                    <img
                      src={require("../../Images/HomeCoreDoneIcons.png")}
                      style={{ height: "35px" }}
                    ></img>
                  </div>
                  <div xl="11" sm="10">
                    <p className="home-core-p">
                      We believe a good tutor should be patient, genuinely care
                      about their student and also knowledgeable
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div xl="1" sm="2">
                    <img
                      src={require("../../Images/HomeCoreDoneIcons.png")}
                      style={{ height: "35px" }}
                    ></img>
                  </div>
                  <div xl="11" sm="10">
                    <p className="home-core-p">
                      We believe one on one tutoring should be affordable and
                      accessible by more parents
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div xl="1" sm="2">
                    <img
                      src={require("../../Images/HomeCoreDoneIcons.png")}
                      style={{ height: "35px" }}
                    ></img>
                  </div>
                  <div xl="11" sm="10">
                    <p className="home-core-p">
                      We believe the future of education is online tutor
                    </p>
                  </div>
                </div>
                <br></br>
                <img
                  src={require("../../Images/GetStarted.png")}
                  style={{ height: "80px" }}
                ></img>
              </MDBCol>
            </MDBRow>
            <br></br>
          </div>
          <center>
            <div className="home-philosophy-main-div">
              <h1 className="home-second-sec-title">Tutoring philosophy</h1>
              <div>
                <MDBRow>
                  <MDBCol xl="6" style={{ paddingTop: "20px " }}>
                    <p style={{ textAlign: "left" }}>
                      <img
                        src={require("../../Images/HomePhiloIcon1.png")}
                        className="home-philosophy-left-img"
                      ></img>
                    </p>

                    <p
                      className="home-philosophy-heading-p"
                      style={{ textAlign: "left" }}
                    >
                      Get Up to Speed
                    </p>
                    <p className="home-philosophy-detail-p">
                      The tutor will get student up to speed by reviewing older
                      concepts they might have missed. This will ensure their
                      fundamentals are strong.
                    </p>
                  </MDBCol>
                  <MDBCol>
                    <img
                      src={require("../../Images/HomePhiloImg1.png")}
                      style={{ width: "100%" }}
                    ></img>
                  </MDBCol>
                </MDBRow>
                <hr></hr>
                <MDBRow>
                  <MDBCol xl="6" style={{ paddingTop: "20px " }}>
                    <p style={{ textAlign: "left" }}>
                      <img
                        src={require("../../Images/HomePhiloIcon2.png")}
                        className="home-philosophy-left-img"
                        style={{ alignSelf: "left" }}
                      ></img>
                    </p>

                    <p
                      className="home-philosophy-heading-p"
                      style={{ textAlign: "left" }}
                    >
                      Get Up to Speed
                    </p>
                    <p className="home-philosophy-detail-p">
                      The tutor will get student up to speed by reviewing older
                      concepts they might have missed. This will ensure their
                      fundamentals are strong.
                    </p>
                  </MDBCol>
                  <MDBCol>
                    <img
                      src={require("../../Images/HomePhiloImg2.png")}
                      style={{ width: "100%" }}
                    ></img>
                  </MDBCol>
                </MDBRow>
                <hr></hr>
                <MDBRow>
                  <MDBCol xl="6" style={{ paddingTop: "20px " }}>
                    <p style={{ textAlign: "left" }}>
                      <img
                        src={require("../../Images/HomePhiloIcon3.png")}
                        className="home-philosophy-left-img"
                        style={{ alignSelf: "left" }}
                      ></img>
                    </p>

                    <p
                      className="home-philosophy-heading-p"
                      style={{ textAlign: "left" }}
                    >
                      Get Up to Speed
                    </p>
                    <p className="home-philosophy-detail-p">
                      The tutor will get student up to speed by reviewing older
                      concepts they might have missed. This will ensure their
                      fundamentals are strong.
                    </p>
                  </MDBCol>
                  <MDBCol>
                    <img
                      src={require("../../Images/HomePhiloImg3.png")}
                      style={{ width: "100%" }}
                    ></img>
                  </MDBCol>
                </MDBRow>
                <hr></hr>
              </div>
              <br></br>
            </div>
            <img
              src={require("../../Images/GetStarted.png")}
              style={{
                height: "80px",
                marginTop: "30px",
                marginBottom: "30px"
              }}
            ></img>
          </center>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default Home;

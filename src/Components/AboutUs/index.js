import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../../App.css";
import NavBar from "../NavBar/Navigation";
import Footer from "../Footer"

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <center>
          {" "}
          <h1 className="font-Maax-Bold">About Us</h1>
        </center>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <MDBContainer>
          <MDBRow>
            <MDBCol xs="6" sm="6" md="6" l="6" xl="6">
              <img
                style={{ height: "75px", width: "75px" }}
                src={require("../../Images/AboutUsIcon1.png")}
              />
              <br />
              <h2>Our Story</h2> <br />{" "}
              <p>
                In 2009, Ronald Omece, a TCU biochemistry graduate, founded Frog
                Tutoring. The company originated in Fort Worth, TX, and is
                quickly expanding to cities all over the country. Frog Tutoring
                was founded under the belief that all students deserve tutoring
                regardless of age. We believe the first step in successful
                tuturing is finding the 'right' tutor. That is why we only hire
                the top students and graduates from local colleges in the area.
                Each one of our well-trained tutors specializes in at least one
                area of expertise and is eager to aid in the academic success of
                the students they tutor. We ensure our tutors' expertise by
                requiring that they maintain a minimum GPA of 3.5 in their area
                of specialization and through our unique 3-step training
                program.
              </p>
            </MDBCol>
            <MDBCol xs="6" sm="6" md="6" l="6" xl="6">
              <img
                style={{ height: "100%", width: "100%" }}
                src={require("../../Images/AboutUsImg1.png")}
              />
            </MDBCol>
          </MDBRow>
          <br />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <br />

          <MDBRow>
            <MDBCol xs="6" sm="6" md="6" l="6" xl="6">
              <img
                style={{ height: "75px ", width: "75px " }}
                src={require("../../Images/AboutUsIcon2.png")}
              />
              <h2>Mission</h2>{" "}
              <p>
                The purpose of our organization is to make a positive difference
                in the lives of students through personalized tutoring and
                mentoring. First and foremost, Frog Tutoring is a family! We
                focus on mentoring and building relationships because we believe
                that a person-to-person connection is the best way to grow our
                clients from everyday students into motivated achievers.
                <br />
                In everyting we do, Frog Tutoring strives to perform to the
                highest degree of quality, accountability, and transparecy. We
                have three basic tutoring philosophies: One Step Ahead,
                Reinforcement, and Organization & Study Skills.
              </p>
            </MDBCol>
            <MDBCol xs="6" sm="6" md="6" l="6" xl="6">
              <img
                style={{ height: "100%", width: "100%" }}
                src={require("../../Images/AboutUsImg2.png")}
              />
            </MDBCol>
          </MDBRow>
          <br />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <br />
          <MDBRow>
            <MDBCol xs="6" sm="6" md="6" l="6" xl="6">
              <img
                style={{ height: "75px", width: "75px " }}
                src={require("../../Images/AboutUsIcon3.png")}
              />
              <h2>Values</h2>{" "}
              <p>
                Traditional tutoring programs focus on small group tutoring at
                tutoring centers. However, studies have shown that students
                learn more effectively in a one-on-one setting in the comfort of
                their own home. So rather than having you come to us, we
                maximize your child's learning potential by bringing our
                tutoring services to you.
                <br />
                Frog Tutoring also understands that it's more than tutoring,
                it's mentoring. Out tutors make a concious effort to get to know
                their students, build relationships with them, and motivate and
                encourage each child individually.
              </p>
            </MDBCol>
            <MDBCol xs="6" sm="6" md="6" l="6" xl="6">
              <img
                style={{ height: "100%", width: "100%" }}
                src={require("../../Images/AboutUsImg3.png")}
              />
            </MDBCol>
          </MDBRow>
          <br />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <br />
        </MDBContainer>
        <center>
          <img
            style={{ height: "80px", width: "300px" }}
            src={require("../../Images/GetStarted.png")}
          />
        </center>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer/>
      </div>
    );
  }
}

export default AboutUs;

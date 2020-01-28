import React from "react";
import ReactDOM from "react-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import Accordion from "../FAQ/Accordion";
import NavBar from "../NavBar/Navigation";
import Footer from "../Footer"

import "./styles.css";

export default function Faq() {
  let title1 = (
    <span style={{ fontFamily: "Maax-Bold", fontSize: "20px" }}>
      Do you help with homework?
    </span>
  );
  let title2 = (
    <span style={{ fontFamily: "Maax-Bold", fontSize: "20px" }}>
      What grade levels do we tutor?
    </span>
  );
  let title3 = (
    <span style={{ fontFamily: "Maax-Bold", fontSize: "20px" }}>
      Where do you offer tutoring?
    </span>
  );
  let title4 = (
    <span style={{ fontFamily: "Maax-Bold", fontSize: "20px" }}>
      What if I miss a tutoring session?
    </span>
  );
  let title5 = (
    <span style={{ fontFamily: "Maax-Bold", fontSize: "20px" }}>
      What is your reimbursement policy?
    </span>
  );
  let title6 = (
    <span style={{ fontFamily: "Maax-Bold", fontSize: "20px" }}>
      What time do you offer tutoring?
    </span>
  );

  let title8 = (
    <span style={{ fontFamily: "Maax-Bold", fontSize: "20px" }}>
      What subjects do you offer tutoring for?
    </span>
  );
  let title9 = (
    <span style={{ fontFamily: "Maax-Bold", fontSize: "20px" }}>
      Why the specialization in Math and Science?
    </span>
  );
  let title10 = (
    <span style={{ fontFamily: "Maax-Bold", fontSize: "20px" }}>
      What are the qualifications for you tutors?
    </span>
  );
  let title11 = (
    <span style={{ fontFamily: "Maax-Bold", fontSize: "20px" }}>
      If my child is an A student, does he or she need a tutor?
    </span>
  );
  let title12 = (
    <span style={{ fontFamily: "Maax-Bold", fontSize: "20px" }}>
      My child is not motivated. Can your tutors help with motivation?
    </span>
  );
  let title13 = (
    <span style={{ fontFamily: "Maax-Bold", fontSize: "20px" }}>
      Is my child safe around your tutors?
    </span>
  );
  let title14 = (
    <span style={{ fontFamily: "Maax-Bold", fontSize: "20px" }}>
      What if there is no one home during the scheduled appointment?
    </span>
  );
  let title15 = (
    <span style={{ fontFamily: "Maax-Bold", fontSize: "20px" }}>
      What if I don't like my tutor?
    </span>
  );
  let title16 = (
    <span style={{ fontFamily: "Maax-Bold", fontSize: "20px" }}>
      How do I claim my referrer credit?
    </span>
  );

  return (
    <div className="App">
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        {" "}
        <h1>FAQs</h1>
      </center>
      <br />
      <br />
      <br />
      <br />
      <MDBContainer >
        <MDBRow>
          <MDBCol size="1"></MDBCol>

          <MDBCol style={{backgroundColor:'white'}} size="10" className="shadows">
            <Accordion
              className="acc"
              title={title1}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <hr />
            <Accordion
              title={title2}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <hr />
            <Accordion
              title={title3}
              content="
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        "
            />
            <hr />
            <Accordion
              title={title4}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <hr />
            <Accordion
              title={title5}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <hr />
            <Accordion
              title={title6}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <hr />

            <Accordion
              title={title8}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <hr />
            <Accordion
              title={title9}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <hr />
            <Accordion
              title={title10}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <hr />
            <Accordion
              title={title11}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <hr />
            <Accordion
              title={title12}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <hr />
            <Accordion
              title={title13}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <hr />
            <Accordion
              title={title14}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <hr />
            <Accordion
              title={title15}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <hr />
            <Accordion
              title={title16}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </MDBCol>

          <MDBCol size="1"></MDBCol>
        </MDBRow>
      </MDBContainer>
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


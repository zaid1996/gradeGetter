import React from "react";
import ReactDOM from "react-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import NavBar from "../NavBar/Navigation";
import Footer from "../Footer"
import "../FAQ/Accordion.css";

export default function Privacy() {
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
        <h1>Privacy</h1>
      </center>
      <br />
      <br />
      <br />
      <br />
      <MDBContainer>
        <MDBRow>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="10" className="shadows" style={{ paddingLeft: "30px" }}>
            <br />
            <br />
            <h3>Clients</h3>
            <br />
            <p>
              Frog Tutoring collects information such as names, addresses, email
              addresses, phone numbers, grade levels, and referrals. We collect
              this information mainly for the purpose of facilitating the job
              duties of our tutors and administrative staff. Tutors use this
              information to contact their assigned families and travel to their
              families' preferred tutoring locations. Administrative staff uses
              customer information for billing purposes. We do not disclose
              personal information to individuals outside of Frog Tutoring or
              tutors who are not assigned to our customers. All online
              transactions are encrypted. Frog Tutoring may also send out
              surveys to current or previous customers to follow up on services
              and exercise quality assurance. Questions are related to previous
              or current Frog Tutoring services. This personal information is
              only disclosed to Frog Tutoring administrators.
            </p>

            <br />
            <br />

            <h3>Tutors</h3>
            <br />
            <p>
              Information provided by the tutor will not be disclosed to any
              entity outside of Frog Tutoring. Information apart from customer
              names will not be disclosed to other tutors. A tutor's name will
              be disclosed to the tutor's assigned families. Other personal
              information will be kept private unless authorized by the tutor.
            </p>

            <br />
            <br />

            <h3>Applicants</h3>
            <br />
            <p>
              Information provided by an applicant seeking a career with Frog
              Tutoring will be used to verify credentials and provide a basis
              upon which Frog Tutoring administrators will make a decision on
              hiring the individual. If the applicant is not hired, information
              is either locked or destroyed.
            </p>

            <br />
            <br />

            <h3>Security</h3>
            <br />
            <p>
              Frog Tutoring is committed to making sure your personal
              information is secure. We do not sell information to third parties
              unaffiliated with Frog Tutoring. Visitors under 13 years of age
              should not fill out provided contact forms without consent of a
              parent or guardian.
            </p>

            <br />
            <br />
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


import React from "react";
import ReactDOM from "react-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import NavBar from "../NavBar/Navigation";
import Footer from "../Footer"
import "../FAQ/Accordion.css";

export default function Refund() {
  return (
    <div >
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        {" "}
        <h1>Refund</h1>
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
            <h3>Full Payment:</h3>
            <br />
            <p>
              <span style={{ fontWeight: "bold", fontSize: "15px" }}>
                Tutor Satisfaction:{" "}
              </span>
              We will credit your Frog Tutoring account if you're not satisfied
              with your first tutoring lesson and assign you a new tutor at no
              additional cost.
            </p>
            <p>
              <span style={{ fontWeight: "bold", fontSize: "15px" }}>
                Cancellation:{" "}
              </span>
              We will refund your unused credit at a prorated rate based on the
              number of tutoring hours used within 30 days from the date of
              payment.
            </p>
            <p>
              <span style={{ fontWeight: "bold", fontSize: "15px" }}>
                End of plan:{" "}
              </span>
              You will be notified by email once your tutoring credit is getting
              low and you will have the option to renew your tutoring package,
              transition to pay per session or suspend tutoring. If you choose
              not to renew your tutoring plan but continue to schedule lessons
              with your tutor, we will debit your card for those additional
              lessons without further notification at the completion of each
              lesson.
            </p>
            <br />
            <br />
            <h3>Installement Payment Plan:</h3>
            <br />
            <p>
              <span style={{ fontWeight: "bold", fontSize: "15px" }}>
                Tutor Satisfaction:{" "}
              </span>
              We will credit your Frog Tutoring account if you are not satisfied
              with your first tutoring lesson and assign you a new tutor to work
              with at no additional cost.
            </p>
            <p>
              <span style={{ fontWeight: "bold", fontSize: "15px" }}>
                Cancellation:{" "}
              </span>
              We will refund you for unused credit within within 30 days at a
              prorated rate based on your installment tutoring plan. However,
              the installment payment plan cannot be cancelled after 30 days
              from the date of payment. Also, no further notification will be
              provided before your installment payment is debited from your
              card..
            </p>
            <p>
              <span style={{ fontWeight: "bold", fontSize: "15px" }}>
                Installment Payment:{" "}
              </span>
              If you complete more lessons than allocated on your scheduled
              installment tutoring plan. Your will be billed individually for
              those additional lessons outside of your allocated tutoring hours
              for the payment period.
            </p>
            <p>
              <span style={{ fontWeight: "bold", fontSize: "15px" }}>
                End of Installment Payment Plan:{" "}
              </span>
              You will be notified by email once your tutoring credit is getting
              low and you would have the option to renew your payment plan,
              transition to pay per lesson or suspend tutoring. If you choose
              not to renew your payment plan but continue to schedule lesson
              with your tutor. We will debit your card for those additional
              lessons without further notification but your hourly rate wouldn't
              change.
            </p>
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



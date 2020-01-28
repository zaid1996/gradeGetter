import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBScrollbar,
  MDBModalFooter
} from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../../App.css";
import NavBar from "../NavBar/Navigation";
import Footer from "../Footer"

class OurTeam extends Component {
  state = {
    modal14: false
  };

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <br />
        <br />
        <br />
        <br />
        <center>
          <h1>Meet Our Team</h1>
        </center>
        <br />
        <br />
        <br />
        <MDBContainer>
          <MDBRow>
            <MDBCol xl="3" lg="4" md="6" sm="6" xs="12" onClick={this.toggle(14)}>
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
                <MDBCardTitle className="cardTitle">Alexa</MDBCardTitle>
                <MDBCardText className="cardTextt">Founder</MDBCardText>
              </div>
            </MDBCol>

            <MDBCol xl="3" lg="4" md="6" sm="6" xs="12">
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
                <MDBCardTitle className="cardTitle">Zaid Abbasi</MDBCardTitle>
                <MDBCardText className="cardTextt">Developer</MDBCardText>
              </div>
            </MDBCol>

            <MDBCol xl="3" lg="4" md="6" sm="6" xs="12">
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
                <MDBCardTitle className="cardTitle">Irtaza</MDBCardTitle>
                <MDBCardText className="cardTextt">Team Leader</MDBCardText>
              </div>
            </MDBCol>

            <MDBCol xl="3" lg="4" md="6" sm="6" xs="12">
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
                <MDBCardTitle className="cardTitle">Shafaq Noor</MDBCardTitle>
                <MDBCardText className="cardTextt">
                  Lead Tutoring Coordinator
                </MDBCardText>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer >
          <MDBModal
            isOpen={this.state.modal14}
            toggle={this.toggle(14)}
           
            centered
          >
              <MDBModalHeader style={{height:'40px'}} toggle={this.toggle(14)} ></MDBModalHeader>
              <MDBRow>
              
            <MDBCol size='6' >
              <div className="cardIMG">
                <img
                  height="250px"
                  width="250px"
                  src={
                    "http://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                  }
                ></img>
              </div>
              <div className="cardBox"  style={{marginLeft:'20px'}}>
                <MDBCardTitle className="cardTitle">Alexa</MDBCardTitle>
                <MDBCardText className="cardTextt">Founder</MDBCardText>
              </div>
            </MDBCol>
           

            <MDBCol size='6' style={{marginright:'200px'}}>
                  <p className='textScroll'>You will be notified by email once your tutoring credit is getting
              low and you will have the option to renew your tutoring package,
              transition to pay per session or suspend tutoring. If you choose
              not to renew your tutoring plan but continue to schedule lessons
              with your tutor, we will debit your card for those additional
              lessons without further notification at the completion of each
              lesson.</p>
            </MDBCol>
            </MDBRow>
          </MDBModal>
        </MDBContainer>
        <br/><br/><br/><br/>
        <Footer/>
      </div>
    );
  }
}

export default OurTeam;

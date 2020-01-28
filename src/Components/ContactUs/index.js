import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../../App.css";
import "./index.css";
import NavBar from "../NavBar/Navigation";
import Footer from "../Footer"

class ContactUs extends Component {
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
        <center>
          {" "}
          <h1>Contact Us</h1>
        </center>
        <br />
        <br />
        <br />
        <MDBContainer >
          <MDBRow>
            <MDBCol size='1'></MDBCol>
            <MDBCol size='10' className="contactDiv">
                <MDBRow>
                    <MDBCol xl='6' lg='6' md='12' sm='12' xs='12'>
                        <div style={{paddingLeft:'50px', paddingTop:'100px'}}>
                        <p style={{fontSize:'20px'}}>Frog Tutoring Corporate Office<br/>1751 River Run Suit 200<br/>Fort Worth, TX 76107</p>
                        <br/>
                        <p style={{fontFamily:'Maax-Medium',fontSize:'20px'}}>Phone: (877) 904 0134</p>
                        <br/>
                        <p style={{fontFamily:'Maax-Medium',fontSize:'20px'}}>Email: hello@gradegetter.com</p>
                        </div>
                    </MDBCol>
                    <MDBCol xl='6' lg='6' md='12' sm='12' xs='12'>
                 <div style={{height:'100%', width:'100%'}}>
                     <br/>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.468150834826!2d-97.36206278510055!3d32.726757593854174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e722d26ce64db%3A0xcbf63c14580c1320!2s1751%20River%20Run%20%23200%2C%20Fort%20Worth%2C%20TX%2076107%2C%20USA!5e0!3m2!1sen!2s!4v1572296652735!5m2!1sen!2s" width="100%" height="400px" frameborder="0" style={{border:'0',padding:'20px'}} allowfullscreen=""></iframe>
                    </div>
                    <br/>
                        
                    </MDBCol>
                </MDBRow>

            </MDBCol>
            <MDBCol size='1'></MDBCol>
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
}

export default ContactUs;

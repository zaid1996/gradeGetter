import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol,MDBBtn, MDBIcon } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../../App.css'; 
import NavBar from "../NavBar/Navigation";
import Footer from "../Footer"

class OurFeatures extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
              <NavBar/>
              <br/><br/><br/><br/><br/><br/>
         <center> <h1>Our Features</h1></center>
         <br/><br/><br/><br/><br/><br/>
          <MDBContainer>
  <MDBRow>
    <MDBCol  xs="6" sm="6" md="6" l="6" xl="6"><img style={{height:'60px' , width:'60px'}} src={require('../../Images/OurFeaturesIcon1.png')}  /><br/><h2>High Quality Video Chats</h2> <br/> <p>Speak one on one and face to face like skype environment but build for education.</p></MDBCol>
    <MDBCol xs="6" sm="6" md="6" l="6" xl="6"><img style={{height:'100%' , width:'100%'}} src={require('../../Images/OurFeatures1.png')}  /></MDBCol>
  </MDBRow>
  <br/><br/><br/><hr/><br/><br/><br/>
  
  <MDBRow>
    <MDBCol  xs="6" sm="6" md="6" l="6" xl="6"><img style={{height:'60px' , width:'60px'}} src={require('../../Images/OurFeaturesIcon2.png')}  /><br/><h2>Shared Whiteboard</h2> <br/> <p>Draw, annotate, highlight, upload image and pdf's. Our interactive whiteboard allows you to enage your tutor in and environment better than in person</p></MDBCol>
    <MDBCol xs="6" sm="6" md="6" l="6" xl="6"><img style={{height:'100%' , width:'100%'}} src={require('../../Images/OurFeatures2.png')}  /></MDBCol>
  </MDBRow>
  <br/><br/><br/><hr/><br/><br/><br/>

  <MDBRow>
    <MDBCol  xs="6" sm="6" md="6" l="6" xl="6"><img style={{height:'60px' , width:'60px'}} src={require('../../Images/OurFeaturesIcon3.png')}  /><br/><h2>Live Document Editor</h2> <br/> <p>Collaborate on shared document in real time. This enables you to easily write a paper with your tutor.</p></MDBCol>
    <MDBCol xs="6" sm="6" md="6" l="6" xl="6"><img style={{height:'100%' , width:'100%'}} src={require('../../Images/OurFeatures3.png')}  /></MDBCol>
  </MDBRow>
  <br/><br/><br/><hr/><br/><br/><br/>

  <MDBRow>
    <MDBCol  xs="6" sm="6" md="6" l="6" xl="6"><img style={{height:'60px' , width:'60px'}} src={require('../../Images/OurFeaturesIcon4.png')}  /><br/><h2>Collaborative Code Editor</h2> <br/> <p>With syntax highlighting for multiple programming languages, from C to SQL. Perfect for working through coding assignments together or learning to code as a beginner.</p></MDBCol>
    <MDBCol xs="6" sm="6" md="6" l="6" xl="6"><img style={{height:'100%' , width:'100%'}} src={require('../../Images/OurFeatures4.png')}  /></MDBCol>
  </MDBRow>
  <br/><br/><br/><hr/><br/><br/><br/>

  <MDBRow>
    <MDBCol  xs="6" sm="6" md="6" l="6" xl="6"><img style={{height:'60px' , width:'60px'}} src={require('../../Images/OurFeaturesIcon5.png')}  /><br/><h2>Record Live Lessions</h2> <br/> <p>All tutoring sessions are automatically recorded and you have access to videos to review past lessions. Just imagine if you can replay your class lessions before takinhg a quiz or an exam! Our system now makes it possible.</p></MDBCol>
    <MDBCol xs="6" sm="6" md="6" l="6" xl="6"><img style={{height:'100%' , width:'100%'}} src={require('../../Images/OurFeatures5.png')}  /></MDBCol>
  </MDBRow>
  <br/><br/><br/><hr/><br/><br/><br/>

  <MDBRow>
    <MDBCol  xs="6" sm="6" md="6" l="6" xl="6"><img style={{height:'60px' , width:'60px'}} src={require('../../Images/OurFeaturesIcon6.png')}  /><br/><h2>Capture Whiteboard to PDF</h2> <br/> <p>Don't have to worry about writing ecerything your tutor is writing on the whiteboard. With a single click, you would be able to capture your entire whiteboard and convert it into a PDF document that you can save on your computer print it.</p></MDBCol>
    <MDBCol xs="6" sm="6" md="6" l="6" xl="6"><img style={{height:'100%' , width:'100%'}} src={require('../../Images/OurFeatures6.png')}  /></MDBCol>
  </MDBRow>
  <br/><br/><br/><hr/><br/><br/><br/>


</MDBContainer>
<center><img style={{height:'80px' , width:'300px'}} src={require('../../Images/GetStarted.png')}  /></center>
      <br/><br/><br/><br/><br/><br/>
      <Footer/>
</div>

        );
    }
}
 
export default OurFeatures;

import React from 'react';
import {MDBBadge, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';
import "./index.css"
class Blog_template extends React.Component {
  state = {};
  render() {
    return (
      <div id="canvas">
        <img style={{height:'100%', width:'100%'}} src={require("../../Images/blog-image.png")} />
    <div id="overlapping">
      <h3>
      6 Simple Ways You Can Use Neuroscience to Increase
      </h3>
      <MDBBadge className="blog-badge" pill color="light">
                    <span>Accounting</span>
                  </MDBBadge>
                  <span className="blog-read-time" >5 min read</span>
                  <br/><br/>
                  <p className="blog-text" >
                  Neuroscience is a multidisciplinary science that is concerned with the study of the structure and function...
                  </p>
                  <img src={require("../../Images/blog-blue-arrow.png")} />
    </div>
  <p class="text"></p>
</div>
   );
  }
}

export default Blog_template;
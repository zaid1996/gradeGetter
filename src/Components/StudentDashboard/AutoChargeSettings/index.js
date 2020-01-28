import React, { Component } from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBTable,
    MDBTableBody,
    MDBTableHead
} from "mdbreact";
import { Link } from "react-router-dom"
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../../../App.css";
// import "./index.css"
import SideBar from "../../SideNav"
import TopNav from "../../TopNav"

class AutoChargeSettings extends Component {
    state = {
        
    };

    render() {
        let cardNumber = (
            <span style={{ fontFamily: "Maax", width: "100%" }}>
                <img src={require("../../../Images/card.png")} /> Card Number
      </span>
        );
        return (
            <div className="demo-step1" >
                <MDBRow>
                    <MDBCol lg="12" >
                    <TopNav />
                    </MDBCol>
                    <MDBCol xl="4" lg="4" md="8" sm="12" xs="12">
                        <SideBar />
                    </MDBCol>
                        <MDBRow>
                            <MDBCol xl="4" lg="2" sm="1" md="1" xs="2"></MDBCol>
                            <MDBCol  xl="6" lg="8" sm="10" md="10" xs="4" style={{}}>
                                 <div style={{padding:'80px'}} >
                                <p style={{textAlign:'center',marginTop:'80px', fontWeight:'bold', fontFamily:'Maax', fontSize:'18px', lineHeight:'37px', color:'#203662'}} >
                                When your frogtutoring credit runs low, you can enable Frogtutoring to charge your credit card when your sessions finish. So you can continue uninterrupted.
                                </p>
                                <center>
                                <span style={{color:'#203662', fontSize:'13px', marginLeft:'0px'}} >
                                    <input style={{transform:'scale(1.5)'}} type="checkbox"/>&nbsp;&nbsp;&nbsp;Yes, I want GradeGetter to be able to auto charge my credit card.</span>
                                   <br/><br/>
                                   <MDBBtn outline color="dark" className="z-depth-0">
                                      Save Changes
                                   </MDBBtn>
                                   </center>
                                </div>
                            </MDBCol>
                        </MDBRow>
               
                </MDBRow>/
            </div>
        );
    }
}

export default AutoChargeSettings;

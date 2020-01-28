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
import "./index.css"
import SideBar from "../../SideNav"
import TopNav from "../../TopNav"

class RatePlan extends Component {
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
                            <MDBCol xl="4" lg="3" sm="3" md="3" xs="4"></MDBCol>
                            <MDBCol  xl="6" lg="7" sm="7" md="7" xs="2" style={{}}>
                                 <div style={{padding:'50px'}} >
                                <center><h3>Make Payment</h3>
                                </center>
                                <span style={{fontFamily:'Maax', fontWeight:'bold'}} >Card Number</span>
                                <MDBInput style={{width:'100%', marginTop:'-18px'}} label={cardNumber} outline />
                                <MDBRow>
                                    <MDBCol lg="4" >
                                    <span style={{fontFamily:'Maax', fontWeight:'bold'}} >Month</span>
                                    <MDBInput style={{width:'100%', marginTop:'-18px'}} label="Month" outline />
                                    </MDBCol>
                                    <MDBCol lg="4" >
                                    <span style={{fontFamily:'Maax', fontWeight:'bold'}} >Year</span>
                                    <MDBInput style={{width:'100%', marginTop:'-18px'}} label="Year" outline />
                                    </MDBCol>
                                    <MDBCol lg="4" >
                                    <span style={{fontFamily:'Maax', fontWeight:'bold'}} >CCV2</span>
                                    <MDBInput style={{width:'100%', marginTop:'-18px'}} label="CCV2" outline />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol lg="8" >
                                    <span style={{fontFamily:'Maax', fontWeight:'bold'}} >Coupon Code</span>
                                    <MDBInput style={{width:'100%', marginTop:'-18px'}} label="Coupon Code" outline />
                                    </MDBCol>
                                    <MDBCol lg="4" >
                                    <span style={{fontFamily:'Maax', fontWeight:'bold', color:'white'}} >Coupon Code</span>
                                    <MDBBtn style={{width:'100%', height:'40px', fontSize:'12px' }} outline color="primary">Check Code</MDBBtn></MDBCol>
                                </MDBRow>
                                <span style={{fontFamily:'Maax', fontWeight:'bold'}} >Referal Code</span>
                                <MDBInput style={{width:'100%', marginTop:'-18px'}} label="233423423" outline />
                                <div className='custom-control custom-switch'>
                                <input
                                 type='checkbox'
                                 className='custom-control-input'
                                 id='customSwitchesChecked'
                                 defaultChecked
                                 />
                                <label style={{fontFamily:'Maax'}} className='custom-control-label' htmlFor='customSwitchesChecked'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </label>
                                </div>
                                <MDBBtn style={{width:'100%'}} color="primary">Make Payment</MDBBtn>
                                <br/><br/>
                                <span style={{fontFamily:'Maax', fontWeight:'bold'}} >Cancellation Policy</span>
                                <br/><br/>
                                <span style={{color:'#203662', fontSize:'13px', lineHeight:'27px'}} >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </span>
                                </div>
                            </MDBCol>
                        </MDBRow>
               
                </MDBRow>/
            </div>
        );
    }
}

export default RatePlan;

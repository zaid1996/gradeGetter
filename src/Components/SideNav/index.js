import React from 'react';
import logo from "../../Images/logo.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon, MDBBtn, MDBCollapse, MDBRow } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import "./index.css"


class TopNavigation extends React.Component {
    state = {
        collapseID: ""
      }
      
      toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
      }
      collapseSidebar(){
          console.log("sd")
        document.getElementById("side").style.width = "20px";
        document.getElementById("side-items").style.display = "none";
        document.getElementById("collapse-btn").style.display = "none";
        document.getElementById("open-btn").style.display = "block";
      }
      openSidebar(){
        document.getElementById("side").style.width = "270px";
        document.getElementById("side-items").style.display = "block";
        document.getElementById("collapse-btn").style.display = "block";
        document.getElementById("open-btn").style.display = "none";
      }
    render(){
    return (
        <MDBRow>
        <div id="side" style={{backgroundColor:'#083349'}} className="sidebar-fixed position-fixed">
            {/* <a href="#!" className="logo-wrapper waves-effect">
                <img alt="MDB React Logo" className="img-fluid" src={logo}/>
            </a> */}
            <br/><br/>
            <MDBListGroup id="side-items" className="list-group-flush">
                <NavLink onClick={this.toggleCollapse("basicCollapse")} exact={true} to="#"e>
                    <MDBListGroupItem>
                        <img className="mr-3" src={require("../../Images/payment.png")} />
                        Payment
                        <img style={{marginLeft:'50px'}} className="mr-3" src={require("../../Images/drop-down.png")} />
        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
        <NavLink to="/payment" activeClassName="activeClass">
            <br/>
                    <MDBListGroupItem>
                        Make Payment
                    </MDBListGroupItem>
                </NavLink>
        </MDBCollapse>
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="#" >
                    <MDBListGroupItem>
                    <img className="mr-3" src={require("../../Images/my_tutor.png")} />
                        My Tutor
                    </MDBListGroupItem>
                </NavLink>
                <NavLink onClick={this.toggleCollapse("basicCollaps2")} exact={true} to="#"e>
                    <MDBListGroupItem>
                        <img className="mr-3" src={require("../../Images/message.png")} />
                        Messages
                        <img style={{marginLeft:'40px'}} className="mr-3" src={require("../../Images/drop-down.png")} />
                        <MDBCollapse id="basicCollaps2" isOpen={this.state.collapseID}>
                        <NavLink to="/profile" activeClassName="activeClass">
                        <br/>
                    {/* <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-3"/>
                        Make Payment
                    </MDBListGroupItem> */}
                </NavLink>
        </MDBCollapse>
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="#">
                    <MDBListGroupItem>
                    <img className="mr-3" src={require("../../Images/review_tutor.png")} />
                        Review Tutor
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/ratePlan">
                    <MDBListGroupItem>
                    <img className="mr-3" src={require("../../Images/plan.png")} />
                        Rate Plan
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>

            <br/><br/><br/><br/><br/><br/><br/><br/>
            <NavLink to="#" >
            <div id="collapse-btn" >

                    <MDBListGroupItem  onClick={this.collapseSidebar} >
                    <img className="mr-3 close-sidebar" src={require("../../Images/collapse.png")} />
                       <span className="sidebar-collapse" >Collapse Sidebar</span>
                    </MDBListGroupItem>
                    </div>
                </NavLink>
                   <a id="open-btn" className="open-sidebar" onClick={this.openSidebar} ><img className="mr-3 close-sidebar" src={require("../../Images/collapse.png")} /></a> 
        </div>
    
    
        </MDBRow>
    );
    }
}

export default TopNavigation;
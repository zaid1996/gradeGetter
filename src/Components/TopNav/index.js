import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import "./index.css"
import SideBar from "../SideNav"
import { Link } from 'react-router-dom';

class TopNavigation extends Component {
    state = {
        collapse: false
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <div>
            <MDBNavbar className="navbar dashboard-top" light collapse="lg" expand="xl" scrolling>
                <Link to="/" >
                <img style={{height:'50px', marginLeft:'30px'}} src={require("../../Images/logo.png")}/>
                </Link>
                <MDBNavbarBrand >
                    <span  style={{color:'white', marginLeft:'50px'}} >Schedule A Lesson</span>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick = { this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <a className="nav-link navbar-link mr-3" ><img src={require('../../Images/gift.png')} /></a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a style={{color:'white', backgroundColor:'#2E5365', padding:'8px'}} className="rounded mr-3 nav-link Ripple-parent" >Request new tutor</a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a style={{color:'white', backgroundColor:'#23A4EF', padding:'8px'}} className="rounded mr-3 nav-link Ripple-parent">Schedule a lesson</a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a className="nav-link navbar-link mr-3" ><img src={require('../../Images/message-noti.png')} /></a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a className="nav-link navbar-link" ><img style={{height:'28px'}} src={require('../../Images/profile-dashboard.png')} /></a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a className="nav-link navbar-link " ><img src={require('../../Images/drop-down.png')} /></a>
                        </MDBNavItem>
                        {/* <MDBNavItem>
                            <a className="nav-link navbar-link mr-3" ><img src={require('../../Images/profile-dashboard.png')} /></a>
                        </MDBNavItem> */}
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
            {/* <SideBar/> */}
            </div>
        );
    }
}

export default TopNavigation;
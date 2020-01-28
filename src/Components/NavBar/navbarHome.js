import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBRow,
  MDBCol,
  MDBBtn
} from "mdbreact";
import "../../App.css"; //Import here your file style
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Link } from "react-router-dom";

class NavbarHome extends React.Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <MDBNavbar color="white" transparent expand="xl" className="z-depth-0">
          <MDBNavbarBrand>
            <img
              src={require("../../Images/logo.png")}
              className="nav-bar-logo"
            />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            onClick={this.toggleCollapse}
            color="primary"
            style={{ color: "white" }}
          >
            <img src={require("../../Images/NavToggle.png")}></img>
          </MDBNavbarToggler>
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left className="nav-link-center">
              <MDBNavItem>
                <MDBNavLink
                  to="#!"
                  className=""
                  style={{
                    color: "white",
                    marginRight: "30px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    fontFamily: "Maax-Medium",
                  }}
                >
                  Why us
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="/features"
                  className=""
                  style={{
                    color: "white",
                    marginRight: "30px",
                    fontFamily: "Maax-Medium"
                  }}
                >
                  Features
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="#!"
                  className="   "
                  style={{
                    color: "white",
                    marginRight: "30px",
                    fontFamily: "Maax-Medium"
                  }}
                >
                  Reviews
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="#!"
                  className="  "
                  style={{
                    color: "white",
                    marginRight: "30px",
                    fontFamily: "Maax-Medium"
                  }}
                >
                  Tutors
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="#"
                  className=" "
                  style={{
                    color: "white",
                    marginRight: "30px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    fontFamily: "Maax-Medium"
                  }}
                >
                  Try Demo
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="#"
                  className="  "
                  style={{
                    color: "white",
                    marginRight: "30px",
                    fontFamily: "Maax-Medium"
                  }}
                >
                  Share
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem className="align-middle">
                <MDBNavLink
                  to="/signIn"
                  className=""
                  style={{
                    color: "white",
                    marginRight: "30px",
                    marginTop: "10px",
                    alignSelf: "center",
                    fontFamily: "Maax-Medium"
                  }}
                >
                  Sign In
                </MDBNavLink>
              </MDBNavItem>
              <Link to="/selectGrade" >
              <MDBNavItem>
                <MDBBtn outline color="light" className="z-depth-0">
                  SIGN UP FREE
                </MDBBtn>
              </MDBNavItem>
              </Link>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
    );
  }
}
export default NavbarHome;

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
  MDBBtn,
  MDBContainer
} from "mdbreact";
import { Link } from "react-router-dom";
import "../../App.css"; //Import here your file style
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class NavBar extends React.Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <MDBNavbar color="white" light expand="xl" style={{height:'70px'}}>
        <MDBContainer>
          <MDBNavbarBrand>
         <Link to="/" >
          <img
              src={require("../../Images/logo.png")}
              className="nav-bar-logo"
            />
        </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left className="nav-link-center">
              <MDBNavItem active>
                <MDBNavLink
                  to="#!"
                  className=" font-weight-bold"
                  style={{
                    fontSize: '14px',
                    color: "#284C5F",
                    marginRight: "30px",
                    overflow: "hidden",
                    whiteSpace: "nowrap"
                  }}
                >
                  Why us
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="/features"
                  className="font-weight-bold"
                  style={{ fontSize: '14px', color: "#284C5F", marginRight: "30px" }}
                >
                  Features
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="#!"
                  className=" font-weight-bold  "
                  style={{ fontSize: '14px', color: "#284C5F", marginRight: "30px" }}
                >
                  Reviews
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="#!"
                  className=" font-weight-bold  "
                  style={{ fontSize: '14px', color: "#284C5F", marginRight: "30px" }}
                >
                  Tutors
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="/tryIt"
                  className=" font-weight-bold  "
                  style={{
                    fontSize: '14px',
                    color: "#284C5F",
                    marginRight: "30px",
                    overflow: "hidden",
                    whiteSpace: "nowrap"
                  }}
                >
                  Try Demo
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="#!"
                  className="font-weight-bold  "
                  style={{ fontSize: '14px', color: "#284C5F", marginRight: "30px" }}
                >
                  Share
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem className="align-middle">
                <MDBNavLink
                  to="/signIn"
                  className="font-weight-bold"
                  style={{
                    fontSize: '14px',
                    color: "#284C5F",
                    marginRight: "30px",
                    marginTop: "10px",
                    alignSelf: "center"
                  }}
                >
                  Sign In
                </MDBNavLink>
              </MDBNavItem>
              <Link to="/selectGrade" >
              <MDBNavItem>
                <MDBBtn outline color="dark" className="z-depth-0">
                  SIGN UP FREE
                </MDBBtn>
              </MDBNavItem>
              </Link>
            </MDBNavbarNav>
          </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        
      </div>
    );
  }
}
export default NavBar;

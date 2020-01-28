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
import { BrowserRouter, Link } from "react-router-dom";
import "../../App.css"; //Import here your file style
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class Footer extends React.Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <div>
                <div className="footer" >
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="8" lg="6" sm="12" >
                                <br />
                                <ul className="footer-links" >
                                <Link style={{color:'white'}} to="/contactUs" ><li><a>Contact Us</a></li></Link>
                                <Link style={{color:'white'}} to="/about" ><li><a>About</a></li></Link>
                                <Link style={{color:'white'}} to="/faq" ><li><a>FAQS</a></li></Link>
                                <Link style={{color:'white'}} to="/blog" ><li><a>Blog</a></li></Link>
                                <Link style={{color:'white'}} to="/team" ><li><a>Team</a></li></Link>
                                <Link style={{color:'white'}} to="/refund" ><li><a>Refund</a></li></Link>
                                </ul>
                            </MDBCol>
                            <MDBCol md="4" lg="2" sm="12" >
                                <MDBNavbarBrand>
                                    <ul className="social-links" >
                                        <li><a><img src={require("../../Images/fb.png")} /></a></li>
                                        <li><a><img src={require("../../Images/twitter.png")} /></a></li>
                                        <li><a><img src={require("../../Images/youtube.png")} /></a></li>
                                        <li><a><img src={require("../../Images/instagram.png")} /></a></li>
                                    </ul>
                                </MDBNavbarBrand>
                            </MDBCol>
                            <MDBCol md="12" lg="2" sm="12" ></MDBCol>
                            <MDBCol md="12" lg="2" sm="12" >
                                <MDBNavbarBrand>
                                    <a><img style={{ height: '100%', width: '100%', marginTop: '15%' }} src={require("../../Images/footer-button.png")} /></a>
                                </MDBNavbarBrand>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="12" lg="6" >
                                <ul className="bottom-links" >
                                    <li><a>© 2019 GradeGetter</a></li>
                                    <Link to="/terms" ><li><a>Terms of Service</a></li></Link>
                                    <Link to="/privacy" ><li><a>Privacy Policy</a></li></Link>
                                </ul>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            </div>
        );
    }
}
export default Footer;

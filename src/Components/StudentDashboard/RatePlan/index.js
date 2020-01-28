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
        plan1Disabled: false,
        plan2Disabled: false,
        plan3Disabled: false,
        plan3Disabled: false
    };

    onPlan1Hover() {
        console.log("SS")
        document.getElementsByTagName("th")[4].style.borderLeft = "2px solid #0000007a"
        document.getElementsByTagName("th")[4].style.borderTop = "2px solid #0000007a"
        document.getElementsByTagName("th")[4].style.borderRight = "2px solid #0000007a"
        document.getElementsByTagName("td")[4].style.borderLeft = "2px solid #0000007a"
        document.getElementsByTagName("td")[4].style.borderRight = "2px solid #0000007a"
        document.getElementsByTagName("td")[9].style.borderLeft = "2px solid #0000007a"
        document.getElementsByTagName("td")[9].style.borderRight = "2px solid #0000007a"
        document.getElementsByTagName("td")[14].style.borderLeft = "2px solid #0000007a"
        document.getElementsByTagName("td")[14].style.borderRight = "2px solid #0000007a"
        document.getElementsByTagName("td")[19].style.borderLeft = "2px solid #0000007a"
        document.getElementsByTagName("td")[19].style.borderRight = "2px solid #0000007a"
        document.getElementsByTagName("td")[24].style.borderLeft = "2px solid #0000007a"
        document.getElementsByTagName("td")[24].style.borderRight = "2px solid #0000007a"
        document.getElementsByTagName("td")[24].style.borderBottom = "2px solid #0000007a"
    }
    onPlan1Leave() {
        console.log("SS")
        document.getElementsByTagName("th")[4].style.borderLeft = "none"
        document.getElementsByTagName("th")[4].style.borderTop = "none"
        document.getElementsByTagName("th")[4].style.borderRight = "none"
        document.getElementsByTagName("td")[4].style.borderLeft = "none"
        document.getElementsByTagName("td")[4].style.borderRight = "none"
        document.getElementsByTagName("td")[9].style.borderLeft = "none"
        document.getElementsByTagName("td")[9].style.borderRight = "none"
        document.getElementsByTagName("td")[14].style.borderLeft = "none"
        document.getElementsByTagName("td")[14].style.borderRight = "none"
        document.getElementsByTagName("td")[19].style.borderLeft = "none"
        document.getElementsByTagName("td")[19].style.borderRight = "none"
        document.getElementsByTagName("td")[24].style.borderLeft = "none"
        document.getElementsByTagName("td")[24].style.borderRight = "none"
        document.getElementsByTagName("td")[24].style.borderBottom = "none"
    }

    selectPlan1 = () => {
        console.log("SS")
        document.getElementsByTagName("th")[4].style.backgroundColor = "#F4F6F7"
        document.getElementsByTagName("th")[4].style.backgroundColor = "#F4F6F7"
        document.getElementsByTagName("td")[4].style.backgroundColor = "#F4F6F7"
        document.getElementsByTagName("td")[9].style.backgroundColor = "#F4F6F7"
        document.getElementsByTagName("td")[14].style.backgroundColor = "#F4F6F7"
        document.getElementsByTagName("td")[19].style.backgroundColor = "#F4F6F7"
        document.getElementsByTagName("td")[24].style.backgroundColor = "#F4F6F7"
        this.setState({
            plan1Disabled: true,
            plan2Disabled: false,
            plan3Disabled: false,
            plan4Disabled: false,
        })
        this.onPlan1Leave();
        document.getElementById("plan4-btn").style.display = "block"
        document.getElementById("plan2-btn").style.display = "block"
        document.getElementById("plan3-btn").style.display = "block"
        document.getElementById("plan4-current").style.display = "none"
        document.getElementById("plan2-current").style.display = "none"
        document.getElementById("plan3-current").style.display = "none"
        document.getElementById("plan1-btn").style.display = "none"
        document.getElementById("plan1-current").style.display = "block"
        this.plan1Selected()
    }

    plan1Selected(){
        document.getElementsByTagName("th")[3].style.backgroundColor = "white"
        document.getElementsByTagName("th")[3].style.backgroundColor = "white"
        document.getElementsByTagName("td")[3].style.backgroundColor = "white"
        document.getElementsByTagName("td")[8].style.backgroundColor = "white"
        document.getElementsByTagName("td")[13].style.backgroundColor = "white"
        document.getElementsByTagName("td")[18].style.backgroundColor = "white"
        document.getElementsByTagName("td")[23].style.backgroundColor = "white"
        document.getElementsByTagName("th")[2].style.backgroundColor = "white"
        document.getElementsByTagName("th")[2].style.backgroundColor = "white"
        document.getElementsByTagName("td")[2].style.backgroundColor = "white"
        document.getElementsByTagName("td")[7].style.backgroundColor = "white"
        document.getElementsByTagName("td")[12].style.backgroundColor = "white"
        document.getElementsByTagName("td")[17].style.backgroundColor = "white"
        document.getElementsByTagName("td")[22].style.backgroundColor = "white"
        document.getElementsByTagName("th")[1].style.backgroundColor = "white"
        document.getElementsByTagName("th")[1].style.backgroundColor = "white"
        document.getElementsByTagName("td")[1].style.backgroundColor = "white"
        document.getElementsByTagName("td")[6].style.backgroundColor = "white"
        document.getElementsByTagName("td")[11].style.backgroundColor = "white"
        document.getElementsByTagName("td")[16].style.backgroundColor = "white"
        document.getElementsByTagName("td")[21].style.backgroundColor = "white"
    }

    onPlan2Hover() {
        console.log("SS")
        document.getElementsByTagName("th")[3].style.borderLeft = "2px solid #0000007a"
        document.getElementsByTagName("th")[3].style.borderTop = "2px solid #0000007a"
        document.getElementsByTagName("th")[3].style.borderRight = "2px solid #0000007a"
        document.getElementsByTagName("td")[3].style.borderLeft = "2px solid #0000007a"
        document.getElementsByTagName("td")[3].style.borderRight = "2px solid #0000007a"
        document.getElementsByTagName("td")[8].style.borderLeft = "2px solid #0000007a"
        document.getElementsByTagName("td")[8].style.borderRight = "2px solid #0000007a"
        document.getElementsByTagName("td")[13].style.borderLeft = "2px solid #0000007a"
        document.getElementsByTagName("td")[13].style.borderRight = "2px solid #0000007a"
        document.getElementsByTagName("td")[18].style.borderLeft = "2px solid #0000007a"
        document.getElementsByTagName("td")[18].style.borderRight = "2px solid #0000007a"
        document.getElementsByTagName("td")[23].style.borderLeft = "2px solid #0000007a"
        document.getElementsByTagName("td")[23].style.borderRight = "2px solid #0000007a"
        document.getElementsByTagName("td")[23].style.borderBottom = "2px solid #0000007a"
    }
    onPlan2Leave() {
        console.log("SS")
        document.getElementsByTagName("th")[3].style.borderLeft = "none"
        document.getElementsByTagName("th")[3].style.borderTop = "none"
        document.getElementsByTagName("th")[3].style.borderRight = "none"
        document.getElementsByTagName("td")[3].style.borderLeft = "none"
        document.getElementsByTagName("td")[3].style.borderRight = "none"
        document.getElementsByTagName("td")[8].style.borderLeft = "none"
        document.getElementsByTagName("td")[8].style.borderRight = "none"
        document.getElementsByTagName("td")[13].style.borderLeft = "none"
        document.getElementsByTagName("td")[13].style.borderRight = "none"
        document.getElementsByTagName("td")[18].style.borderLeft = "none"
        document.getElementsByTagName("td")[18].style.borderRight = "none"
        document.getElementsByTagName("td")[23].style.borderLeft = "none"
        document.getElementsByTagName("td")[23].style.borderRight = "none"
        document.getElementsByTagName("td")[23].style.borderBottom = "none"
    }

    selectPlan2 = () => {
        console.log("SS")
        document.getElementsByTagName("th")[3].style.backgroundColor = "#F4F6F7"
        document.getElementsByTagName("th")[3].style.backgroundColor = "#F4F6F7"
        document.getElementsByTagName("td")[3].style.backgroundColor = "#F4F6F7"
        document.getElementsByTagName("td")[8].style.backgroundColor = "#F4F6F7"
        document.getElementsByTagName("td")[13].style.backgroundColor = "#F4F6F7"
        document.getElementsByTagName("td")[18].style.backgroundColor = "#F4F6F7"
        document.getElementsByTagName("td")[23].style.backgroundColor = "#F4F6F7"
        this.setState({
            plan2Disabled: true,
            plan1Disabled: false,
            plan3Disabled: false,
            plan4Disabled: false
        })
        this.onPlan2Leave();
        document.getElementById("plan1-btn").style.display = "block"
        document.getElementById("plan3-btn").style.display = "block"
        document.getElementById("plan4-btn").style.display = "block"
        document.getElementById("plan1-current").style.display = "none"
        document.getElementById("plan3-current").style.display = "none"
        document.getElementById("plan4-current").style.display = "none"
        document.getElementById("plan2-btn").style.display = "none"
        document.getElementById("plan2-current").style.display = "block"
        this.plan2Selected()
    }

    plan2Selected(){
        document.getElementsByTagName("th")[4].style.backgroundColor = "white"
        document.getElementsByTagName("th")[4].style.backgroundColor = "white"
        document.getElementsByTagName("td")[4].style.backgroundColor = "white"
        document.getElementsByTagName("td")[9].style.backgroundColor = "white"
        document.getElementsByTagName("td")[14].style.backgroundColor = "white"
        document.getElementsByTagName("td")[19].style.backgroundColor = "white"
        document.getElementsByTagName("td")[24].style.backgroundColor = "white"
        document.getElementsByTagName("th")[2].style.backgroundColor = "white"
        document.getElementsByTagName("th")[2].style.backgroundColor = "white"
        document.getElementsByTagName("td")[2].style.backgroundColor = "white"
        document.getElementsByTagName("td")[7].style.backgroundColor = "white"
        document.getElementsByTagName("td")[12].style.backgroundColor = "white"
        document.getElementsByTagName("td")[17].style.backgroundColor = "white"
        document.getElementsByTagName("td")[22].style.backgroundColor = "white"
        document.getElementsByTagName("th")[1].style.backgroundColor = "white"
        document.getElementsByTagName("th")[1].style.backgroundColor = "white"
        document.getElementsByTagName("td")[1].style.backgroundColor = "white"
        document.getElementsByTagName("td")[6].style.backgroundColor = "white"
        document.getElementsByTagName("td")[11].style.backgroundColor = "white"
        document.getElementsByTagName("td")[16].style.backgroundColor = "white"
        document.getElementsByTagName("td")[21].style.backgroundColor = "white"
    }

    onPlan3Hover() {
        console.log("SS")
        document.getElementsByTagName("th")[2].style.borderLeft = "2px solid #0000007a"
        document.getElementsByTagName("th")[2].style.borderTop = "2px solid #0000007a"
        document.getElementsByTagName("th")[2].style.borderRight = "2px solid #0000007a"
        document.getElementsByTagName("td")[2].style.borderLeft = "2px solid #0000007a"
        document.getElementsByTagName("td")[2].style.borderRight = "2px solid #0000007a"
        document.getElementsByTagName("td")[7].style.borderLeft = "2px solid #0000007a"
        document.getElementsByTagName("td")[7].style.borderRight = "2px solid #0000007a"
        document.getElementsByTagName("td")[12].style.borderLeft = "2px solid #0000007a"
        document.getElementsByTagName("td")[12].style.borderRight = "2px solid #0000007a"
        document.getElementsByTagName("td")[17].style.borderLeft = "2px solid #0000007a"
        document.getElementsByTagName("td")[17].style.borderRight = "2px solid #0000007a"
        document.getElementsByTagName("td")[22].style.borderLeft = "2px solid #0000007a"
        document.getElementsByTagName("td")[22].style.borderRight = "2px solid #0000007a"
        document.getElementsByTagName("td")[22].style.borderBottom = "2px solid #0000007a"
    }
    onPlan3Leave() {
        console.log("SS")
        document.getElementsByTagName("th")[2].style.borderLeft = "none"
        document.getElementsByTagName("th")[2].style.borderTop = "none"
        document.getElementsByTagName("th")[2].style.borderRight = "none"
        document.getElementsByTagName("td")[2].style.borderLeft = "none"
        document.getElementsByTagName("td")[2].style.borderRight = "none"
        document.getElementsByTagName("td")[7].style.borderLeft = "none"
        document.getElementsByTagName("td")[7].style.borderRight = "none"
        document.getElementsByTagName("td")[12].style.borderLeft = "none"
        document.getElementsByTagName("td")[12].style.borderRight = "none"
        document.getElementsByTagName("td")[17].style.borderLeft = "none"
        document.getElementsByTagName("td")[17].style.borderRight = "none"
        document.getElementsByTagName("td")[22].style.borderLeft = "none"
        document.getElementsByTagName("td")[22].style.borderRight = "none"
        document.getElementsByTagName("td")[22].style.borderBottom = "none"
    }

    selectPlan3 = () => {
        console.log("SS")
        document.getElementsByTagName("th")[2].style.backgroundColor = "#F4F6F7"
        document.getElementsByTagName("th")[2].style.backgroundColor = "#F4F6F7"
        document.getElementsByTagName("td")[2].style.backgroundColor = "#F4F6F7"
        document.getElementsByTagName("td")[7].style.backgroundColor = "#F4F6F7"
        document.getElementsByTagName("td")[12].style.backgroundColor = "#F4F6F7"
        document.getElementsByTagName("td")[17].style.backgroundColor = "#F4F6F7"
        document.getElementsByTagName("td")[22].style.backgroundColor = "#F4F6F7"
        this.setState({
            plan3Disabled: true,
            plan1Disabled: false,
            plan2Disabled: false,
            plan4Disabled: false
        })
        this.onPlan3Leave();
        document.getElementById("plan1-btn").style.display = "block"
        document.getElementById("plan2-btn").style.display = "block"
        document.getElementById("plan4-btn").style.display = "block"
        document.getElementById("plan1-current").style.display = "none"
        document.getElementById("plan2-current").style.display = "none"
        document.getElementById("plan4-current").style.display = "none"
        document.getElementById("plan3-btn").style.display = "none"
        document.getElementById("plan3-current").style.display = "block"
        this.plan3Selected();
    }

    plan3Selected(){
        document.getElementsByTagName("th")[4].style.backgroundColor = "white"
        document.getElementsByTagName("th")[4].style.backgroundColor = "white"
        document.getElementsByTagName("td")[4].style.backgroundColor = "white"
        document.getElementsByTagName("td")[9].style.backgroundColor = "white"
        document.getElementsByTagName("td")[14].style.backgroundColor = "white"
        document.getElementsByTagName("td")[19].style.backgroundColor = "white"
        document.getElementsByTagName("td")[24].style.backgroundColor = "white"
        document.getElementsByTagName("th")[3].style.backgroundColor = "white"
        document.getElementsByTagName("th")[3].style.backgroundColor = "white"
        document.getElementsByTagName("td")[3].style.backgroundColor = "white"
        document.getElementsByTagName("td")[8].style.backgroundColor = "white"
        document.getElementsByTagName("td")[13].style.backgroundColor = "white"
        document.getElementsByTagName("td")[18].style.backgroundColor = "white"
        document.getElementsByTagName("td")[23].style.backgroundColor = "white"
        document.getElementsByTagName("th")[1].style.backgroundColor = "white"
        document.getElementsByTagName("th")[1].style.backgroundColor = "white"
        document.getElementsByTagName("td")[1].style.backgroundColor = "white"
        document.getElementsByTagName("td")[6].style.backgroundColor = "white"
        document.getElementsByTagName("td")[11].style.backgroundColor = "white"
        document.getElementsByTagName("td")[16].style.backgroundColor = "white"
        document.getElementsByTagName("td")[21].style.backgroundColor = "white"
    }

    onPlan4Hover() {
        console.log("SS")
        document.getElementsByTagName("th")[1].style.borderLeft = "2px solid #0000007a"
        document.getElementsByTagName("th")[1].style.borderTop = "2px solid #0000007a"
        document.getElementsByTagName("th")[1].style.borderRight = "2px solid #0000007a"
        document.getElementsByTagName("td")[1].style.borderLeft = "2px solid #0000007a"
        document.getElementsByTagName("td")[1].style.borderRight = "2px solid #0000007a"
        document.getElementsByTagName("td")[6].style.borderLeft = "2px solid #0000007a"
        document.getElementsByTagName("td")[6].style.borderRight = "2px solid #0000007a"
        document.getElementsByTagName("td")[11].style.borderLeft = "2px solid #0000007a"
        document.getElementsByTagName("td")[11].style.borderRight = "2px solid #0000007a"
        document.getElementsByTagName("td")[16].style.borderLeft = "2px solid #0000007a"
        document.getElementsByTagName("td")[16].style.borderRight = "2px solid #0000007a"
        document.getElementsByTagName("td")[21].style.borderLeft = "2px solid #0000007a"
        document.getElementsByTagName("td")[21].style.borderRight = "2px solid #0000007a"
        document.getElementsByTagName("td")[21].style.borderBottom = "2px solid #0000007a"
    }
    onPlan4Leave() {
        console.log("SS")
        document.getElementsByTagName("th")[1].style.borderLeft = "none"
        document.getElementsByTagName("th")[1].style.borderTop = "none"
        document.getElementsByTagName("th")[1].style.borderRight = "none"
        document.getElementsByTagName("td")[1].style.borderLeft = "none"
        document.getElementsByTagName("td")[1].style.borderRight = "none"
        document.getElementsByTagName("td")[6].style.borderLeft = "none"
        document.getElementsByTagName("td")[6].style.borderRight = "none"
        document.getElementsByTagName("td")[11].style.borderLeft = "none"
        document.getElementsByTagName("td")[11].style.borderRight = "none"
        document.getElementsByTagName("td")[16].style.borderLeft = "none"
        document.getElementsByTagName("td")[16].style.borderRight = "none"
        document.getElementsByTagName("td")[21].style.borderLeft = "none"
        document.getElementsByTagName("td")[21].style.borderRight = "none"
        document.getElementsByTagName("td")[21].style.borderBottom = "none"
    }

    selectPlan4 = () => {
        console.log("SS")
        document.getElementsByTagName("th")[1].style.backgroundColor = "#F4F6F7"
        document.getElementsByTagName("th")[1].style.backgroundColor = "#F4F6F7"
        document.getElementsByTagName("td")[1].style.backgroundColor = "#F4F6F7"
        document.getElementsByTagName("td")[6].style.backgroundColor = "#F4F6F7"
        document.getElementsByTagName("td")[11].style.backgroundColor = "#F4F6F7"
        document.getElementsByTagName("td")[16].style.backgroundColor = "#F4F6F7"
        document.getElementsByTagName("td")[21].style.backgroundColor = "#F4F6F7"
        this.setState({
            plan4Disabled: true,
            plan1Disabled: false,
            plan2Disabled: false,
            plan3Disabled: false,
        })
        this.onPlan4Leave();
        document.getElementById("plan1-btn").style.display = "block"
        document.getElementById("plan2-btn").style.display = "block"
        document.getElementById("plan3-btn").style.display = "block"
        document.getElementById("plan1-current").style.display = "none"
        document.getElementById("plan2-current").style.display = "none"
        document.getElementById("plan3-current").style.display = "none"
        document.getElementById("plan4-btn").style.display = "none"
        document.getElementById("plan4-current").style.display = "block"
        this.plan4Selected()
    }

    plan4Selected(){
        document.getElementsByTagName("th")[4].style.backgroundColor = "white"
        document.getElementsByTagName("th")[4].style.backgroundColor = "white"
        document.getElementsByTagName("td")[4].style.backgroundColor = "white"
        document.getElementsByTagName("td")[9].style.backgroundColor = "white"
        document.getElementsByTagName("td")[14].style.backgroundColor = "white"
        document.getElementsByTagName("td")[19].style.backgroundColor = "white"
        document.getElementsByTagName("td")[24].style.backgroundColor = "white"
        document.getElementsByTagName("th")[3].style.backgroundColor = "white"
        document.getElementsByTagName("th")[3].style.backgroundColor = "white"
        document.getElementsByTagName("td")[3].style.backgroundColor = "white"
        document.getElementsByTagName("td")[8].style.backgroundColor = "white"
        document.getElementsByTagName("td")[13].style.backgroundColor = "white"
        document.getElementsByTagName("td")[18].style.backgroundColor = "white"
        document.getElementsByTagName("td")[23].style.backgroundColor = "white"
        document.getElementsByTagName("th")[2].style.backgroundColor = "white"
        document.getElementsByTagName("th")[2].style.backgroundColor = "white"
        document.getElementsByTagName("td")[2].style.backgroundColor = "white"
        document.getElementsByTagName("td")[7].style.backgroundColor = "white"
        document.getElementsByTagName("td")[12].style.backgroundColor = "white"
        document.getElementsByTagName("td")[17].style.backgroundColor = "white"
        document.getElementsByTagName("td")[22].style.backgroundColor = "white"
    }


    render() {
        let emailTxt = (
            <span style={{ fontFamily: "Maax", width: "100%" }}>
                <img src={require("../../../Images/email.png")} /> Type Your E-mail
      </span>
        );
        let passwordTxt = (
            <span style={{ fontFamily: "Maax", width: "100%" }}>
                <img src={require("../../../Images/key.png")} /> **********
        </span>
        );
        return (
            <div className="demo-step1" >
                <TopNav />
                <MDBRow>
                    <MDBCol xl="2" lg="2" md="8" sm="12" xs="12">
                        <SideBar />
                    </MDBCol>
                    <MDBCol xl="10" lg="10" md="8" sm="6" xs="12">
                        <MDBRow>
                            <MDBCol size="1"></MDBCol>
                            <MDBCol lg="10" sm="12" style={{}}>
                                <div style={{padding:'40px', overflowX:'scroll'}} >
                                <center><h3>Rate Your Plan</h3></center>
                                <MDBTable className="plans" bordered>
                                    <MDBTableHead>
                                        <tr>
                                            <th>Plans</th>
                                            <th>Purple IV</th>
                                            <th>Purple III</th>
                                            <th>Purple II</th>
                                            <th id="hover" >Purple I</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        <tr>
                                            <td className="table-col" >Hourly rate for less then 2hrs per person</td>
                                            <td>$49.5</td>
                                            <td>$47.5</td>
                                            <td>$45.5</td>
                                            <td>$43.5</td>
                                        </tr>
                                        <tr>
                                            <td>Hourly rate for two hours or more per lesson</td>
                                            <td>$44.5</td>
                                            <td>$42.5</td>
                                            <td>$40.5</td>
                                            <td>$38.5</td>
                                        </tr>
                                        <tr>
                                            <td>Estimated Tutoring hours</td>
                                            <td>12</td>
                                            <td>26</td>
                                            <td>46</td>
                                            <td>12</td>
                                        </tr>
                                        <tr>
                                            <td>Amount</td>
                                            <td>$534</td>
                                            <td>$1105</td>
                                            <td>$1863</td>
                                            <td>$2112</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <MDBBtn disabled={this.state.plan4Disabled} onClick={this.selectPlan4} onMouseLeave={this.onPlan4Leave} onMouseEnter={this.onPlan4Hover} id="plan4-btn" className="plan-btn btt" style={{ padding: '10px', fontSize: '12px' }} outline color="primary">Select Plan</MDBBtn>
                                                <MDBBtn disabled={this.state.plan4Disabled} onClick={this.selectPlan4} onMouseLeave={this.onPlan4Leave} onMouseEnter={this.onPlan4Hover} id="plan4-current" className="plan-btn" style={{ padding: '10px', fontSize: '12px' }} outline color="primary">Current Plan</MDBBtn>

                                            </td>
                                            <td>
                                                <MDBBtn disabled={this.state.plan3Disabled} onClick={this.selectPlan3} onMouseLeave={this.onPlan3Leave} onMouseEnter={this.onPlan3Hover} id="plan3-btn" className="plan-btn" style={{ padding: '10px', fontSize: '12px' }} outline color="primary">Select Plan</MDBBtn>
                                                <MDBBtn disabled={this.state.plan3Disabled} onClick={this.selectPlan3} onMouseLeave={this.onPlan3Leave} onMouseEnter={this.onPlan3Hover} id="plan3-current" className="plan-btn" style={{ padding: '10px', fontSize: '12px' }} outline color="primary">Current Plan</MDBBtn>

                                            </td>
                                            <td>
                                                <MDBBtn disabled={this.state.plan2Disabled} onClick={this.selectPlan2} onMouseLeave={this.onPlan2Leave} onMouseEnter={this.onPlan2Hover} id="plan2-btn" className="plan-btn" style={{ padding: '10px', fontSize: '12px' }} outline color="primary">Select Plan</MDBBtn>
                                                <MDBBtn disabled={this.state.plan2Disabled} onClick={this.selectPlan2} onMouseLeave={this.onPlan2Leave} onMouseEnter={this.onPlan2Hover} id="plan2-current" className="plan-btn" style={{ padding: '10px', fontSize: '12px' }} outline color="primary">Current Plan</MDBBtn>

                                            </td>
                                            <td>
                                                <MDBBtn disabled={this.state.plan1Disabled} onClick={this.selectPlan1} onMouseLeave={this.onPlan1Leave} onMouseEnter={this.onPlan1Hover} id="plan1-btn" className="plan-btn" style={{ padding: '10px', fontSize: '12px' }} outline color="primary">Select Plan</MDBBtn>
                                                <MDBBtn disabled={this.state.plan1Disabled} onClick={this.selectPlan1} onMouseLeave={this.onPlan1Leave} onMouseEnter={this.onPlan1Hover} id="plan1-current" className="plan-btn" style={{ padding: '10px', fontSize: '12px' }} outline color="primary">Current Plan</MDBBtn>

                                            </td>
                                        </tr>
                                    </MDBTableBody>
                                </MDBTable>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </div>
        );
    }
}

export default RatePlan;

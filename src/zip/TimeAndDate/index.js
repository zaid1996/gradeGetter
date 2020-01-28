import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput
} from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../App.css";
import "../universal.css";

let wholeDate, date, day, month;
let arry = [];
let car = [
  "2",
  "3",
  "3",
  "3",
  "3",
  "3",
  "3",
  "3",
  "3",
  "3",
  "3",
  "3",
  "3",
  "3"
];
let _date = [];
let dooo = [];



class TimeAndDate extends Component {
    state = {
        switch1: true,
      }
      handleSwitchChange = nr => () => {
        let switchNumber = `switch${nr}`;
        this.setState({
          [switchNumber]: !this.state[switchNumber]
        });
      }

  getData(e) {
    console.log("date", _date);
    this.getCalander();
    return (
      <div>
        <div className="calenderRadio" style={{ marginLeft: "20px" }}>
          <input type="radio" id={e} name="radioFruit" value={e} />
          <label for={e}>
            <span className="topDate"> {arry[e].month}</span> <br />
            <span className="midDate"> {arry[e].date}</span> <br />
            <span className="endDate"> {arry[e].day}</span>
          </label>
        </div>
      </div>
    );
  }

  getCalander() {
    for (let i = 0; i < 14; i++) {
      dooo = new Date(new Date().setDate(new Date().getDate() + i));
      switch (dooo.getDay()) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
          day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
          break;
      }
      switch (dooo.getMonth()) {
        case 0:
          month = "Jan";
          break;
        case 1:
          month = "Feb";
          break;
        case 2:
          month = "Mar";
          break;
        case 3:
          month = "April";
          break;
        case 4:
          month = "May";
          break;
        case 5:
          month = "June";
          break;
        case 6:
          month = "July";
          break;
        case 7:
          month = "Aug";
          break;
        case 8:
          month = "Sept";
          break;
        case 9:
          month = "Oct";
          break;
        case 10:
          month = "Nov";
          break;
        case 11:
          month = "Dec";
          break;
      }

      arry.push({ date: dooo.getDate(), month: month, day: day });
    }
  }

  render() {
    let subject_label = (
      <span style={{ fontFamily: "Maax", width: "100%", opacity: "0.4" }}>
        <img src={require("../../Images/shopping-list.png")} /> Type Subjects
      </span>
    );
    let male = (
      <span style={{ fontFamily: "Maax-Bold", width: "100%" }}>
        <img src={require("../../Images/male.png")} /> Male
      </span>
    );
    let female = (
      <span style={{ fontFamily: "Maax-Bold", width: "100%" }}>
        <img src={require("../../Images/female.png")} /> Female
      </span>
    );
    let either = (
      <span style={{ fontFamily: "Maax-Bold", width: "100%" }}>
        <img src={require("../../Images/either.png")} /> Either
      </span>
    );

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 3 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
      }
    };
    return (
      <div>
        <MDBRow>
          <MDBCol
            size="4"
            className="BG"
            style={{ height: window.innerHeight, width: "100%" }}
          >
            <div style={{ height: "100%" }}>
              <a>
                {" "}
                <img
                  style={{ margin: "17px" }}
                  src={require("../../Images/arrow.png")}
                />
              </a>{" "}
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div
                className="academic_front_txt"
                style={{
                  //   zIndex: "-1",
                  position: "relative",
                  marginLeft: "12%"
                }}
              >
                <p
                  style={{
                    fontSize: "50px",
                    fontFamily: "Maax-Bold",
                    color: "white"
                  }}
                >
                  Date & Time
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    fontFamily: "Maax",
                    color: "white"
                  }}
                >
                  This could be solid or tentative start date. You can always
                  adjust start date and time once we connect you with a tutor.
                </p>
                <br />
                <img
                  style={{
                    verticalAlign: "bottom",
                    position: "absolute",
                    bottom: "0",
                    marginLeft: "35px"
                  }}
                  src={require("../../Images/dots.png")}
                />
              </div>{" "}
            </div>
          </MDBCol>

          <MDBCol xl="8" l="8" md="8" sm="12" xs="12">
            <div className="logoSecond">
              <img
                style={{ margin: "17px", height: "55px" }}
                src={require("../../Images/logo.png")}
              />
              <br />

              <p className="emailTXT">
                {" "}
                 Date & Time
              </p>
            </div>
            <div className="whenBig">
              <br />
              <br />
              <br />
              <br />
            </div>
            <div className="whenSmall">
              <br />
              <br />
              <div style={{ width: "80%", marginLeft: "11%" }}>
                <MDBRow>
                  <MDBCol size="3">
                    <strike style={{ color: "#23A4EF" }}>
                      {" "}
                      <p
                        style={{
                          fontFamily: "Maax-Medium",
                          fontSize: "13px",
                          color: "#23A4EF",
                          borderBottom: "1px solid #23A4EF"
                        }}
                      >
                        ACADAMICS
                      </p>{" "}
                    </strike>
                  </MDBCol>
                  <MDBCol size="3">
                    <p
                      style={{
                        fontFamily: "Maax-Medium",
                        fontSize: "13px",
                        color: "#23A4EF",
                        borderBottom: "1px solid #23A4EF"
                      }}
                    >
                      DATE
                    </p>
                  </MDBCol>
                  <MDBCol size="3">
                    <p
                      style={{
                        fontFamily: "Maax-Medium",
                        fontSize: "13px",
                        opacity: "0.1"
                      }}
                    >
                      PROFILE
                    </p>
                  </MDBCol>
                  <MDBCol size="3">
                    <p
                      style={{
                        fontFamily: "Maax-Medium",
                        fontSize: "13px",
                        opacity: "0.1"
                      }}
                    >
                      PAYMENT
                    </p>
                  </MDBCol>
                </MDBRow>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>

            <MDBRow className="marginLeftt">
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
              <MDBCol xl="10" l="12" md="12" sm="12" xs="12">
                <p className="emailTXT">
                  When would you like to start tutoring?
                </p>
              </MDBCol>
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol size="1"></MDBCol>
              <MDBCol size="10">
                <div>
                  <Carousel responsive={responsive}>
                    {car.map((item, index) => this.getData(index))}
                  </Carousel>
                </div>
              </MDBCol>
              <MDBCol size="1"></MDBCol>
            </MDBRow>
            <br />
            <br />

            <br />
            <br />
            <br />
            <br />

            <MDBRow className="marginLeftt">
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
              <MDBCol xl="10" l="12" md="12" sm="12" xs="12">
                <p className="emailTXT">Select Time</p>
              </MDBCol>
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
            </MDBRow>
            <div style={{ marginLeft: "8%", marginRight: "8%" }}>
              <MDBRow>
                <MDBCol xl="4" l="12" md="12" sm="12" xs="12">
                  <div
                    className="select_time_radio"
                    style={{ marginLeft: "20px" }}
                  >
                    <input
                      type="radio"
                      id="selectTime"
                      name="timeRadio"
                      value="selectTime"
                    />
                    <label for="selectTime">
                      Morning <br />1 am - 12 noon
                    </label>
                  </div>
                </MDBCol>

                <MDBCol xl="4" l="12" md="12" sm="12" xs="12">
                  <div
                    className="select_time_radio"
                    style={{ marginLeft: "20px" }}
                  >
                    <input
                      type="radio"
                      id="selectTime2"
                      name="timeRadio"
                      value="selectTime2"
                    />
                    <label for="selectTime2">
                      Afternoon <br />
                      12 noon - 6 pm
                    </label>
                  </div>
                </MDBCol>
                <MDBCol xl="4" l="12" md="12" sm="12" xs="12">
                  <div
                    className="select_time_radio"
                    style={{ marginLeft: "20px" }}
                  >
                    <input
                      type="radio"
                      id="selectTime3"
                      name="timeRadio"
                      value="selectTime3"
                    />
                    <label for="selectTime3">
                      Evening <br />6 pm - 12 am
                    </label>
                  </div>
                </MDBCol>
              </MDBRow>
            </div>

            <div
              style={{ marginLeft: "8%", marginRight: "8%", marginTop: "3%" }}
            >
              <MDBRow>
                <MDBCol xl="4" l="12" md="12" sm="12" xs="12">
                  <div
                    className="select_time_radio"
                    style={{ marginLeft: "20px" }}
                  >
                    <input
                      type="radio"
                      id="selectTime4"
                      name="timeRadio"
                      value="selectTime4"
                    />
                    <label for="selectTime4">
                      Right Now <br />
                      Within 30m - 1hr
                    </label>
                  </div>
                </MDBCol>

                <MDBCol xl="4" l="12" md="12" sm="12" xs="12"></MDBCol>
                <MDBCol xl="4" l="12" md="12" sm="12" xs="12"></MDBCol>
              </MDBRow>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />

            <MDBRow className="marginLeftt">
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
              <MDBCol xl="10" l="12" md="12" sm="12" xs="12">
                <div className="custom-control custom-switch">
                  <input style={{width:'200px'}}
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitches"
                    checked={this.state.switch1}
                    onChange={this.handleSwitchChange(1)}
                    readOnly
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customSwitches"
                  >
                    I am not ready to schedule my appointment
                  </label>
                </div>
              </MDBCol>
              <MDBCol xl="1" l="0" md="0" sm="0" xs="0"></MDBCol>
            </MDBRow>

           
        
            <br />
            <br />
            <br />
            <br />
            <br />
            <hr style={{ border: "1px solid #D8D8D8" }} />
            <br />
            <br />
            <br />

            <MDBRow>
              <MDBCol size="1"></MDBCol>
              <MDBCol size="5">
                <a>
                  <img src={require("../../Images/back.png")} />
                </a>
              </MDBCol>
              <MDBCol size="5">
                <a>
                  <img
                    style={{ width: "100%", height: "90%" }}
                    src={require("../../Images/ContinueBtn.png")}
                  />
                </a>
              </MDBCol>
              <MDBCol size="1"></MDBCol>
            </MDBRow>
            <br />
            <br />
            <br />
            <br />
            <br />
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default TimeAndDate;

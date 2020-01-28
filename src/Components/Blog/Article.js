import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBBadge } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../../App.css";
import NavBar from "../NavBar/Navigation";
import Footer from "../Footer"
import Blog_template from "./blog_template"

class Article extends Component {
  state = {};
  render() {
    return (
      <div>
        <div style={{zIndex:'7', position:'absolute', width:'100%'}} >
        <NavBar />
        </div>
        <br/><br/><br/>
            <MDBRow  style={{marginLeft:'20%', zIndex:'1'}} className="blog-head">
              <MDBCol lg="6" sm="12" md="12" >
                <br /><br /><br /><br />
                <div className="head-title-article" >
                  <h2 className="blog-title" >
                    Shazam!
                    How Editor Michel Aller Transformed into a
                    Blockbuster Editor
                      </h2>
                  <MDBBadge className="blog-badge" pill color="light">
                    <span>Accounting</span>
                  </MDBBadge>
                  <span className="blog-read-time" >5 min read</span>
                  <br /><br />
                  <p className="blog-text" >
                    Neuroscience is a multidisciplinary science that is concerned with the study of the structure and function...
                  </p>
                  <div>
                  <h4 className="article-person-name" >
                  <img style={{ height: '20%', width: '20%', float: 'left', padding: '0 10px 10px 0' }} src={require('../../Images/article-profile.png')} />
                       <span >
                       About Shahodat A.
                       </span>
                       <span style={{ fontSize: '13px', color: '#7B88A0' }} >
                       &nbsp;&nbsp;18 February, 2019
                       </span>
                  <br /><br />
                       <span style={{ fontSize: '13px', color: '#7B88A0' }} >
                       Experienced and Passionate Tutor
                       <br/>
                       <img src={require("../../Images/uni.png")} />
                       &nbsp;&nbsp;University of Texas in Arlington 
                       </span>
                </h4>
                  </div>
                  <br/> 
                </div>
              </MDBCol>
            </MDBRow>
            <br/><br/><br/><br/>
            <MDBContainer>
                <MDBRow>
                    <MDBCol lg="2" >
                        <p>Share</p>
                        <a><img style={{height:'35px'}} src={require("../../Images/fb-share.png")}/></a>
                        <br/><br/>
                        <a> <img style={{height:'35px'}} src={require("../../Images/linkedin-share.png")}/></a>
                        <br/><br/>
                        <a><img style={{height:'35px'}} src={require("../../Images/twitter-share.png")}/></a>
                        <br/><br/>
                        <a><img style={{height:'35px'}} src={require("../../Images/pinteret-share.png")}/></a>
                    
                    </MDBCol>
                    <MDBCol lg="2" ></MDBCol>
                    <MDBCol lg="5" sm="12" >
                        <p className="article-text" >
                        Learning a foreign language is by no means a piece of cake, but it is definitely not impossible. Back in middle school, I remember when I first found out that I would be taking Spanish classes, I was quite nervous. However, I quickly found myself very interested, and I developed my own strategies to effectively learn Spanish and do well in my future Spanish courses. I am not from a Spanish speaking country and I do not have any Spanish speaking friends. Fortunately, both in middle school and high school, I was able to receive a Spanish achievement award during the awards ceremonies. The strategies that I developed will guide students to excel in their beginner as well as more advanced Spanish courses. 
                        </p>
                        <br/>
                        <h3 className="article-heading" >
                        1. Have a Solid Knowledge of the Basics.
                        </h3>
                        <p className="article-text">
                        As a student, you must be able to know the basics in the Spanish language. By basics I mean the alphabet, colors, days of the week, months, seasons, and etc. You should also know the definition of basic words such as name, age, and origin. The next step to knowing the basics is repetition. You must make flashcards with pronunciations, and also you must write out each new word multiple times in order to memorize the correct spelling.
                        </p>
                        <br/>
                        <h3 className="article-heading" >
                        2. Translate the familiar words first.
                        </h3>
                        <p className="article-text">
                        When you read a sentence and don’t understand the meaning of a sentence, translate word by word. For instance, ¿Quantos años tienes? may seem unclear at first, however, if you translate each word, the question will make a lot of sense. Quantos means How many? Años means years, and tienes means you have. By translating each word you can figure out that the question is asking about your age. This is a simple example, however, you can use the same tactics for more complex questions/ sentences. You can even pick out children’s Spanish books and translate each word to practice your translation skills.
                        </p>
                        <br/>
                        <h3 className="article-heading" >
                        3.Familiarize yourself with the infinitive form and all of the conjugations.
                        </h3>
                        <p className="article-text">
                        The infinitive form of the verb has AR, ER, or IR ending such as hablar, comer, and vivir. Make sure you know that the infinitive form is to+ verb such as hablar is to + speak. Many people confuse the conjugated forms of the verb. Therefore, make sure you know that hablo, hablas, habla, hablamos, and hablan all refer to the verb hablar which means to speak. However, they do not mean the same thing, each form refers to its own pronoun.  For instance, when you see the word hablan do not say it automatically think that it means to speak, recognize that this verb is conjugated and it refers to THEY speak.
                        </p>
                        <br/>
                        <h3 className="article-heading" >
                        4. Repetition, repetition, repetitionI can not stress enough repetition can help you learn quickly. 
                        </h3>
                        <p className="article-text">
                        Make notes, flashcards, and repeat the new words as much as possible. Another great way of memorizing is writing out the names of objects in Spanish on a sticky note and sticking it to the corresponding object. For instance, you can put a sticky note with the word SILLA on a chair, MESA on a table, and etc. Each time you will look at these objects you will see the Spanish translation along with the correct spelling. 
                        </p>
                        <br/>
                        <img style={{width:'90%', height:'10%'}} src={require("../../Images/blog-text-picture.png")} />
                        <br/><br/>
                        <h3 className="article-heading" >
                        5. Watch Videos.
                        </h3>
                        <p className="article-text">
                        Nowadays, we all go on youtube and watch some sort of a video in varying lengths. Every once in a while, just search for a Spanish movie with Spanish subtitles and also English subtitles. You do not have to watch an entire episode, you can just watch a few minutes every day. When you read the previous sentence, you might think why Spanish subtitles? Well, reading the Spanish subtitles will allow you to get better at spelling, and also sometimes the actors might speak too fast, so if you read the subtitles you might better understand the meaning. Also, the English subtitles will allow you to get the meaning of simple and more complex words. For instance, after you hear the word VAMOS, or ¿Que Paso? multiple times you will quickly learn their meaning since Spanish speaking people use them a lot.  
                        </p>
                        <br/>
                        <div className="article-profile" >
                  <h4  className="article-person-name" >
                  <img style={{ height: '100%', width: '40%', float: 'left', padding: '0 10px 10px 0' }} src={require('../../Images/article-profile.png')} />
                       <span >
                       About Shahodat A. 
                       </span>
                  <br /><br/>
                       <span style={{ fontSize: '10px', color: '#7B88A0' }} >
                       FrogTutoring Tutor Based in Kansas City, MO
                       </span>
                       <br/>
                       <span style={{ fontSize: '13px', color: '#7B88A0' }} >
                       <br/>
                       I am a chemistry B.A. major and a Biology minor currently finishing my senior year at University of Missouri- Kansas City. I have tutored my classmates and friends in various subject areas.
                       <br/>
                       </span>
                </h4>
                  </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="article-footer" >
        <MDBContainer style={{ marginLeft: '10%' }} >
            <br/><br/>
        <center><h3 className="article-heading">
                       Read Other Articles
                        </h3></center>
            <MDBRow>
              <MDBCol className="bb" lg="6" md="12" sm="12" >
                <Blog_template />
              </MDBCol>
              <MDBCol className="bb" lg="6" md="12" sm="12" >
                <Blog_template />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="home-top-div">
        <br />
          <div style={{ width: "80%", marginLeft: "10%" }}>
            <MDBRow className="home-top-row">
              <MDBCol xl="6" lg="6" md="12">
                <h1
                  style={{
                    textAlign: "left",
                    color: "white",
                    fontSize: "50px",
                    fontFamily: "Maax-Bold"
                  }}
                >
                  No contract.
                </h1>
                <h1
                  style={{
                    textAlign: "left",
                    color: "white",
                    fontSize: "50px",
                    fontFamily: "Maax-Bold"
                  }}
                >
                  No min commitment.
                </h1>
                <br></br>
                <p
                  style={{
                    textAlign: "left",
                    color: "white",
                    fontSize: "23px",
                    fontFamily: "Maax"
                  }}
                >
                  Only 1-on-1 Pay As You Go Online Tutoring With U.S Based
                  Tutors In All Subjects & Test Prep
                </p>
                <br></br>
                <div style={{ width: "100%" }}>
                  <input
                    style={{
                      height: "70px",
                      marginLeft: "0px",
                      marginRight: "0px",
                      marginTop: "0px",
                      // width: "65%",
                      float: "left",
                      paddingLeft: "20px"
                    }}
                    className="home-top-input"
                    placeholder="Enter Your Email"
                  ></input>
                  <MDBBtn
                    color="info"
                    className="home-top-button"
                    style={{
                      height: "70px",
                      marginLeft: "0px",
                      marginRight: "0px", // width: "35%",
                      marginTop: "0px",
                      float: "left",
                      fontSize: "17px",
                      fontFamily: "Maax-Bold"
                    }}
                  >
                    Get Started
                  </MDBBtn>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p
                  style={{
                    textAlign: "left",
                    color: "white",
                    fontSize: "14px",
                    fontFamily: "Maax"
                  }}
                >
                  Over 10,000 verified and background checks U.S tutors ready to
                  work with you
                </p>
              </MDBCol>
              <MDBCol xl="6" lg="6" md="12" style={{ position: "relative" }}>
                <img
                  style={{
                    marginTop: "-50px",
                    marginLeft: "20px",
                    position: "absolute",
                    width: "90%"
                  }}
                  className="home-top-price-img"
                  src={require("../../Images/HomeTopPriceImage.png")}
                ></img>
              </MDBCol>
            </MDBRow>
            <MDBRow style={{ marginTop: "40px", paddingBottom: "40px" }}>
              <MDBCol
                xl="6"
                lg="12"
              // style={{ marginTop: "40px", paddingBottom: "40px" }}
              >
                <MDBRow>
                  <MDBCol size="4">
                    <img
                      src={require("../../Images/HomeTopLogo1.png")}
                      className="home-top-company-logos"
                    ></img>
                  </MDBCol>
                  <MDBCol size="5">
                    <img
                      src={require("../../Images/HomeTopLogo2.png")}
                      className="home-top-company-logos"
                      style={{ marginLeft: "px" }}
                    ></img>
                  </MDBCol>
                  <MDBCol size="3">
                    <img
                      src={require("../../Images/HomeTopLogo3.png")}
                      className="home-top-company-logos"
                    ></img>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol
                xl="6"
                lg="12"
              // style={{ marginTop: "30px", paddinBottom: "40px" }}
              >
                <MDBRow>
                  <MDBCol size="6">
                    <img
                      src={require("../../Images/HomeTopLogo4.png")}
                      className="home-top-company-logos home-top-price-img-right2"
                    ></img>
                  </MDBCol>
                  <MDBCol size="6">
                    <img
                      src={require("../../Images/HomeTopLogo5.png")}
                      className="home-top-company-logos home-top-price-img-right2"
                    ></img>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Article;

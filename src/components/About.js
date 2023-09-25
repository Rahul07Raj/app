import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const About = () => {
  const iconSize = 36; 
  return (
    // <Container>
    <div style={{        overflowX:"hidden"
  }}>
      <Row className="mt-5">
        <Col md={12} className="text-center">
          <h2 style={{ color: "rgb(196, 119, 212)" ,letterSpacing:"4px",fontWeight:"700"}}>
            MANOJ AGRAWAL JI ACTIVITIES
          </h2>
        </Col>
      </Row>
      <Row className="mt-5 px-3 px-md-5" >
        <Col md={4} xs={12} className="text-center">
          <div className="circle">
            <img
              src="//img1.wsimg.com/isteam/stock/2014/:/cr=t:0%25,l:16.65%25,w:66.7%25,h:100%25/rs=w:365,h:365,cg:true"
              style={{ borderRadius: "100%" }}
              alt="Image 1"
              className="img-circle img-fluid max-width-100"
            />
          </div>
          <div className="mt-4">
            <h4>Charity work #1</h4>
            <p style={{color:"rgb(94, 94, 94)",fontWeight:"400"}} className="mt-4">
              Mr. Manoj Agrawal's aspirations extend far beyond personal
              success. They have a profound vision for the future, one that
              includes positive change, sustainability, and social impact. Their
              commitment to leaving the world better than they found it serves
              as a guiding principle in all their endeavors.
            </p>
          </div>
        </Col>
        <Col md={4}  xs={12}  className="text-center">
          <div className="circle">
            <img
              src="//img1.wsimg.com/isteam/stock/V8BQN9z/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365"
              style={{ borderRadius: "100%" }}
              alt="Image 2"
              className="img-circle img-fluid max-width-100"
            />
          </div>
          <div className="mt-4">
            <h4>Charity work #2</h4>
            <p style={{color:"rgb(94, 94, 94)",fontWeight:"400"}} className="mt-4">
              Additional information about the second activity and its impact
              can be placed here.
            </p>
          </div>
        </Col>
        <Col md={4}  xs={12}  className="text-center">
          <div className="circle">
            <img
              src="https://img1.wsimg.com/isteam/stock/9Vo2nj1/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365"
              style={{ borderRadius: "100%" }}
              alt="Image 3"
              className="img-circle img-fluid max-width-100"
            />
          </div>
          <div className="mt-4">
            <h4>Charity work #3</h4>
            <p style={{color:"rgb(94, 94, 94)",fontWeight:"400"}} className="mt-4">
              Additional information about the third activity and its impact can
              be placed here.
            </p>
          </div>
        </Col>
      </Row>
      <div >

      <Row className="mt-5" >
        <Col className="text-center" style={{width:"100%",}}>
        <div
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url('https://img1.wsimg.com/isteam/stock/ja1ljak/:/rs=w:2558,m')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        minHeight: '35vh',
        overflowX:"hidden",
        // color:"red"
        backgroundColor:"red"
      }}
    >
      <div className="text-center text-black">
        <h1 style={{fontWeight:"700",letterSpacing:"2px"}} >REVIEWS</h1>
        <p style={{background:"gray",color:"white",fontSize:"1.3rem"}} className="px-4 p-2 mt-5">Reviews coming soon!</p>
      </div>
    </div>
        </Col>
       </Row>
       </div>

      <Row className="mt-5">
        <Col md={12} className="text-center">
          <h2 style={{ color: "rgb(196, 119, 212)"}}>Connect with Mr. Manoj Agrawal</h2>
          <div className="social-icons mt-4 ">
            <a href="https://www.facebook.com/yourpage">
              <FaFacebook className="mx-3" size={iconSize} />
            </a>
            <a href="https://www.instagram.com/yourpage">
              <FaInstagram className="mx-3" size={iconSize} style={{ fill: 'rgb(225, 48, 108)' }}  />
            </a>
            <a href="https://www.linkedin.com/yourpage">
              <FaLinkedin className="mx-3" size={iconSize} style={{     fill: "rgb(40, 103, 178)" }} />
            </a>
            <a href="https://www.twitter.com/yourpage">
              <FaTwitter className="mx-3" size={iconSize}style={{     fill: " rgb(29, 161, 242)" }}  />
            </a>
            <a href="https://www.youtube.com/yourpage">
              <FaYoutube className="mx-3" size={iconSize} style={{     fill: "rgb(255, 0, 0)" }}/>
            </a>
          </div>
        </Col>
      </Row>
      </div>
    // </Container>

  );
};

export default About;

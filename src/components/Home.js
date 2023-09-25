import React from "react";
import "./style.css"; 
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
  } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      {/* <nav className="navbar sticky">
        <div className="max-width">
          <div className="logo">
            <img
              src="https://img1.wsimg.com/isteam/ip/d34ada36-7020-4f77-9234-dce946fc15f9/blob-a8eee09.png/:/rs=w:370,h:208,cg:true,m/cr=w:370,h:208/qt=q:95"
              alt=""
            />
          </div>
          <ul className="menu">
            <li>
              <a href="#home" className="menu-btn">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="menu-btn">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="menu-btn">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="menu-btn" id="toggle">
            <i className="fa-solid fa-bars" ></i>
          </div>
        </div>
      </nav> */}
      <div className="container">
        <div className="first">
          <img
            src="https://img1.wsimg.com/isteam/stock/ugAlgqgrQJF22zEbg/:/rs=w:3840,m"
            alt=""
          />
        </div>
        <div className="second">
          <div className="s-child">
            <p>
              MR. MANOJ AGRAWAL <br /> SHEOPUR PRIDE <br />
              DEDICATED SOCIAL <br /> VISIONARY PHILANTROPIST
            </p>
            <button>Learn more</button>
          </div>
        </div>
      </div>
      <div className="container-second">
        <h1>WELCOME TO MR. MANOJ AGRAWAL'S PAGE!</h1>
        <div className="section">
          <div className="inside-first">
            <img
              src="https://img1.wsimg.com/isteam/stock/jab2gq1/:/cr=t:7.72%25,l:0%25,w:100%25,h:84.56%25/rs=w:1200,h:600,cg:true"
              alt=""
            />
          </div>
          <div className="inside-second">
            <h2>Mr. Manoj Agrawal</h2>
            <p>
              Mr. Manoj Agrawal: A Beacon of Social Development and Visionary
              Philanthropy
            </p>
            <p>
              Mr. Manoj Agrawal is a distinguished individual who has
              dedicated his life to the betterment of society, inspired by the
              timeless philosophy of Mahatma Gandhi. He currently serves as the
              Managing Director of Shri Hari Transformers Ltd, based in
              Shivpuri, Madhya Pradesh. In addition to his corporate endeavors,
              Mr. Agrawal is the driving force behind the renowned Print Media
              House, "Prakash Jyoti Weekly," a Hindi News magazine.
            </p>
            <p>
              **A Commitment to Community:**
              Mr. Agrawal firmly believes in Mahatma Gandhi's principle that
              all individuals residing in the vicinity are an extension of
              one's own family. With this ethos at heart, he actively
              participates in numerous charity functions and social
              initiatives. His dedication to social development is a testament
              to his unwavering commitment to improving the lives of those
              around him.
            </p>
            <p>
              **An Accomplished Philanthropist:**
              Mr. Manoj Agrawal's philanthropic endeavors have not gone
              unnoticed. He has been honored with prestigious national and
              international awards for his outstanding contributions to
              society. His unwavering dedication to both business and the
              greater good exemplifies his role as a high-profile businessman
              with a heart for change.
            </p>
            <p>
              We invite you to explore the profound impact that Mr. Manoj
              Agrawal has had on our society through his visionary philanthropy
              and unwavering commitment to social development. His remarkable
              journey is a testament to the transformative power of one
              individual's dedication to making the world a better place.
            </p>
          </div>
        </div>
      </div>
      {/* Add the rest of your content here */}
      <div class="container-third">
        <div class="c-section-f">
           <h1>Meet with Mr. Manoj Agrawal</h1>
           <p>Getting to know Mr.Manoj Agrawal is an opportunity to connect with the future. Whether through their thought-provoking talks, innovative projects, or collaborative initiatives, they are a driving force for positive change. Their passion, dedication, and relentless pursuit of excellence inspire those around them to aim higher and dream bigger </p>
            <button>Contact Us</button>
        </div>
        <div class="c-section-s">
            <img src="https://img1.wsimg.com/isteam/stock/4721/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:1200,h:600,cg:true" alt=""/>
        </div>
    </div>
    <div className="social-media">
    <span>
      <FaFacebook className="facebook" />
    </span>
    <span>
      <FaInstagram className="instagram" />
    </span>
    <span>
      <FaLinkedin className="linkedin" />
    </span>
    <span>
      <FaTwitter className="twitter" />
    </span>
    <span>
      <FaYoutube className="youtube" />
    </span>
    </div>
    <div class="sub">
        <h1>SUBSCRIBE</h1>
        <p>Sign up to hear from us about specials, sales, and events.</p>
        <input type="text" placeholder="Email"/>
        <button>SING UP</button>
    </div>
    </div>
  );
};

export default Home;

import React from "react";
import "./style.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="ft">
        <span className="sp">Copyright © 2023 manojagrawal.in - All Rights Reserved.</span>
        <span>Powered by Perfectmedia</span>
      </div>
      <div className="ft1" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <p className="mx-2">ABOUT US</p>
        <p className="mx-2">CONTACT US</p>
      </div>
    </footer>
  );
};

export default Footer;

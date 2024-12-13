import React from "react";
//INTERNAL IMPORT ICON
import { Nav1, Nav2 } from "../../SVG/index";
// import Image from "next/image";
const NavHeader = () => {
  return (
    <div className="nav-header">
      <a href="/" className="brand-logo">
        <Nav1 />
        {/* <Nav2 /> */}
        {/* <Image src="/my_logo.jpg" alt="Logo" width={100} height={30} /> */}
      </a>
      <div className="nav-control">
        <div className="hamburger">
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </div>
      </div>
    </div>
  );
};

export default NavHeader;

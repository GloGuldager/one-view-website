import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import "./Footer.css";


const FooterPage = () => {
  return (


    <MDBFooter color="blue" className="font-small footer">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://gloguldager.github.io/"> Will Abbot, Neha Nautiyal, Gloria Guldager - with React </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
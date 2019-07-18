import React from 'react';
// import { MDBContainer, MDBFooter } from "mdbreact";
import './Footer.css';

const Footer = () => {
  return (
    <body>
      {/* <nav>Some navigation buttons</nav>
      <main>The content</main> */}
      <footer>
        &copy; {new Date().getFullYear()} Copyright: Will Abbot, Neha Nautiyal, Gloria Guldager
          </footer>
    </body>

    // <MDBFooter color="blue" className="font-small footer">
    //   <div className="footer-copyright text-center py-3">
    //     <MDBContainer fluid>
    //       &copy; {new Date().getFullYear()} Copyright: Will Abbot, Neha Nautiyal, Gloria Guldager
    //     </MDBContainer>
    //   </div>
    // </MDBFooter >
  )
}

export default Footer

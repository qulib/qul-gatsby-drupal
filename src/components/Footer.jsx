import React from "react"
import QueensLogo from "../images/qu-logo.svg"

const Footer = () => (
  <footer id="site-footer">
    <a title="Queen's University" href="https://queensu.ca">
      <img id="qu-logo" src={QueensLogo} alt="Queen's University" width="200" height="152"/>
    </a>
  </footer>
)

export default Footer

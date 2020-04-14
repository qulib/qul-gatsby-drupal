import React from "react"
import QueensLogo from "../images/qu-logo.svg"

const Footer = () => (
  <footer id="site-footer">
    <section className="container">
      <a id="qu-logo" title="Queen's University" href="https://queensu.ca">
        <img  src={QueensLogo} alt="Queen's University" width="200" height="152" />
      </a>
    </section>
  </footer>
)

export default Footer

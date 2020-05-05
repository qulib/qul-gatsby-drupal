import React from "react"

import FooterMenu from './FooterMenu'
import SocialLinks from './SocialLinks'

import QueensLogo from "../../images/qu-logo.svg"

const Footer = () => (
  <footer id="site-footer" className="container">

    <section className="footer-top">
      <FooterMenu />
    </section>


    <section className="footer-bottom">

      <SocialLinks />

      <section className="footer-blurb">

        <p>© Copyright {(new Date().getFullYear())} Queen's University Library</p>

        <p>
          Queen's University Library is committed to an inclusive library community with accessible goods, services and facilities that respect the dignity and independence of persons with disabilities.</p>

      </section>


      <a class="queens-logo" title="Queen's University" href="https://queensu.ca">
        <img src={QueensLogo} alt="Queen's University" width="200" height="152" />
      </a>

    </section>

  </footer>
)
export default Footer

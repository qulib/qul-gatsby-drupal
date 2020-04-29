import React from "react"

import QueensLogo from "../../images/qu-logo.svg"
import SocialTwitter from "../../images/social-twitter.svg"
import SocialFacebook from "../../images/social-facebook.svg"
import SocialInstagram from "../../images/social-instagram.svg"
import SocialYouTube from "../../images/social-youtube.svg"

const Footer = () => (
  <footer id="site-footer" className="container">

    <section className="footer-top"></section>



    <section className="footer-bottom">


      <ul class="social-links">

        <li className="social-icon"><a href="https://twitter.com/QueensULibrary">
          <img src={SocialTwitter} alt="Twitter" />
        </a></li>

        <li className="social-icon"><a href="https://www.facebook.com/queenslibrary/">
          <img src={SocialFacebook} alt="Facebook" />
        </a></li>

        <li className="social-icon"><a href="https://www.instagram.com/queensulibrary/">
          <img src={SocialInstagram} alt="Instagram" />
        </a></li>

        <li className="social-icon"><a href="https://www.youtube.com/channel/UCx54VIAlOvLAcVA4VyybvTQ">
          <img src={SocialYouTube} alt="YouTube" />
        </a></li>
      </ul>

      <section className="footer-blurb">

        <p>© Copyright 2020 Queen's University Library</p>

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

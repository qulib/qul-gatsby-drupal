import React from "react"
import QueensLogo from "../images/qu-logo.svg"

const Footer = () => (
  <footer id="site-footer" className="container">

    <ul class="social-links">
      <li><a href="https://twitter.com/QueensULibrary" class="twitter" target="_blank"><span>Twitter</span></a></li>
      <li><a href="https://www.facebook.com/queenslibrary/" class="facebook" target="_blank"><span>Facebook</span></a></li>
      <li><a href="https://www.instagram.com/queensulibrary/" class="instagram" target="_blank"><span>Instagram</span></a></li>
      <li><a href="https://www.youtube.com/channel/UCx54VIAlOvLAcVA4VyybvTQ" class="youtube" target="_blank"><span>YouTube</span></a></li>
    </ul>

    <section className="footer-blurb">


      <p>© Copyright 2020 Queen's University Library</p>

      <p>
        Queen's University Library is committed to an inclusive library community with accessible goods, services and facilities that respect the dignity and independence of persons with disabilities.</p>

    </section>


    <a class="queens-logo" title="Queen's University" href="https://queensu.ca">
      <img src={QueensLogo} alt="Queen's University" width="200" height="152" />
    </a>

  </footer>
)
export default Footer

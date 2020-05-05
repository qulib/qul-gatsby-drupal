import React from "react"

import QueensLogo from "../../images/qu-logo.svg"
import SocialTwitter from "../../images/social-twitter.svg"
import SocialFacebook from "../../images/social-facebook.svg"
import SocialInstagram from "../../images/social-instagram.svg"
import SocialYouTube from "../../images/social-youtube.svg"

const SocialLinks = () => (
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
)
export default SocialLinks

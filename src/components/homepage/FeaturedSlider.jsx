import React from "react"
import Slider from 'react-slick'
// see https://react-slick.neostack.com/

import BellSymbol from '../../images/bell-symbol.svg'

const settings = {
  dots: true,
  fade: true,
  lazyLoad: true,
  infinite: true,
  pauseOnHover: true,
  speed: 500,
  autoplaySpeed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const FeaturedSlider = () => (
  <section className="featured-slider">

    <Slider {...settings}>
      <article className="slide">
        <h2>Did You Know 1</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente eius nihil hic, magnam voluptatem numquam soluta.</p>
        <button>Read More</button>
      </article>
      <article className="slide">
        <h2>Did You Know 2</h2>
        <p>Dolor!, sit amet consectetur adipisicing elit. Sapiente eius nihil hic, magnam voluptatem numquam soluta.</p>
        <button>Read More</button>
      </article>
    </Slider>

    <section className="bell-symbol">
      <img src={BellSymbol} width="" height="" alt="featured slider section" />
    </section>
  </section>
)

export default FeaturedSlider
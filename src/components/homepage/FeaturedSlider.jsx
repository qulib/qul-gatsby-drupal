import React from 'react'
import { Carousel } from 'antd'
import BellSymbol from '../../images/bell-symbol.svg'

function FeaturedSlider() {
  const sliderProps = {
    arrows: true,
    dots: true,
    lazyLoad: true,
    infinite: true,
    pauseOnHover: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <section className="featured-slider-area">
      <section className="slider">
        <Carousel {...sliderProps} autoplay>
          <article className="slide">
            <h2>Did You Know 1</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              eius nihil hic, magnam voluptatem numquam soluta.
            </p>
            <button>Read More</button>
          </article>
          <article className="slide">
            <h2>Did You Know 2</h2>
            <p>
              Dolor!, sit amet consectetur adipisicing elit. Sapiente eius nihil
              hic, magnam voluptatem numquam soluta.
            </p>
            <button>Read More</button>
          </article>
          <article className="slide">
            <h2>Did You Know 3</h2>
            <p>Freedddddeeed m soluta.</p>
            <button>Read More</button>
          </article>
        </Carousel>
      </section>

      <section className="bell-symbol">
        <img
          src={BellSymbol}
          width="200"
          height="200"
          alt="featured slider section"
        />
      </section>
    </section>
  )
}

export default FeaturedSlider

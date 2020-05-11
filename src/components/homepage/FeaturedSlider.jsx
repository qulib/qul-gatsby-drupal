import React, { Component } from 'react'
import { Carousel } from 'antd'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import BellSymbol from '../../images/bell-symbol.svg'

// see https://react-slick.neostack.com/
// const settings = {
//   dots: true,
//   fade: true,
//   lazyLoad: true,
//   infinite: true,
//   pauseOnHover: true,
//   speed: 500,
//   autoplaySpeed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1
// }

class FeaturedSlider extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.carousel = React.createRef()
  }

  next() {
    this.carousel.next()
  }
  previous() {
    this.carousel.prev()
  }

  render() {
    const props = {
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
      <section className="featured-slider">
        <section className="slider">

          {/* <button className="slider-nav prev" onClick={this.previous}>
            <BsChevronLeft />
          </button>
          <button className="slider-nav next" onClick={this.next}>
            <BsChevronRight />
          </button> */}

          <Carousel ref={node => (this.carousel = node)} {...props} autoplay>
            <article className="slide">
              <h2>Did You Know 1</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sapiente eius nihil hic, magnam voluptatem numquam soluta.
              </p>
              <button>Read More</button>
            </article>
            <article className="slide">
              <h2>Did You Know 2</h2>
              <p>
                Dolor!, sit amet consectetur adipisicing elit. Sapiente eius
                nihil hic, magnam voluptatem numquam soluta.
              </p>
              <button>Read More</button>
            </article>
            <article className="slide">
              <h2>Did You Know 3</h2>
              <p>
                Freedddddeeed m soluta.
              </p>
              <button>Read More</button>
            </article>
          </Carousel>

        </section>

        <section className="bell-symbol">
          <img
            src={BellSymbol}
            width=""
            height=""
            alt="featured slider section"
          />
        </section>
      </section>
    )
  }
}

export default FeaturedSlider

import React from 'react'
import { Link } from 'gatsby'

import AskUsSymbol from '../../images/ask-us-symbol.svg'

const AskUsWidget = () => (
  <section className="ask-us-widget">
    <Link to="/">
      <img src={AskUsSymbol} alt="Ask Us" />
    </Link>
  </section>
)

export default AskUsWidget

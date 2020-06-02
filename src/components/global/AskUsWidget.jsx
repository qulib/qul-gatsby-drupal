import React from 'react'
import { Link } from 'gatsby'
import AskUsSymbol from '../../images/ask-us-symbol.svg'

function AskUsWidget() {
  return (
    <section className="ask-us-widget">
      <Link to="/help-services/ask-us">
        <img src={AskUsSymbol} width="200" height="200" alt="Ask Us" />
      </Link>
    </section>
  )
}

export default AskUsWidget

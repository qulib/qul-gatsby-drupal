import React from 'react'
import { Link } from 'gatsby'
import { Input, Popover } from 'antd';

import { FaQuestionCircle } from "react-icons/fa";

import OmniSymbol from '../../images/qul-omni-logo.svg'

const { Search } = Input;

const OmniPopover = (
  <aside className="omni-popover">
    <p>Find full-text articles, books and ebooks, journals, media, and more in a single search</p>
  </aside>
);

const OmniWidget = () => (
  <section className="omni-widget">
    <section className="omni-branding">
      <img src={OmniSymbol} width="200" height="62" alt="Omni logo" />
      <Popover placement="left" content={OmniPopover}>
        <FaQuestionCircle />
      </Popover>
    </section>
    <section className="omni-search">
      <Search
        placeholder="Search anything"
        enterButton="Search"
        size="large"
        onSearch={value => console.log(value)}
      />
    </section>

    <ul className="omni-links">
      <li>
        <a href="https://ocul-qu.primo.exlibrisgroup.com/discovery/search?vid=01OCUL_QU:QU_DEFAULT&amp;lang=en&amp;mode=advanced">Advanced Search</a>
      </li>
      <li>
        <a href="https://ocul-qu.primo.exlibrisgroup.com/discovery/jsearch?vid=01OCUL_QU:QU_DEFAULT&amp;lang=en">Journals</a>
      </li>
      <li>
        <Link to="/search/databases/browse">Databases</Link>
      </li>
      <li>
        <Link to="/search/omni">Help</Link>
      </li>
    </ul>

  </section >
)

export default OmniWidget

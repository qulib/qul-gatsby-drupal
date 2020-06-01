import React from 'react'
import { Link } from 'gatsby'
import { Input, Tooltip, Button } from 'antd'
import { FaQuestionCircle } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import OmniSymbol from '../../images/qul-omni-logo.svg'

const OmniTooltip = (
  <span className="omni-tooltip">
    Find full-text articles, books and ebooks, journals, media, and more in a
    single search
  </span>
)

const { Search } = Input

const OmniSearchButton = (
  <Button
    className="ant-btn ant-input-search-button ant-btn-primary"
    type="primary"
    htmlType="submit"
  >
    <AiOutlineSearch />
  </Button>
)

class OmniWidget extends React.Component {
  constructor(props) {
    super(props)
    this.searchPrimo = this.searchPrimo.bind(this)
  }

  searchPrimo() {
    document.getElementById('primoQuery').value =
      'any,contains,' +
      document.getElementById('primoQueryTemp').value.replace(/[,]/g, ' ')
    document.forms['searchForm'].submit()
  }

  render() {
    return (
      <section className="omni-widget">
        <section className="omni-branding">
          <img src={OmniSymbol} width="200" height="62" alt="Omni logo" />
          <Tooltip
            placement="right"
            title={OmniTooltip}
            overlayClassName="omni-tooltip"
          >
            <FaQuestionCircle />
          </Tooltip>
        </section>

        <section className="omni-search">
          <form
            action="https://ocul-qu.primo.exlibrisgroup.com/discovery/search"
            encType="application/x-www-form-urlencoded; charset=utf-8"
            id="simple"
            method="get"
            name="OnesearchForm"
            onSubmit={this.searchPrimo}
            target="_self"
          >
            <input
              name="institution"
              type="hidden"
              value="01OCUL_QU"
              aria-label="Omni control"
            />
            <input
              name="vid"
              type="hidden"
              value="01OCUL_QU:QU_DEFAULT"
              aria-label="Omni control"
            />
            <input
              id="primoTab"
              name="tab"
              type="hidden"
              value="Everything"
              aria-label="Omni control"
            />
            <input
              id="primoScope"
              name="search_scope"
              type="hidden"
              value="MyInst_and_CI"
              aria-label="Omni control"
            />
            <input
              name="mode"
              type="hidden"
              value="Basic"
              aria-label="Omni control"
            />
            <input
              name="displayMode"
              type="hidden"
              value="full"
              aria-label="Omni control"
            />
            <input
              name="bulkSize"
              type="hidden"
              value="10"
              aria-label="Omni control"
            />
            <input
              name="highlight"
              type="hidden"
              value="true"
              aria-label="Omni control"
            />
            <input
              name="dum"
              type="hidden"
              value="true"
              aria-label="Omni control"
            />
            <input
              id="primoQuery"
              name="query"
              type="hidden"
              aria-label="Omni control"
            />
            <input
              name="displayField"
              type="hidden"
              value="all"
              aria-label="Omni control"
            />
            <input
              name="pcAvailabiltyMode"
              type="hidden"
              value="true"
              aria-label="Omni control"
            />
            <Search
              id="primoQueryTemp"
              placeholder="Search anything"
              enterButton={OmniSearchButton}
              allowClear
            />
          </form>
        </section>

        <ul className="omni-links">
          <li>
            <a href="https://ocul-qu.primo.exlibrisgroup.com/discovery/search?vid=01OCUL_QU:QU_DEFAULT&amp;lang=en&amp;mode=advanced">
              Advanced Search
            </a>
          </li>
          <li>
            <a href="https://ocul-qu.primo.exlibrisgroup.com/discovery/jsearch?vid=01OCUL_QU:QU_DEFAULT&amp;lang=en">
              Journals
            </a>
          </li>
          <li>
            <Link to="/search/databases/browse">Databases</Link>
          </li>
          <li>
            <Link to="/search/omni">Help</Link>
          </li>
        </ul>
      </section>
    )
  }
}

export default OmniWidget

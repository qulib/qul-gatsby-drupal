import React from 'react'
import { Link } from 'gatsby'
import { Menu, Dropdown } from 'antd'
import { FaKey, FaUserAlt, FaChevronDown } from 'react-icons/fa'
import { BsChatFill } from 'react-icons/bs'

const menu = (
  <Menu className="user-menu-dropdown">
    <Menu.Item key="0">
      <a href="https://ocul-qu.primo.exlibrisgroup.com/discovery/account?vid=01OCUL_QU:QU_DEFAULT&amp;section=overview&amp;lang=en">
        My Library Account
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <a href="https://office.com/signin">Office 365</a>
    </Menu.Item>
  </Menu>
)

function UserMenu() {
  return (
    <nav id="user-menu">
      <ul>
        <li>
          <a href="https://proxy.queensu.ca/">
            <FaKey aria-labelledby="off-campus-access-label" />
            <span id="off-campus-access-label">Off-campus Access</span>
          </a>
        </li>
        <li>
          <Link to="/help-services/ask-us">
            <BsChatFill aria-labelledby="ask-us-label" />
            <span id="ask-us-label">Ask Us</span>
          </Link>
        </li>
        <li>
          <Dropdown overlay={menu} trigger={['click']}>
            <button
              className="ant-dropdown-link"
              onClick={e => e.preventDefault()}
            >
              <FaUserAlt aria-labelledby="my-account-label" />
              <span id="my-account-label">
                My Account <FaChevronDown />
              </span>
            </button>
          </Dropdown>
        </li>
      </ul>
    </nav>
  )
}

export default UserMenu

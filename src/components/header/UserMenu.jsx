import React from 'react'
import { Link } from 'gatsby'
import { Menu, Dropdown } from 'antd'
import { FaKey, FaUserAlt } from 'react-icons/fa'
import { BsChatFill } from 'react-icons/bs'

const menu = (
  <Menu>
    <Menu.Item key="0">
    <a href="https://ocul-qu.primo.exlibrisgroup.com/discovery/account?vid=01OCUL_QU:QU_DEFAULT&amp;section=overview&amp;lang=en">My Library Account</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="/">2nd menu item</a>
    </Menu.Item>
    <Menu.Item key="2">3rd menu item</Menu.Item>
  </Menu>
)


const UserMenu = () => (
  <nav id="user-menu">
    <ul>
      <li>
        <a href="/">
          <FaKey />
          <span>Off-campus Access</span>
        </a>
      </li>
      <li>
        <Link to="/">
          <BsChatFill />
          <span>Ask Us</span>
        </Link>
      </li>
      <li>
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <FaUserAlt /><span>My Account</span>
          </a>
        </Dropdown>
      </li>
    </ul>
  </nav>
)

export default UserMenu

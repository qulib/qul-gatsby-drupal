import React from "react"
// import { Link } from "gatsby"
import { FiUser, FiKey, FiMessageCircle } from 'react-icons/fi';


const UserMenu = () => (
  <nav id="user-menu">
    <ul><li><FiKey /><a href="/">Off-campus Access</a></li>
      <li><FiMessageCircle /><a href="/">Ask Us</a></li>
      <li><button><FiUser /> My Account</button></li>
    </ul>
  </nav>
)

export default UserMenu
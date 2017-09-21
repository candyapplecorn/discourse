import React from 'react';
import { Link } from 'react-router-dom'

const Authentication = ({ currentUser, logout }) => (
  currentUser ? (
  <div id="authentication">
    <img src="http://www.tinygraphs.com/labs/isogrids/hexa/freddy?theme=seascape&numcolors=4&size=40&fmt=svg" />
    <div>
      <p>{currentUser.username}</p>
      <Link to="/" onClick={logout}>Logout</Link>
    </div>
  </div>
  ) : (
  <div id="authentication">
    <Link to="/signup">Sign Up</Link>
    <span> / </span>
    <Link to="/login">Log In</Link>
  </div>
  )
)

export default Authentication;

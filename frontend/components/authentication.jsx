import React from 'react';
import { Link } from 'react-router-dom'

const Authentication = ({ currentUser, logout }) => (
  currentUser ? (
  <div id="authentication">
    <img src={ currentUser.img_url } />
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

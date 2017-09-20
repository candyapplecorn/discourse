import React from 'react';
import { Link } from 'react-router-dom'

const Authentication = ({ currentUser, logout }) => (
  currentUser ? (
  <div id="authentication">
    <p>Hi, {currentUser.username}</p>
    <button onClick={logout}>Log Out</button>
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

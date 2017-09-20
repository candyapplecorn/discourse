import React from 'react';
import { Link } from 'react-router-dom'

const Authentication = ({ currentUser, logout }) => (
  currentUser ? (
  <div id="authentication">
    <p>Hi, {currentUser.username}</p>
    <button onClick={logout} value="Log Out" />
  </div>
  ) : (
  <div id="authentication">
    <Link to="/signup">Sign Up</Link>
    <Link to="/login">Log In</Link>
  </div>
  )
)

export default Authentication;

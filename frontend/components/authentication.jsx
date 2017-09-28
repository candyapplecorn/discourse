import React from 'react';
import { Link } from 'react-router-dom'


const Authentication = ({ currentUser, logout, history }) =>{
  // const goToSelf = () =>
  //   history.push(`/users/${currentUser.id}`);

  return (
    currentUser ? (
      <div id="authentication">
        <Link to={`/users/${currentUser.id}`}>
          <img src={ currentUser.img_url } />
        </Link>
        <div>

        <Link to={`/users/${currentUser.id}`}>
          <p>{currentUser.username}</p>
        </Link>

        <Link to="/" onClick={logout}>Logout</Link>
        </div>
      </div>
    ) : (
      <div id="authentication">
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
      </div>
    )
  )
}

export default Authentication;

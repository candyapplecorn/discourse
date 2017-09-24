import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
  if (props.loggedIn)
    return null;

  return (
    <div className="splash">
      <p className="text-over">
        <span>
          What's on your mind? Others want to know.
          <br />
            If only there was a site to let it out...
          <br />
          <Link to="/signup">Write it Up!</Link>
        </span>
        <span />
      </p>
      <div className="splash-image-wrapper">
        <Link to="/signup">
          <img src="https://i.imgur.com/v34y1cp.jpg" />
        </Link>
      </div>
    </div>
  )
}

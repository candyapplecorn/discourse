import React from 'react'
import { Link } from 'react-router-dom';
import FollowButtonContainer from './follow_button/follow_button_container';

const details = ({ story, social })=> {
  const { author: { id, username, img_url: imgUrl },
  body, created_at: createdAt, time_to_read } = story;


  return (
    <div className="story-show-detail">

      <img className="user-icon" src={imgUrl} />
      <div>
        <div>
          <p><Link className="author-detail-link" to={`/users/${id}`}>{username}</Link></p>
          <FollowButtonContainer id={id} />
        </div>

        <div>
          <p>
            {(new Date(createdAt)).toDateString().replace(/.*? /, "")}
            {" · "}
            {time_to_read}
          </p>
        </div>
      </div>
    </div>
  );
};

export default details;

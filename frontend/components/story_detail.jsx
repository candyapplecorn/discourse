import React from 'react'

const details = ({ story, social })=> {
  const { author: { username, img_url: imgUrl },
  body, created_at: createdAt, time_to_read } = story;


  return (
    <div className="story-show-detail">

      <img className="user-icon" src={imgUrl} />
      <div>
        <div>
          <p>{username}</p>
          <button>Follow</button>
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

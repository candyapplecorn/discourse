import React from 'react'

function getTimeToRead(body){
  const averageWPM = 200; // Thanks Google!
  const averageLettersPerWord = 4.5; // Thanks Google!
  let averageWPS = averageWPM / 60; // This is too slow
  averageWPS /= 2; // Will adjust as I see fit
  const secondsPerLetter = averageWPS / averageLettersPerWord;
  const withoutTags = body.replace(/<.*?>/g, "");
  const timeToRead = Math.floor(withoutTags.length * secondsPerLetter / 60);

  return timeToRead < 1 ? "< 1 min read" : `${timeToRead} min read`;
}

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

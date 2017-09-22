import React from 'react'

function getTimeToRead(body){
  const averageWPM = 200; // Thanks Google!
  const averageLettersPerWord = 4.5; // Thanks Google!
  let averageWPS = averageWPM / 60; // This is too slow
  averageWPS /= 2; // Will adjust as I see fit
  const secondsPerLetter = averageWPS / averageLettersPerWord;
  const withoutTags = body.replace(/<.*?>/g, "");
  const timeToRead = Math.floor(withoutTags.length * secondsPerLetter / 60);

  return timeToRead < 1 ? "< one min read" : `${timeToRead} min read`;
}

const details = ({ story })=> {
  const { author: { username, img_url: imgUrl },
  body, created_at: createdAt } = story;


  return (
    <div className="story-show-detail">
      <img src={imgUrl} />
      <div>
        <div>
          <p>{username}</p>
          <button>Follow</button>
        </div>
        
        <div>
          <p>
            {(new Date(createdAt)).toDateString().replace(/.*? /, "")}
            {" · "}
            {getTimeToRead(body)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default details;

import React from 'react'
import { Link } from 'react-router-dom'
import StoryDetail from './story_detail';

function getFirstImage(html){
  const imgUrl = html.replace(/.*?(http.*?(png|jpg|jpeg)).*/, "$1")

  if (imgUrl === html)
    return null;

  return imgUrl;
}

class StoryIndexItem extends React.Component {
  render(){
    const story = this.props.story;
    const { title, id, body } = story
    const imgUrl = getFirstImage(body);

    return (
      <Link to={`/stories/${id}`}>
        <div className={`story-index-item ${!imgUrl && "noimg"}`}>
          {
            imgUrl && (<img src={imgUrl} />)
          }
          <div className="story-index-item-details">
            <p>{title}</p>
            <StoryDetail story={this.props.story} />
          </div>
        </div>
      </Link>
    );
  }
}

export default StoryIndexItem

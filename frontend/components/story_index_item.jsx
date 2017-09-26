import React from 'react'
import { Link } from 'react-router-dom'
import StoryDetail from './story_detail';
import SocialCounts from './social_counts'

function getFirstImage(html){
  const imgUrl = html.replace(/.*?(http.*?(png|jpg|jpeg)).*/, "$1")

  if (imgUrl === html)
    return null;

  return imgUrl;
}

class StoryIndexItem extends React.Component {
  render(){
    const story = this.props.story;
    const {
      title, id, body, current_user_likes, current_user_commented
    } = story
    // const imgUrl = getFirstImage(body);
    const imgUrl = story.first_img

    return (
      <Link to={`/stories/${id}`}>
        <div className={`story-index-item ${!imgUrl && "noimg"} ${story.odd && ' odd '}`}>
          {
            imgUrl && (<img src={imgUrl} />)
          }
          <div className="story-index-item-details">
            <p>{title}</p>
            <StoryDetail story={this.props.story} social={true} />
            <SocialCounts current_user_likes={current_user_likes}
                          current_user_commented={current_user_commented}
                          num_comments={story.num_comments}
                          num_likes={story.likes} />
          </div>
        </div>
      </Link>
    );
  }
}

export default StoryIndexItem

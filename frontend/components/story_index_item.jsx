import React from 'react'
import { Link } from 'react-router-dom'
import StoryDetail from './story_detail';
import SocialCounts from './social_counts'

class StoryIndexItem extends React.Component {
  render(){
    const story = this.props.story;
    const {
      title, id, body, current_user_likes, current_user_commented
    } = story
    const imgUrl = story.first_img
    const goToUser = () => this.props.history.push(`/stories/${id}`)

    return (
        <div className={`story-index-item ${!imgUrl && "noimg"}
                      ${Boolean(story.odd) && ' odd ' || ''}
                      ${story.widen ? " wide " : ' noWide '}`}>
          {
            imgUrl && (<img onClick={goToUser} src={imgUrl} />)
          }
          <div className="story-index-item-details">
      <Link to={`/stories/${id}`}>
            <p>{title}</p>
      </Link>
            <StoryDetail story={this.props.story} social={true} />
            <SocialCounts current_user_likes={current_user_likes}
                          current_user_commented={current_user_commented}
                          num_comments={story.num_comments}
                          num_likes={story.likes} />
          </div>
        </div>
    );
  }
}

export default StoryIndexItem

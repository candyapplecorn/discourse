import React from 'react'

export default ({ num_comments, num_likes, current_user_likes, current_user_commented }) => (
  <div className="social-counts">
    <div>
      {
        current_user_commented ? (
          <i className="fa fa-comment" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-comment-o" aria-hidden="true"></i>
        )
      }
      { num_comments }
    </div>
    <div>
      {
        current_user_likes ? (
          <i className="fa fa-thumbs-up" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
        )
      }
      { num_likes }
    </div>
  </div>
)

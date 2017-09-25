import React from 'react'

export default ({ num_comments, num_likes }) => (
  <div className="social-counts">
    <div>
      <i className="fa fa-comment-o" aria-hidden="true"></i>
      { num_comments }
    </div>
    <div>
      <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
      { num_likes }
    </div>
  </div>
)

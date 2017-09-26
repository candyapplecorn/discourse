import React from 'react'

class Likes extends React.Component {
  constructor(props){
    super(props)
    this.state = { ui: true }
  }
  handleClick(e){
    e.stopPropagation();
    if (this.state.ui)
      this.props.action(
        this.props.likes.current_user_likes
      ).then(() => this.setState({ ui: true }));

    this.setState({ ui: false })
  }
  render(){
    const { likes: { num_likes, current_user_likes } } = this.props;

    return (
      <div className='likes-widget-container'>

        <div onClick={ this.handleClick.bind(this) }
             className='likes-widget {this.state.ui ? "" : "disabled"}'>
          {
            current_user_likes ? (
              <i className="fa fa-thumbs-up" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
            )
          }
          <div className='noselect'>{ num_likes}</div>
        </div>

      </div>
    );
  }
}

export default Likes;

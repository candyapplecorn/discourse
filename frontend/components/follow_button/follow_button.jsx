import React from 'react'

class FollowButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      following: props.following,
      disabled: false
    }
  }

  handleClick(event){
    event.preventDefault()
    const { disabled, following } = this.state
    const { deleteFollow, createFollow } = this.props

    if (disabled) return;

    const action = following ? deleteFollow : createFollow;

    action().then(
      () => this.setState({ disabled: false })
    );

    this.setState({ disabled: true })
  }

  componentWillReceiveProps(newProps){
    this.setState({
      following: newProps.following
    })
  }

  render(){
    const { disabled, following } = this.state
    return (
      <button className={`follow-button ${disabled ? " hidden" : ''}`}
              onClick={this.handleClick.bind(this)}>

              { following ? "Unfollow" : "Follow" }

      </button>
    );
  }
}

export default FollowButton;

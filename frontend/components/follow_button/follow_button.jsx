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
    event.preventDefault();
    const { disabled, following } = this.state;
    const { deleteFollow, createFollow } = this.props;
    const action = following ? deleteFollow : createFollow;

    if (disabled) return;

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
    const { hidden } = this.props

    return (
      <button className={`follow-button ${hidden ? " hide-me" : ''}`}
              onClick={this.handleClick.bind(this)}>

              { following ? "Unfollow" : "Follow" }

      </button>
    );
  }
}

export default FollowButton;

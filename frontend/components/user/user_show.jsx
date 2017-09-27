import React from 'react';
import Loader from '../loader';
import UserShowDetails from './user_show_details';
import StoryIndexContainer from '../story_index_container';

class UserShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true
    }
  }
  componentDidMount(){
    this.props.getUser().then(
      ({ user }) => {
        this.setState(Object.assign({
          loading: false,
        }, user));
      }
    )
  }
  componentWillReceiveProps(newProps){
    this.setState({ loading: false })
  }
  render(){
    if (this.state.loading) return <Loader />;
    const { username, img_url, bio, id } = this.props.user

    return (
      <div>
        <UserShowDetails user={this.props.user}/>
        <StoryIndexContainer />
      </div>
    )
  }
}

export default UserShow;

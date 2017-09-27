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
    const { viewingSelf, user: { username, img_url, bio, id } } = this.props

    return (
      <div>
        <UserShowDetails user={this.props.user}/>
        {
          viewingSelf &&
          <div  className="user-show-following-msg">
            <p>
              Stories from writers you're following
            </p>
          </div>
        }
        <StoryIndexContainer />
      </div>
    )
  }
}

export default UserShow;

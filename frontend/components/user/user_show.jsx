import React from 'react';
import Loader from '../loader';
import UserShowDetails from './user_show_details';
import StoryIndexContainer from '../story_index_container';
import { merge } from 'lodash'

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
        this.setState(merge({
          loading: false,
        }, user));
      }
    )
  }
  componentWillReceiveProps(newProps){
    if (newProps.user) {
      this.setState({ loading: false })
    }
    else {
      this.props.getUser(newProps.match.params.id).then(
        ({ user }) => {
          this.setState(merge({
            loading: false,
          }, user));
        }
      )
    }
  }
  render(){
    if (this.state.loading || !this.props.user) return <Loader />;
    const { viewingSelf, user: { username, img_url, bio, id } } = this.props

    return (
      <div>
        <UserShowDetails userId={this.props.match.params.id }
                         user={this.props.user}
                         viewingSelf={this.props.viewingSelf}/>
        {
          viewingSelf &&
          <div  className="user-show-following-msg">
            <p>
              Stories from writers you're following
            </p>
          </div>
        }
        <StoryIndexContainer viewingSelf={viewingSelf} />
      </div>
    )
  }
}

export default UserShow;

import React from 'react';
import Loader from '../loader';

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
        debugger
      }
    )
  }
  componentWillReceiveProps(newProps){
    this.setState({ loading: false })
  }
  render(){
    if (this.state.loading) return <Loader />

    return (
      <h1>Hi from usershow</h1>
    )
  }
}

export default UserShow;

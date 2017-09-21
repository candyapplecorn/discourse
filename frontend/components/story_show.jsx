import React from 'react'
import { merge } from 'lodash'

class StoryShow extends React.Component {
  constructor(props){
    super(props)
    this.state = { loading: true }
  }
  componentDidMount(){
    this.props.getStory()
    this.setState({ loading: true })
  }
  componentWillReceiveProps(newProps){
    this.setState({ loading: false })
  }

  // todo: turn img links into images
  render(){
    if (this.state.loading)
      return (<h1>Loading...</h1>);

    const { story } = this.props
    const { author, body, title } = story // comments -> commentsIndex

    return (
      <main className="story-show">

        <h1>{title}</h1>
        <section>{ body }</section>
      </main>
    );
  }
}

export default StoryShow;

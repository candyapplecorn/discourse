import React from 'react'
import { merge } from 'lodash'
import ReactHtmlParser from 'react-html-parser';

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
        {this.buttonList()}
        <h1 className="story-title">{title}</h1>
        <section className="story-body">{ ReactHtmlParser(body) }</section>
      </main>
    );
  }

  buttonList(){
    const { story: { current_is_author } } = this.props
    if (!Boolean(current_is_author))
      return (null);

    return (
        <div className="story-show-author-buttons">
          <button onClick={this.goToEdit.bind(this)}>
            <i className="fa fa-pencil" aria-hidden="false"></i>
            Edit
          </button>
          <button onClick={this.deleteThis.bind(this)}>
            <i className="fa fa-trash" aria-hidden="true"></i>
            Delete
          </button>
        </div>
    );
  }

  goToEdit(event){
    event.preventDefault()
    this.props.history.push(`/stories/${this.props.match.params.id}/edit`)
  }

  deleteThis(event){
    event.preventDefault()
    this.props.delete().then(() => this.props.history.push('/'))
  }
}

export default StoryShow;

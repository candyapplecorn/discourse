import React from 'react'
import { merge } from 'lodash'
import ReactHtmlParser from 'react-html-parser';
import StoryDetail from './story_detail';
import CommentsIndexContainer from './comments/comments_index_container';
import Loader from './loader.jsx';


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
      return <Loader />

    const { story } = this.props
    const { author, body, title } = story // comments -> commentsIndex

    return (
      <main className="story-show">
        {this.buttonList()}

        <StoryDetail story={story} author={author} body={body} title={title} />

        <h1 className="story-title">{title}</h1>
        <section className="story-body">
          {
            ReactHtmlParser(this.transformImages(body))
          }
        </section>
        <CommentsIndexContainer />
      </main>
    );
  }

  transformImages(html){
    return html.replace(/(http[^\s]+?(png|jpg|svg|jpeg))/g,
    "<img src='$1'></img>")
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
    this.props.removeStory().then(() => {
      this.props.history.push('/')
    })
  }
}

export default StoryShow;

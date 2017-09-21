import React from 'react';
import { merge } from 'lodash'

class StoryForm extends React.Component {
  constructor(props){
    super(props)
    // this,state??
    this.state = merge({}, this.props.story, { loading: false })
  }
  componentDidMount(){
    if (this.props.match.params.id){
      this.props.getStory()
      this.setState({loading: true})
    }
  }
  componentWillReceiveProps(newProps){
    this.setState({
      title: newProps.story.title
    , body: newProps.story.body
    , id: newProps.story.id
    })
    this.setState({loading: false})
  }
  handleSubmit(event){
    event.preventDefault()
    // todo: change this!
    this.props.submitStory(this.state).then(
      formStory => { debugger; this.props.history.push(`/stories/${formStory.id}`) }
      // DOESNT WORK
    );

  }
  changeFactory(field){
    return e => this.setState({[field]: e.target.value})
  }
  render(){
    if (this.state.loading) return (<h1>Loading...</h1>);
    const btnContents = this.props.formType == 'new' ?
          "Create Story" : "Update Story";

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
      <input type="text" value={this.state.title}
             placeholder="what's on your mind?"
             onChange={this.changeFactory('title')} />

      <textarea value={this.state.body} placeholder="tell the world"
                onChange={this.changeFactory('body')} />

      <input type="submit" value={btnContents} />

      </form>
    );
  }
}

export default StoryForm;

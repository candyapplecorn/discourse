import React from 'react';

class StoryForm extends React.Component {
  constructor(props){
    super(props)
    // this,state??
    this.state = this.props.story
  }
  handleSubmit(event){
    event.preventDefault()
    // todo: change this!
    this.props.submitStory(this.state).then(
      formStory => { this.props.history.push(`api/stories/${formStory.id}`) }
      // DOESNT WORK
    );

  }
  changeFactory(field){
    return e => this.setState({[field]: e.target.value})
  }
  render(){
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

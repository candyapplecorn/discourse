import React from 'react'

class CommentForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      body: props.comment.body,
      id: props.comment.id,
      msg: this.msg()
    }
  }
  componentWillReceiveProps(np){
    this.setState({ body: np.comment.body, id: np.comment.id })
  }
  changeFactory(field){
    //return ({ target: { value: body } }) => this.setState({ body })
    return e => this.setState({ [field]: e.target.value })
  }
  handleSubmit(e){
    e.preventDefault()
    this.props.submitComment(this.state).then(() =>
      this.setState({ body: '', id: null })
    )
  }
  render(){
    const { state: { body, msg } } = this
    const { props: { formType }} = this
    const btnContent = (formType == 'new' ? "Create" : "Update") + " Comment";

    return (
      <form className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
        <em>{msg}</em>
        <textarea onChange={this.changeFactory('body')}
                  value={ body }
        />

        <input type='submit' value={btnContent} />
      </form>
    );
  }

  msg(){
    return MESSAGES[Math.floor(Math.random() * MESSAGES.length)]
  }
}

const MESSAGES = [
  "Chime in!",
  "Thoughts?",
  "Your two cents go here",
  "Care to comment?",
  "It's okay to have an opinion.",
  "Did you know? Cool people leave comments."
];

export default CommentForm;

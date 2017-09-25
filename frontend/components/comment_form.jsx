import React from 'react'

class CommentForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      body: props.comment.body,
      id: props.comment.id
    }
  }
  componentWillReceiveProps(np){
    this.setState({ body: np.comment.body, id: np.comment.id })
  }
  changeFactory(field){
    return ({ target: { value: body } }) => this.setState({ body })
  }
  handleSubmit(e){
    e.preventDefault()
    this.props.submitComment(this.state).then(() =>
      this.setState({ body: '', id: null })
    )
  }
  render(){
    const { state: { body } } = this
    const { props: { formType }} = this
    const btnContent = (formType == 'new' ? "Create" : "Update") + " Comment";

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <textarea onChange={this.changeFactory('body')}
                  value={ body }
        />

        <input type='submit' value={btnContent} />
      </form>
    );
  }
}

export default CommentForm;

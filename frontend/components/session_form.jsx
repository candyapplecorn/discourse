import React from 'react'
import { merge } from 'lodash'
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props){
    super(props)
    this.state = merge({}, props.user)
  }
  actionFactory(fieldname){
    return event => this.setState({ [fieldname]: event.target.value})
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.submitForm(this.state).then(
      () => this.props.history.push('/')
    );
  }
  render(){
    const { username, password } = this.state;
    const { formType, errors } = this.props;
    const header = formType == 'login' ? "Log In" : "Sign Up";
    const btnContent = {
      "Log In": "Log In", "Sign Up": "Create Account"
    };

    return (
      <main className="auth-form">
        <h2>{header}</h2>

        <ul className="auth-errors">
          {
            errors.map((err, i) => <li key={i}>{err}</li>)
          }
        </ul>

        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Username
            <input type="text" onChange={this.actionFactory('username')}
                   value={username} />
          </label>

          <label>
            Password
            <input type="password" onChange={this.actionFactory('password')}
                   value={password} />
          </label>

          <input type="submit" value={btnContent[header]} />
        </form>

        {this.linkToOther()}
      </main>
    );
  }

  linkToOther(){
    return /login/.test(this.props.location.pathname) ? (
      <div>
        <h4>Don't have an account?</h4>
        <Link to="/signup">Sign Up</Link>
      </div>
    ) : (
      <div>
        <h4>Already have an account?</h4>
        <Link to="/login">Log In</Link>
      </div>
    )
  }
}

export default SessionForm

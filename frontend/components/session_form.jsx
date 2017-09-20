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
      <section className="auth-form">
        <main>
          <h1>{header}</h1>

          <ul className="auth-errors">
            {
              errors.map((err, i) =>
                <li key={i}>{err}</li>)
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

            <label>
            <input type="submit" value={btnContent[header]} />
            </label>

            {this.linkToOther()}
          </form>
        </main>
      </section>
    );
  }

  linkToOther(){
    const { clearErrors } = this.props;

    return /login/.test(this.props.location.pathname) ? (
      <div>
        <h4>Don't have an account?</h4>
        <Link onClick={clearErrors} to="/signup">Sign Up</Link>
      </div>
    ) : (
      <div>
        <h4>Already have an account?</h4>
        <Link onClick={clearErrors} to="/login">Log In</Link>
      </div>
    )
  }
}

export default SessionForm

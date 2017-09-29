import React from 'react'
import { merge } from 'lodash'
import { Link } from 'react-router-dom'
import ReactModal from 'react-modal';

class SessionForm extends React.Component {
  constructor(props){
    super(props)
    this.state = merge({}, props.user, { ui: true })
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
          <h1 id="auth-form-header">{header}</h1>

          <ul className="auth-errors">
            {
              errors.map((err, i) =>
                <li key={i}>{err}</li>)
            }
          </ul>

          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
              <input type="text" onChange={this.actionFactory('username')}
                     value={username} placeholder="Username" />
            </label>

            <label>
              <input type="password" onChange={this.actionFactory('password')}
                     value={password} placeholder="Password"/>
            </label>

            <label>
            <input type="submit" value={btnContent[header]} />
            </label>

            {this.linkToOther()}

            {this.demoUserLink()}
          </form>
        </main>
      </section>
    );
  }
  demoUserLink(){
    return (
      <div>
        <h4>Just wanna look around?</h4>
        <button onClick={this.demoUserLogin.bind(this)}>Log In as Demo User</button>
      </div>
    )
  }

  demoUserLogin(event){
    event.preventDefault();
    if (!this.state.ui) return;

    const username = "Anonymous";
    const password = "a password";

    username.split('').forEach((l, i) => window.setTimeout(() =>
      this.setState({ username: this.state.username + l })
    , 70 * (i + 1)));

    password.split('').forEach((l, i) => window.setTimeout(() =>
      this.setState({ password: this.state.password + l })
    , 70 * (i + 1 + username.length)));

    window.setTimeout(() => this.props.login({ username, password }).then(
      () => this.props.history.push('/')
    ), (username.length + password.length + 20) * 50)

    this.setState({ ui: false });
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

import React from 'react'
import { merge } from 'lodash'
import { Link } from 'react-router-dom'
import ReactModal from 'react-modal';

class SessionForm extends React.Component {
  constructor(props){
    super(props)
    this.state = merge({}, props.user, { showModal: true })

    // Modal stuff
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          style={{
            overlay: {
              background: 'rgba(148,148,148, 0.5)'
            },
            content: {
              width: "600px",
              margin: "auto",
              "alignItems": "center",
              "marginTop": "3em"
            }
          }}
        >
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

            {this.demoUserLink()}
          </form>
        </main>
      </section>
        </ReactModal>
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
    event.preventDefault()
    const username = "Anonymous".split('')
    const password = "a password".split('')
    const self = this;

    username.forEach((l, i) => window.setTimeout(() => {
      self.setState({ username: self.state.username + l })
    }, 70 * (i + 1)))

    password.forEach((l, i) => window.setTimeout(() => {
      self.setState({ password: self.state.password + l })
    }, 70 * (i + 1 + username.length)))

    window.setTimeout(() => self.props.login(self.state).then(
      () => self.props.history.push('/')
    ), (username.length + password.length + 20) * 50)
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

  // More modal stuff
  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });

    this.props.history.push("/")
  }
}

export default SessionForm

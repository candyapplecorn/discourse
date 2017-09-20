import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import AuthenticationContainer from './authentication_container';
import SessionFormContainer from './session_form_container';

const App = () => (
  <div>
    <header>
      <Link to="/"><h1>Discourse Blogging</h1></Link>
      <AuthenticationContainer />
    </header>

    <Route path="/login"  component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App

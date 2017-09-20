import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import AuthenticationContainer from './authentication_container';
import SessionFormContainer from './session_form_container';

const App = () => (
  <div>
    <header>
      <Link to="stories/new">Write Something</Link>
      <h1><Link to="/" className="home-link">Discourse</Link></h1>
      <AuthenticationContainer />
    </header>

    <Route path="/login"  component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App

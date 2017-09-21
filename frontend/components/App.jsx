import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import AuthenticationContainer from './authentication_container';
import SessionFormContainer from './session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Link to="/stories/new">Write Something</Link>
      <h1><Link to="/" className="home-link">Write it Up</Link></h1>
      <AuthenticationContainer />
    </header>

    <AuthRoute path="/login"  component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <ProtectedRoute path="/stories/new" component={() => (<h1>To Be Made</h1>)} />
    <ProtectedRoute path="/stories/edit" component={() => (<h1>To Be Made</h1>)} />
  </div>
);

export default App

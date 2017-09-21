import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import AuthenticationContainer from './authentication_container';
import SessionFormContainer from './session_form_container';
import StoryFormContanier from './story_form_container';
import StoryShowContainer from './story_show_container';

// Todo: Make header a component
const App = () => (
  <div>
    <header>
      <Link to="/stories/new">Write Something</Link>
      <h1><Link to="/" className="home-link">Write it Up</Link></h1>
      <AuthenticationContainer />
    </header>

    <AuthRoute path="/login"  component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <ProtectedRoute path="/stories/new" component={StoryFormContanier} />
    <ProtectedRoute path="/stories/:id/edit" component={StoryFormContanier} />
    <Route exact path="/stories/:id" component={StoryShowContainer} />
  </div>
);

export default App

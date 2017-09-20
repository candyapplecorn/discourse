import React from 'react';
import { Link } from 'react-router-dom';
import AuthenticationContainer from './authentication_container';

const App = () => (
  <div>
    <Link to="/"><h1>Discourse Blogging</h1></Link>
    <AuthenticationContainer />
  </div>
);

export default App

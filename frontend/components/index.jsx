import React from 'react'
import StoryIndexContainer from './story_index_container';
import SplashContainer from './splash_container'

class Index extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <main className="index">
        <SplashContainer />
        <StoryIndexContainer />
      </main>
    );
  }
}

export default Index;

import React from 'react'
import StoryIndexContainer from './story_index_container';

class Index extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <main className="index">
        <StoryIndexContainer />
      </main>
    );
  }
}

export default Index;

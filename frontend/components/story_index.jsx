import React from 'react'
import StoryIndexItem from './story_index_item';

class StoryIndex extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getStories()
  }

  render(){
    return (
      <section className="story-index">
        {
          this.props.stories.map((s, i) =>
            <StoryIndexItem key={i} story={s} />
          )
        }
      </section>
    );
  }
}

export default StoryIndex;

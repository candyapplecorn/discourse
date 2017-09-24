import React from 'react'
import StoryIndexItem from './story_index_item';

class StoryIndex extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getStories()
  }

  sortByDate(){
    if (!this.props.stories || !this.props.stories.length)
      return [];

      // DOESN'T WORK
    return this.props.stories.sort(function(a, b){
      a = new Date(a.created_at)
      b = new Date(b.created_at)

      return a > b ? -1 : a < b ? 1 : 0;
    });
  }

  pullImgStoriesUp(list){
    const img = []
    const txt = []

    list.forEach(s => /jpg|jpeg|png|svg/.test(s.body) ?
                      img.push(s) : txt.push(s))
    ;

    (img.length % 2 == 1) && txt.forEach(s => (s.odd = true))

    return img.concat(txt);
  }

  render(){
    return (
      <section className="story-index">
        {
          this.pullImgStoriesUp(this.sortByDate())
          .map((s, i) =>
            <StoryIndexItem key={i} story={s} />
          )
        }
      </section>
    );
  }
}

export default StoryIndex;

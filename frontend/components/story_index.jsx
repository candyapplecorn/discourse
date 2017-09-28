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

    return this.props.stories.sort(function(a, b){
      a = new Date(a.created_at)
      b = new Date(b.created_at)

      return a > b ? -1 : a < b ? 1 : 0;
    });
  }

  pullImgStoriesUp(list){
    const img = []
    const txt = []

    list.forEach(s => s.first_img ?
                      img.push(s) : txt.push(s))
    ;

    if (img.length % 2 == 1)
      txt.forEach(s => (s.odd = true));

    [img, txt].forEach(l => {
      if (l.length == 1 || l.length % 2)
        l[l.length - 1].widen = true;
    })

    return img.concat(txt);
  }

  render(){
    const stories = this.pullImgStoriesUp(this.sortByDate())

    return (
      <section className="story-index">
        {
          stories.map((s, i) =>
            <StoryIndexItem key={i} story={s} history={this.props.history} />
          )
        }
      </section>
    );
  }
}

export default StoryIndex;

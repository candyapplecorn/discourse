# [www.write-it-up.com](https://write-it-up.herokuapp.com/)

Write it Up is a SPA (__s__ingle __p__age web __a__pplication) centered around stories. Users can create, like and comment on stories, as well as follow other users. The application has two main parts: a Ruby on Rails back end, and a React-Redux front end.

See the [wiki](https://github.com/candyapplecorn/discourse/wiki) for Write it Up's project proposal, which includes the database schema, component wireframes and more.

## Feature Highlights

### _Demo Login Animation_

![followToggle](wiki/assets/readme-media/demoLogin.gif)

Taking __Write it Up__ for a test drive is as easy as clicking a button. Logging in instantly doesn't give as much satisfaction as seeing the website type credentials in. This was easily implemented with some calls to Javascript's ```setTimeout```.

### _Elevated State_
[Redux](http://redux.js.org/) is a flavor of [Flux](https://facebook.github.io/flux/) which keeps a single top-level, global state, known as the _store_. This global store is treated as the "single source of truth". Connecting components to the Redux store simplifies managing an application's state. These ```FollowButton``` React components are wired to the Redux store:

![followToggle](wiki/assets/readme-media/followToggle.gif)

All ```FollowButton``` components connect to and may affect the Redux store. A change caused by one component is read by all, creating cool behaviour for free.

A common design pattern in React + Redux is to split features into container and presentational components. Containers connect to the Redux store and import their state, as well as wrap around presentational components, supplying them with information. The presentational component for the ```FollowButton``` only needs to know two things:

1. Is the _current user_ following this user? The buttons needs to say "Follow" or "Unfollow".
2. Is anyone even logged in? Only registered users should see a ```FollowButton```.

This information can be provided by selecting a slice of state from the Redux store. This is conventionally done in the container component's ```mapStateToProps``` function:

```js
const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  const { currentUser } = state.session;
  const followee_ids = currentUser ? currentUser.followee_ids : [];

  return {
    following: id in followee_ids,
    hidden: !Boolean(currentUser)
  };
};
```

Follows is a table in the database; _delete_ a row to unfollow a user, or _create_ a row to follow. The presentational component needs to be able to perform these tasks. The container component thus provides the presentational component with these [thunk action creators](https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559):

```js
const mapDispatchToProps = (dispatch, { id }) => ({
  createFollow: () => dispatch(createFollow(id)),
  deleteFollow: () => dispatch(deleteFollow(id))
});
```

Other components may react to changes caused by a ```FollowButton```. Below is a ```StoryIndex``` filled with ```StoryIndexItems```. Only _followed_ users' stories appear here; watch what happens when this user _unfollows_ some users:

![unFollow](wiki/assets/readme-media/unFollow2.gif)

The ```FollowButton``` and ```StoryIndex``` components share a common slice of state in the Redux store. This allows changes originating from one component to affect others.

The ```Like``` component also benefits from elevated state. ```StoryIndexItem``` components display comment and like counts, and _liking_ or _unliking_ a story affects these counts. Because the ```StoryIndexItem``` and ```Like``` component read from the same slice of state, toggling the ```Like``` component changes the counts in ```StoryIndexItem```:

![like](wiki/assets/readme-media/like.gif)

The ```Like``` component's container was simple enough:

```js
const mapStateToProps = ({ likes }) => ({
  likes
});

const mapDispatchToProps = (dispatch, { match: { params: { id }}}) => ({
  action: currentUserLikes => currentUserLikes ?
            dispatch(deleteLike(id)) : dispatch(createLike(id))
});
```

Handling clicks in the presentational component is succint too:

```js
handleClick(){
  if (this.state.ui)
    this.props.action(
      this.props.likes.current_user_likes
    ).then(() => this.setState({ ui: true }));

  this.setState({ ui: false })
}
```

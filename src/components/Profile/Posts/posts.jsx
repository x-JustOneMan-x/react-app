import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/store';
import Post from './Post/post';
import './posts.scss';

const Posts = (props) => {

  let PostElement = props.posts.map(post => <Post message={post.name} like={post.like} />);

  let newPost = React.createRef();

  let btnClick = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPost.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className="profile__posts">
      <h2>My posts</h2>
      <div className="profile__posts-add">
        <textarea ref={newPost} name="add-post" placeholder="your news" value={props.newText} onChange={onPostChange} />
        <button type="submit" className="btn" onClick={btnClick}>Send</button>
      </div>
      <div className="profile__posts-list">
        {PostElement}
      </div>
    </div>
  );
}

export default Posts;
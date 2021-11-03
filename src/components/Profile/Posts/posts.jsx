import Post from './Post/post';
import './posts.scss';

const Posts = (props) => {

  let PostElement = props.posts.map(post => <Post message={post.name} like={post.like} />);

  return (
    <div className="profile__posts">
      <h2>My posts</h2>
      <div className="profile__posts-add">
        <textarea name="add-post" placeholder="your news">

        </textarea>
        <button type="submit" className="btn">Send</button>
      </div>
      <div className="profile__posts-list">
        {PostElement}
      </div>
    </div>
  );
}

export default Posts;
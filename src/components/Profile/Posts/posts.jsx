import Post from "./Post/post";
import './posts.scss';

const Posts = () => {
    return(
      <div className="profile__posts">
      <h2>My posts</h2>
      <div className="profile__posts-add">
        <textarea name="add-post" placeholder="your news">

        </textarea>
        <button type="submit" className="btn">Send</button>
      </div>
      <div className="profile__posts-list">
        <Post message="Hello! How are you?" like="12"/>
        <Post message="Cool project, guys!" like="12"/>
        <Post message="Hey, i`m working" like="12"/>
        <Post message="Rest! I need some rest!!!" like="12"/>
      </div>
    </div>
    );
}

export default Posts;
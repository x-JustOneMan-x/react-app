import Posts from './Posts/posts';
import ProfileInfo from './ProfileInfo/profileInfo';

const Profile = (props) => {
  return (
    <div className="profile">
      <ProfileInfo settings={props.settings} />
      <Posts posts={props.postsData.posts} dispatch={props.dispatch} newText={props.postsData.newPostText} />
    </div>
  );
}

export default Profile;
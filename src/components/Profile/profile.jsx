import banner from '../../img/banner.jpg';
import Posts from './Posts/posts';
import ProfileInfo from './ProfileInfo/profileInfo';

const Profile = (props) => {
  return (
    <div className="profile">
      <div className="profile__banner">
        <img src={banner} alt="banner" />
      </div>
      <ProfileInfo />
      <Posts posts={props.postsData.posts} dispatch={props.dispatch} newText={props.postsData.newPostText} />
    </div>
  );
}

export default Profile;
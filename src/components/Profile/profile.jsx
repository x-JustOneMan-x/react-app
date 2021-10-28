import banner from '../../img/banner.jpg';
import avatar from '../../img/avatar.jpg';
import Posts from './Posts/posts';

const Profile = () => {
    return(
      <div className="profile">
        <div className="profile__banner">
          <img src={banner} alt="banner" />
        </div>
        <div className="profile__info">
          <div className="profile__avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="profile__person-info">
            <h1 className="person__name">Anatoly Sobko</h1>
            <div className="person__info">
              <div className="person__info-item">
                <span className="person__info-title">Date of Birth:</span>
                <p>2 January</p>
              </div>
              <div className="person__info-item">
                <span className="person__info-title">City:</span>
                <p>Chernivtsi</p>
              </div>
              <div className="person__info-item">
                <span className="person__info-title">Education:</span>
                <p>Chernivtsi Politechnical College</p>
              </div>
              <div className="person__info-item">
                <span className="person__info-title">WEb Site:</span>
                <p><a href="http://full-stack-pro.com/">full-stack-pro.com</a></p>
              </div>
            </div>
          </div>
        </div>
        <Posts/>
      </div>
    );
}

export default Profile;
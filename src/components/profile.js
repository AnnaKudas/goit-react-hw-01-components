import 'styles.css/profile.css';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className="profile-container">
      <div className="card">
        <div className="card-header">
          <div className="card-avatar">
            <img src={avatar} alt="User avatar" />
          </div>
        </div>
        <div className="card-body">
          <div className="card-inner">
            <div style={{ marginBottom: '10px', textAlign: 'center' }}>
              <div style={{ fontSize: '24px' }}>
                {username}
                <span
                  className="color__gray"
                  style={{ marginLeft: '10px' }}
                ></span>
              </div>
              <div className="ctag-prefix-div">
                <span className="tag-prefix">@{tag}</span>
              </div>
            </div>
            <div
              className="color__gray"
              style={{ fontSize: '14px', letterSpacing: '0.5px' }}
            >
              {location}
            </div>
            <div className="card-footer-divider"></div>
            <div className="card-footer-box">
              <div className="card-footer-inner">{stats.followers}</div>
              <div className="card-footer-last">Followers</div>
            </div>
            <div className="card-footer-box">
              <div className="card-footer-inner">{stats.views}</div>
              <div className="card-footer-last">Views</div>
            </div>
            <div className="card-footer-box">
              <div className="card-footer-inner">{stats.likes}</div>
              <div className="card-footer-last">Likes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

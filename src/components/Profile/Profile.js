import React from 'react';
import propTypes from 'prop-types';
import style from './Profile.module.css';
import defImg from './default-avatar.png';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt="Аватар пользователя" className={style.avatar} />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li>
          <span className={style.label}>Followers:</span>
          <span className={style.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={style.label}>Views:</span>
          <span className={style.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={style.label}>Likes:</span>
          <span className={style.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar: defImg,
};
Profile.propTypes = {
  name: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string,
  stats: propTypes.shape({
    followers: propTypes.number.isRequired,
    views: propTypes.number.isRequired,
    likes: propTypes.number.isRequired,
  }),
};

export default Profile;

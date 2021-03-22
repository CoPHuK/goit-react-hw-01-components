import React from 'react';
import propTypes from 'prop-types';
import style from './FriendList.module.css';
const FriendList = ({ friends }) => {
  return (
    <ul className={style.friend_list}>
      {friends.map(friend => {
        const { avatar, name, isOnline, id } = friend;
        return (
          <li className={style.item} key={id}>
            <span className={isOnline ? style.online : style.offline}></span>
            <img className={style.avatar} src={avatar} alt={name} width="48" />
            <p className={style.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      isOnline: propTypes.bool.isRequired,
    }),
  ),
};
export default FriendList;

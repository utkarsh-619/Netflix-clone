import React from 'react';
import './NotificationCard.scss';

const NotificationCard = (props) => {
  return (
    <div className='notiCard'>
        <img src={props.image} alt="Movie Poster" />
        <div className="about">
            <div className="heading">{props.heading}</div>
            <div className="detail">{props.detail}</div>
            <div className="pastedTime">{props.time} days ago</div>
        </div>
    </div>
  )
}

export default NotificationCard;
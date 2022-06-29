import React from 'react';
import SmallLogo from "../navbar/SmallLogo";

const UserCard = props => {
    const cardStyle = {
      display: "flex",
      alignItems: "center",
      paddingBottom: '10px',
    };

    const spanStyle = {
      marginLeft: '5px',
      fontSize: '15px',
    };

    const iconStyle ={
      fontSize: '30px',
      marginRight: '10px'
    }
  return (
    <div className="card" style={cardStyle}>
      {props.flag && <SmallLogo url={props.url} alt={props.alt} />}
      {!props.flag && <props.icon style={iconStyle}/>}

      <span style={spanStyle}>{props.userName}</span>
    </div>
  );
}

export default UserCard;
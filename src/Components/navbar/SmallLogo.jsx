import React from "react";

const Small_Image = (props)=>{

    const imgStyle = {
      width: "30px",
      marginRight: '10px',
      borderRadius: "5px",
      objectFit: "cover",
      cursor: "pointer",
    };

    return (
        <img src={props.url} alt={props.alt} style={imgStyle}/>
    )
}

export default Small_Image;


// NewsСardMedium;
// NewsCardMedium

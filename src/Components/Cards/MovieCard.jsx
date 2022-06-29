import "./MovieCard.scss";
import {
  Add,
  KeyboardArrowDownRounded,
  PlayCircleFilledOutlined,
  ThumbUpOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";

export default function MovieCard(props) {
  const boxRef = useRef();
  const [isHover, setIsHover] = useState(false);
  const trailer =
    "https://media.istockphoto.com/videos/interior-designers-hand-selecting-fabric-on-drapery-catalog-with-video-id1342687508";

  const handleHover = (flag) => {
    let leftDis = boxRef.current.getBoundingClientRect().x;
    boxRef.current.style.left = `${leftDis - 50}px`;
    setIsHover(flag);
  };

  return (
    <div
      className="box"
      ref={boxRef}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <img
        src="https://gamingonphone.com/wp-content/uploads/2021/09/Screenshot-2021-09-24-at-12.09.19-AM.jpg"
        alt="poster"
      />

      {isHover && <video src={trailer} autoPlay={true} loop muted></video>}
      <div className="cardIcons">
        <div className="left">
          <PlayCircleFilledOutlined className="play" />
          <Add className="add movieCardIcon" />
          <ThumbUpOutlined className="like movieCardIcon" />
        </div>
        <div className="right">
          <KeyboardArrowDownRounded className="more movieCardIcon" />
        </div>
      </div>

      <div className="info">
        <span className="time">1hour 20mins</span>
        <span className="limit">+13</span>
        <span className="year">2021</span>

        <div className="plot">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          sed numquam deserunt esse perspiciatis error obcaecati architecto,
        </div>

        <span className="genre">Action</span>
      </div>
    </div>
  );
}

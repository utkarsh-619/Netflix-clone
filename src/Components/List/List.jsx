import { useRef } from "react";
import "./List.scss";
import { ArrowBackIos, ArrowForwardIos} from "@material-ui/icons";
import MovieCard from "../Cards/MovieCard";

const List = () => {
  const listRef = useRef();
  const leftBtn = useRef();

  const handleClick = (d) => {

    if (d === "Left") {
      listRef.current.scrollBy({
        left: -700,
        behavior: "smooth",
      });
      
    } else if (d === "Right") {
      listRef.current.style.margin = `0px`;
      leftBtn.current.style.zIndex = '10';
      
      listRef.current.scrollBy({
        left: 700,
        behavior: "smooth",
      });
    }
  };

  const rightSliderHandler = () => {
    listRef.current.style.margin = `0px`;
    leftBtn.current.style.zIndex = "10";
  }

  return (
    <div className="list">
      <h2 className="listTitle">Movie title</h2>
      <div className="movieList">
        <div className="arrow left" ref={leftBtn} onClick={()=>handleClick("Left")}>
          <ArrowBackIos className="arrowLeft" />
        </div>
        <div className="wraper" onScroll={rightSliderHandler} ref={listRef}>
          {[...Array(10)].map((e, i) => (
            <MovieCard index={i} key={i} />
          ))}
        </div>
        <div className="arrow right" onClick={()=>handleClick("Right")}>
          <ArrowForwardIos className="arrowRight" />
        </div>
      </div>
    </div>
  );
}



export default List;
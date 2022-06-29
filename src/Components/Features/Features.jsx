import "./Features.scss";
import { PlayArrowRounded, InfoOutlined } from "@material-ui/icons";
import List from "../List/List";

const Features = () => {
  return (
    <div className="features">
      <img
        className="mainImage"
        src="https://wallpapercave.com/wp/wp6725748.jpg"
        alt="img"
      />
      <div className="blur"></div>
      <div className="featuresInfo">
        <img
          className="featuresTitle"
          src="https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVkxbtY1jJj5_T6LyAEOLLza0XfXXSIee-6_Vp_BBslph9PC3jbH5PVtUCdrwUl5cW-qWWGmV15ExDgESUKYfwq94jzeLSFEYIsU.png"
          alt="poster Title"
        />

        <p className="plot">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet temporibus quae eos repudiandae iusto corporis quia voluptatem corrupti, libero est sequi sit,
        </p>

        <div className="buttons">
          <button className="play">
            <PlayArrowRounded className="icon"/>
            Play
          </button>

          <button className="info">
            <InfoOutlined className="icon"/>
            More Info
          </button>
        </div>
        
      </div>
      <div className="firstList">
        <List/>
      </div>

    </div>
  );
}

export default Features
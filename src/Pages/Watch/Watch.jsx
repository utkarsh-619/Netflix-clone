import { ArrowBack } from "@material-ui/icons";
import "./Watch.scss";

const Watch = () => {
    const video =
      "https://media.istockphoto.com/videos/interior-designers-hand-selecting-fabric-on-drapery-catalog-with-video-id1342687508";
  return (
    <div className="watch">
      <div className="back">
        <ArrowBack className="icon"/>
        <span>Go Back</span>
      </div>

        <div className="video">
            <video src={video} autoPlay progress controls/>
        </div>
    </div>
  );
};

export default Watch;

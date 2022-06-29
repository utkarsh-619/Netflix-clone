import { ArrowDropDown, EditOutlined, Notifications, Search, PersonOutlineOutlined, HelpOutlineOutlined,} from "@material-ui/icons";
import { useState } from "react";
import "./Navbar.scss";
import SmallLogo from "./SmallLogo";
import UserCard from "../Cards/UserCard";
import NotificationCard from "../Cards/NotificationCard";
import NotiData from "../../Data/NotiData";

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);
  
  window.onscroll = () => {
    setIsTop(window.pageYOffset <= 5 ? true : false);
  };

  const notiHandler = (data, index) => {
    return (
      <NotificationCard
        image={data.Image}
        heading={data.Heading}
        detail={data.Detail}
        time={data.Time}
        key={index}
      />
    );
  };

  return (
    <div className={isTop ? "navbar" : "navbar scrolled"}>
      <div className="left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Netflix"
        />
        <span>Home</span>
        <span>TV Shows</span>
        <span>Movies</span>
        <span>News & Popular</span>
        <span>My List</span>
      </div>

      <div className="right">
        <Search className="icons" />
        <span className="userName">Children</span>

        <div className="notification-container">
          <Notifications className="notification" />
          <div className="notificationBox">
            {NotiData.map(notiHandler)}
          </div>
        </div>

        <div className="profile">
          <SmallLogo
            url="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
            alt="user"
          />

          <ArrowDropDown className="icons arrow" />
          <div className="options">
            <div className="accounts">
              <UserCard
                url="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
                alt="user"
                userName="Narayan"
                flag={true}
              />
              <UserCard
                url="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="user"
                userName="Shikhar"
                flag={true}
              />
              <UserCard
                url="https://external-preview.redd.it/0dTT-3SprPcsNCqo1GTCI-nqGM9EdZYwqyYr_pZ-baE.jpg?auto=webp&s=a1e8532d326f5aa122df2f31694bf142f117fc06"
                alt="user"
                userName="Aman"
                flag={true}
              />
              <UserCard icon={EditOutlined} userName="Manage Profiles" />
            </div>
            <div className="account-link">
              <UserCard icon={PersonOutlineOutlined} userName="Account" />
              <UserCard icon={HelpOutlineOutlined} userName="Help Center" />
            </div>
            <div className="signOut">Sign Out of Netflix</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import "./Home.scss";
import Navbar from "../../Components/navbar/Navbar";
import List from "../../Components/List/List";
import Features from "../../Components/Features/Features";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Features/>
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}

export default Home;
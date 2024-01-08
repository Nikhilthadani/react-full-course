import React from "react";
import Searchbar from "../components/searchbar";
import "../styles/Home.css";
const Home = () => {
  return (
    <div>
      <div className="home-content">
        <div>
          <h4 className="home-title">Search Any GitHub User</h4>
        </div>
        <Searchbar />
      </div>
    </div>
  );
};

export default Home;

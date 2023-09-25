import React from "react";
import './Home.css'
import Link from "next/link";

const Home = () => {
  return (
    <div className="Hero">
      <div className="hero_container">
        <div className="hero_elements">
          <h1 className="top_text">Your Path to Quality <span className="decoration"> Generic </span> Medications</h1>
          <h5 className="bottom_text">
            A New Era in Healthcare - Generic Medicines Made Easy
          </h5>

          <button className="button_hero">
            <div className="button_text_hero"><Link style={{ textDecoration: 'none', color: 'white' }} href="/medicines">Explore Generic Options</Link></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
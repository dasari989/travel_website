import React, { useEffect } from 'react';
import './home.css';
import video from './../../Assets/videos/video2.mp4'
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import { BsListTask } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="overlay">
        <video src={video} muted autoPlay loop type="video/mp4"></video>
      </div>
      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Search Your Holidays
          </h1>
        </div>
      <div data-aos="fade-up" className="cardDiv grid">
        <div className="destinationInput">
        <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
              <input className="inp" type="text" placeholder="Enter name here..." />
              <GrLocation className="icon" /></div>
            
          </div>
          <div className="dateInput">
            <label htmlFor="date">Select Your Time:</label>
            <div className="input flex">
              <input className="inp" type="date" />
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max Price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input className="inp" type="range" max={5000} min={1000} />
            </div>
          </div>
          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>
         
        </div>
        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>
          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

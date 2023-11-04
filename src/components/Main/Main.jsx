import React, { useEffect } from 'react';
import './main.css';
import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from 'react-icons/hi';

import img from '../../Assets/img(1).jpg';
import img2 from '../../Assets/img(2).jpg';
import img3 from '../../Assets/img(3).jpg';
import img4 from '../../Assets/img(4).jpg';
import img5 from '../../Assets/img(5).jpg';
import img6 from '../../Assets/img(6).jpg';
import img7 from '../../Assets/img(7).jpg';
import img8 from '../../Assets/img(8).jpg';
import img9 from '../../Assets/img(9).jpg';
import img10 from '../../Assets/img(10).jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Data = [
  // Your data
  // {
  //   id: 1,
  //   imgSrc: img,
  //   destTitle: 'Bora Bora',
  //   location: 'New Zealand',
  //   grade: 'CULTURAL RELAX',
  //   fees: '$700',
  //   description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.',
  // },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Santorini',
    location: 'Greece',
    grade: 'SCENIC BEAUTY',
    fees: '$800',
    description: 'Santorini is famous for its stunning sunsets and beautiful blue-domed churches overlooking the Aegean Sea.',
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Kyoto',
    location: 'Japan',
    grade: 'HISTORICAL',
    fees: '$600',
    description: 'Kyoto is a city that beautifully blends tradition with modernity, offering historical temples and modern attractions.',
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'ARCHAEOLOGICAL',
    fees: '$900',
    description: 'Machu Picchu is an ancient Inca citadel set high in the Andes Mountains, known for its stunning archaeological significance.',
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Paris',
    location: 'France',
    grade: 'ROMANTIC',
    fees: '$750',
    description: 'The "City of Love" is famous for its romantic ambiance, iconic landmarks, and world-class cuisine.',
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Maui',
    location: 'Hawaii',
    grade: 'TROPICAL PARADISE',
    fees: '$850',
    description: 'Maui is a tropical paradise known for its beautiful beaches, lush landscapes, and outdoor activities.',
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Cairo',
    location: 'Egypt',
    grade: 'HISTORICAL WONDERS',
    fees: '$650',
    description: 'Cairo is home to historical wonders like the Pyramids and the Sphinx, attracting history enthusiasts.',
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Rio de Janeiro',
    location: 'Brazil',
    grade: 'VIBRANT CULTURE',
    fees: '$700',
    description: 'Rio de Janeiro is famous for its vibrant culture, beautiful beaches, and the iconic Christ the Redeemer statue.',
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Sydney',
    location: 'Australia',
    grade: 'CITY LIFE',
    fees: '$750',
    description: 'Sydney offers a mix of city life and natural beauty, with the Sydney Opera House and beautiful coastline.',
  },
  {
    id: 10,
    imgSrc: img10,
    destTitle: 'Venice',
    location: 'Italy',
    grade: 'ROMANTIC CANALS',
    fees: '$800',
    description: 'Venice is known for its romantic canals, historic architecture, and unique transportation by gondolas.',
  },
];

const Main = () => {
   useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
          return (
            <div key={id} data-aos="fade-up" className="singleDestination">
              <div className="card">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;

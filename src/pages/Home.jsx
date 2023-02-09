import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import Cards from '../components/Cards';
import Header from '../components/Header';
import HomeIMG from '../assets/IMG.png';
// import Footer from '../components/Footer';
import { Row, Col } from 'react-bootstrap';

export default function Home() {
  const [data, setData] = useState([]);

  console.log("🚀 ~ file: Home.jsx:12 ~ Home ~ data", data)

  useEffect(() => {
      axios.get("/logements.json").then((res) => setData(res.data)); //requète AXIOS ici également pour prochaine utilisation API
  }, []);

  console.log("🚀 ~ file: Home.jsx:12 ~ Home ~ data", data)

  return (
    <div>
      <Header />
        <div className='card border-light'>
          <img src={HomeIMG} alt="Background Acceuil" className='rounded d-flex m-auto' />
          <div className='card-img-overlay d-flex align-content-center'>
            <h1 className='text-xl-center text-white m-auto'> Chez vous, partout et ailleurs </h1>
          </div>
        </div>
        <div className="cards-container ">
          {data.map((appart, id) => (
            <Row xs={1} md={3} className="g-4">
              <Col>
                <div className="card_logement" key={id}>
                  <Link className="link_card_logement" to={`/logement/${appart.id}`}>
                    <Cards cover={appart.cover} title={appart.title} />
                  </Link>
                </div>
              </Col>
            </Row>
          ))}
        </div>
    </div>
  );
}
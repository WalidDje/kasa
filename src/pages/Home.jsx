import React from 'react';
import HomeBanner from '../components/HomeBanner';
import textData from '../mocks/textData';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import Cards from '../components/Cards';
import Header from '../components/Header';
import HomeIMG from '../assets/IMG.png';
import Footer from '../components/Footer';
import './../index.css'

export default function Home() {
  const slogan = textData.slogan;

  const [data, setData] = useState([]);

  useEffect(() => {
      axios.get("/logements.json").then((res) => setData(res.data)); //requète AXIOS ici également pour prochaine utilisation API
  }, []);

  return (
    <main>
      <Header />
        <HomeBanner image={HomeIMG} title={slogan} />
        <div className="cards-container ">
          <div className="g-4 card-disposition">
            {data.map((appart, id) => (
              <div className="card-logement" key={id}>
                <Link className="link-card-logement" to={`/logement/${appart.id}`}>
                  <Cards cover={appart.cover} title={appart.title} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      <Footer />
    </main>
  );
}
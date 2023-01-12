import React from 'react';
import Cards from '../components/Cards';
import Header from '../components/Header';
import HomeIMG from '../assets/IMG.png';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <div className='card border-light'>
        <img src={HomeIMG} alt="Background Acceuil" className='rounded d-flex m-auto' />
        <div className='card-img-overlay d-flex align-content-center'>
          <h1 className='text-xl-center text-white m-auto'> Chez vous, partout et ailleurs </h1>
        </div>
      </div>
      <Cards />
      <Footer />
    </div>
  );
}

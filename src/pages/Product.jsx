import React from 'react';
import { useParams } from 'react-router-dom';
import Rating from "../components/Rating";
import Host from "../components/Host";
import apparts from "../mocks/logements.json"
import Header from "../components/Header";
import Information from "../components/Information";
import Carrousel from '../components/Carrousel';
import Tags from "../components/Tags";
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
import './../index.css'

function Product() {

    const { appartid } = useParams();
    const product = apparts.find((product) => product.id === appartid);
    const { title, location, rating, host, equipments, description, pictures } =
        product;

    return (
        <main>
            <Header />
            <div className="d-flex carrousel">
                <Carrousel slides={pictures} />
            </div>
            <Information title={title} location={location} rating={rating} pictures={pictures} host={host} />
            <div className='infos-bloc'>
                <div className="tag-index">
                    {product.tags.map((tag, index) => (
                        <Tags key={index} getTag={tag} />
                        ))}
                </div>
                <div className="rating-and-host">
                    <Rating rating={rating} />
                    <Host host={host} />
                </div>
            </div>
            <div className="blocs">
                <div className='desc-bloc'>
                    <Collapse title="Description" content={description} />
                </div>
                <div className='equip-bloc'>
                    <Collapse title="Equipement" content={equipments} />
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Product;
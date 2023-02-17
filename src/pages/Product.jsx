import React from 'react';
import { useParams } from 'react-router-dom';
import apparts from "../mocks/logements.json"
import Header from "../components/Header";
import BG_img from "../assets/Background.png"
import Information from "../components/Information";
import Description from "../components/Description";
import Equipement from "../components/Equipement";

function Product() {

    const { appartid } = useParams();
    const product = apparts.find((product) => product.id === appartid);
    const { title, location, rating, host, equipments, description, pictures } =
        product;

    return (
        <div>
            <Header />
            <div className="d-flex">
                <img src={BG_img} alt="background" className="d-flex mx-auto" />
            </div>
            <Information title={title} />
            <div className="d-flex justify-content-around">
                <Description text={description} />
                <Equipement text={equipments} />
            </div>
        </div>
    )
}

export default Product;
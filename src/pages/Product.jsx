import Header from "../components/Header";
import BG_img from "../assets/Background.png"
import Information from "../components/Information";
import Description from "../components/Description";
import Equipement from "../components/Equipement";

function Product() {
    return (
        <div>
            <Header />
            <div className="d-flex">
                <img src={BG_img} alt="background" className="d-flex mx-auto" />
            </div>
            <Information />
            <div className="d-flex justify-content-around">
                <Description />
                <Equipement />
            </div>
        </div>
    )
}

export default Product;
import Header from "../components/Header";
import { Link } from "react-router-dom";
import ErrorIMG from "../assets/404.png"
import Footer from "../components/Footer";
import './../index.css'

function Err() {
    return (
        <div>
            <Header />
            <div className="d-flex">
                <img src={ErrorIMG} alt="background" className="d-flex mx-auto" />
            </div>
            <div className="m-3 text-center">
                <h1 className="text-danger py-5 mx-5"> Oups ! La page que vous demandez n'existe pas. </h1>
                <Link to="/" className="fs-4 text-danger mx-5 py-5"> Retour à la page d'accueil </Link>
            </div>
            <Footer />
        </div>
    )
}

export default Err;
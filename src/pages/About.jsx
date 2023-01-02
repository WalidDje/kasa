import Header from "../components/Header";
import BG_img from "../assets/Background.png"

function About() {
    return (
        <div>
            <Header />
            <div className="d-flex">
                <img src={BG_img} alt="background" className="d-flex mx-auto" />
            </div>
            <div className="m-3">
                <h1 className="text-danger py-2 mx-5"> Cozy loft on the Canal Saint-Martin </h1>
                <p className="fs-4 text-danger mx-5"> Paris, Ile de France </p>
                <div className="mx-5">
                    <button type="button" className="btn btn-danger px-5 mx-2"> Cozy </button>
                    <button type="button" className="btn btn-danger px-5 mx-2"> Canal </button>
                    <button type="button" className="btn btn-danger px-5 mx-2"> Paris 10 </button>
                </div>
            </div>
        </div>
    )
}

export default About;
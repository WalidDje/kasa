import Header from "../components/Header";
// import Footer from "../components/Footer";
import IMG_Banner from "../assets/Section.png";
import Fiabilite from "../components/Fiabilite";
import Respect from "../components/Respect";
import Securite from "../components/Securite";
import Service from "../components/Service";

function About() {

    return (
      <div>
        <Header />
        <div className="d-flex rounded">
            <img className="mx-auto" src={IMG_Banner} alt="Bannière" />
        </div>
        <section className="text-center w-75 m-auto m-3 p-3">
          <div className="mt-4">
            <Fiabilite />
          </div>
          <div className="mt-4">
            <Respect />
          </div>
          <div className="mt-4">
            <Service />
          </div>
          <div className="mt-4">
            <Securite />
          </div>
        </section>
      </div>
    )
}

export default About;
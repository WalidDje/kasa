import Header from "../components/Header";
import Footer from "../components/Footer";
import IMG_Banner from "../assets/Section.png"

function About() {
    return (
        <div>
            <Header />
            <div className="d-flex rounded">
                <img className="mx-auto" src={IMG_Banner} alt="Bannière" />
            </div>
            <div>
                <h3> Fiabilité </h3>
                <p>
                    Les annonces postées sur Kasa garantissent une fiabilité totale.
                    Les photos sont conformes aux logements,
                    et toutes les informations sont régulièrement vérifiées par nos équipes.
                </p>
                <h3> Respect </h3>
                <p>
                    Les annonces postées sur Kasa garantissent une fiabilité totale.
                    Les photos sont conformes aux logements,
                    et toutes les informations sont régulièrement vérifiées par nos équipes.
                </p>
                <h3> Service </h3>
                <p>
                    Les annonces postées sur Kasa garantissent une fiabilité totale.
                    Les photos sont conformes aux logements,
                    et toutes les informations sont régulièrement vérifiées par nos équipes.
                </p>
                <h3> Responsabilité </h3>
                <p>
                    Les annonces postées sur Kasa garantissent une fiabilité totale.
                    Les photos sont conformes aux logements,
                    et toutes les informations sont régulièrement vérifiées par nos équipes.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default About;
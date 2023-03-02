import Header from "../components/Header";
import Footer from "../components/Footer";
import IMG_Banner from "../assets/Section.png";
import Collapse from "../components/Collapse";
import textData from "../mocks/textData";

function About() {

  const content = (title) => {
    switch (title) {
      case "fiabilite":
        return textData.fiabilite;
      case "respect":
        return textData.respect;
      case "service":
        return textData.service;
      case "securite":
        return textData.securite;
      default:
        console.log("default");
        break;
    }
  };

    return (
      <main>
        <Header />
        <div className="d-flex about-banner">
            <img className="mx-auto" src={IMG_Banner} alt="Bannière" />
        </div>
        <div className="about-dropdowns">
          <Collapse title="Fiabilité" content={content("fiabilite")} />
          <Collapse title="Respect" content={content("respect")} />
          <Collapse title="Service" content={content("service")} />
          <Collapse title="Sécurité" content={content("securite")} />
        </div>
        <Footer />
      </main>
    )
}

export default About;
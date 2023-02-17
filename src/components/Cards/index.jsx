import { Link } from "react-router-dom";
import './style.css'

function Cards({ cover, title }) {

    return (
        <div className="card-form">
            <img variant="top" src= {cover} alt="couverture" />
            <Link to="/product" className="card-body">
                <h5 className="card-title"> {title} </h5>
            </Link>
        </div>
    )
}

export default Cards;
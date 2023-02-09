import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function Cards({ cover, title }) {

    return (
        <Card>
            <Card.Img variant="top" src= {cover} />
            <Link to="/product" class="card-body">
                <h5 class="card-title"> {title} </h5>
            </Link>
        </Card>
    )
}

export default Cards;
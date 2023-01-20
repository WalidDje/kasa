import { Link } from "react-router-dom";

function Cards() {
    return (
        <div>
            <div class="card">
                <Link to="/product" class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" class="btn btn-primary">Go somewhere</a>
                </Link>
            </div>
        </div>
    )
}

export default Cards;
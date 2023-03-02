import './style.css'

function Cards({ cover, title }) {

    return (
        <div className="card-form">
            <img variant="top" src= {cover} alt="couverture" />
            <div className="card-body">
                <h5 className="card-title"> {title} </h5>
            </div>
        </div>
    )
}

export default Cards;
import './style.css'

function Cards({ cover, title }) {

    return (
        <div className="card-form">
            <img className='card-image' src= {cover} alt="couverture" />
            <p className="card-title"> {title} </p>
        </div>
    )
}

export default Cards;
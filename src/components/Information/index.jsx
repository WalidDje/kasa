import React from "react";
import './style.css'

function Information({ title, location }) {
    return (
        <div className="d-flex justify-content-between information-bloc">
            <div className="m-3">
                <h1 className="text-danger py-2 mx-5"> {title} </h1>
                <p className="fs-4 text-danger mx-5"> {location} </p>
            </div>
        </div>
    )
}

export default Information;
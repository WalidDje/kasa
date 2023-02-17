import React from "react";

function Information({ title }) {
    return (
        <div className="d-flex justify-content-between">
            <div className="m-3">
                <h1 className="text-danger py-2 mx-5"> {title} </h1>
                <p className="fs-4 text-danger mx-5"> Location </p>
                <div className="mx-5">
                    <button type="button" className="btn btn-danger px-5 mx-2"> Cozy </button>
                    <button type="button" className="btn btn-danger px-5 mx-2"> Canal </button>
                    <button type="button" className="btn btn-danger px-5 mx-2"> Paris 10 </button>
                </div>
            </div>
            <div className="d-flex align-items-center">
                <div className="col">
                    <p> Hôte </p>
                    <span> Etoile etoile etoile </span>
                </div>
            </div>
        </div>
    )
}

export default Information;
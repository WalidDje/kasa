import { Collapse } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useState } from "react";

function Service() {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="Respect-collapse-text"
                aria-expanded={open}
                className="w-100 d-grid gap-2"
                variant="danger"
                size="lg"
            >
                Service
            </Button>
            <Collapse in={open}>
                <div id="Respect-collapse-text" className="text-danger bg-light pt-2">
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
                    chaque logement correspond aux critères de sécurité établis par nos services.
                    En laissant une note aussi bien à l'hôte qu'au locataire,
                    cela permet à nos équipes de vérifier que les standards sont bien respectés.
                    Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </div>
            </Collapse>
        </div>
    )
}

export default Service;
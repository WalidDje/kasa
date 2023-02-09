import { Collapse } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useState } from "react";

function Fiabilite() {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="fiabilité-collapse-text"
                aria-expanded={open}
                className="w-100 d-grid gap-2"
                variant="danger"
                size="lg"
                >
                Fiabilité
            </Button>
            <Collapse in={open}>
                <div id="fiabilité-collapse-text" className="text-danger bg-light pt-2">
                    Les annonces postées sur Kasa garantissent une fiabilité totale.
                    Les photos sont conformes aux logements,
                    et toutes les informations sont régulièrement vérifiées par nos équipes.
                </div>
            </Collapse>
        </div>
    )
}

export default Fiabilite;
import { Collapse } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useState } from "react";

function Respect() {

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
                Respect
            </Button>
            <Collapse in={open}>
                <div id="Respect-collapse-text" className="text-danger bg-light pt-2">
                    La bienveillance fait partie des valeurs fondatrices de Kasa.
                    Tout comportement discriminatoire ou de perturbation de voisinage
                    entraînera une exclusion de notre plateforme.
                </div>
            </Collapse>
        </div>
    )
}

export default Respect;
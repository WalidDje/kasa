import { Collapse } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useState } from "react";

function Description() {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                >
                Block description
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    Les annonces postées sur Kasa garantissent une fiabilité totale.
                    Les photos sont conformes aux logements,
                    et toutes les informations sont régulièrement vérifiées par nos équipes.
                </div>
            </Collapse>
        </div>
    )
}

export default Description;
import { Collapse } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import textData from "../../mocks/textData";

function Fiabilite() {

    const fiabilite = textData.fiabilite
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
                    {fiabilite}
                </div>
            </Collapse>
        </div>
    )
}

export default Fiabilite;
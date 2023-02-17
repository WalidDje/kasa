import { Collapse } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import textData from "../../mocks/textData";

function Securite() {

    const securite = textData.securite;
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
                Securité
            </Button>
            <Collapse in={open}>
                <div id="Respect-collapse-text" className="text-danger bg-light pt-2">
                    {securite}
                </div>
            </Collapse>
        </div>
    )
}

export default Securite;
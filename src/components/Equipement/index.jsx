import { Collapse } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useState } from "react";

function Equipement({ text }) {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                >
                Block Equipement
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    {text}
                </div>
            </Collapse>
        </div>
    )
}

export default Equipement;
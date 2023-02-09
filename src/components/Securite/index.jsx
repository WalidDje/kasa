import { Collapse } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useState } from "react";

function Securite() {

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
                    Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
                    N'hésitez pas à nous contacter si vous avez la moindre question.
                </div>
            </Collapse>
        </div>
    )
}

export default Securite;
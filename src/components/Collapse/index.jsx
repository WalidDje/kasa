import './style.css'
//import arrow from '../../assets/chevron-down.svg';
import { useState } from 'react';

export default function Collapse({title, content}) {

    const [selected, setSelected] = useState(null)

	const toggle = i => {
		if (selected === i) {
		return setSelected(null)
		}
		setSelected(i)
	}

    return (
		<div className="Collapse-items">
            <div className="item">
              <div className="title" onClick={() => toggle(0)}>
                <h2>{title}</h2>
              </div>
              <div className={selected === 0 ? 'content show' : 'content'}>
                {content}
              </div>
            </div>
        </div>
    )
}

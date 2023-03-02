import React from "react";
import './style.css';

const Host = ({ host }) => {
  const isHostSplited = host.name.split(" ");
  const [name, lastname] = isHostSplited;

  return (
    <div className="host">
      <div className="host-name">
        <p className="host-firstname">{name.trim()}</p>
        <p className="host-lastname">{lastname.trim()}</p>
      </div>

      <img src={host.picture} alt="" className="host-pic" />
    </div>
  );
};

export default Host;

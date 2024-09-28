import React from "react";
import { NavLink } from "react-router-dom";

const Buttons = () => {
  return (
    <div className="buttons pb-4">
      <NavLink to="/">
        <button>Harita Görünümü</button>
      </NavLink>
      <NavLink to="/list">
        <button>Liste Görünümü</button>
      </NavLink>
    </div>
  );
};

export default Buttons;

import React from "react";
import { NavLink } from "react-router-dom";

export const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/createproject" className="grey-text text-lighten-3">
          New Project
        </NavLink>
      </li>
      <li>
        <NavLink to="/logout" className="grey-text text-lighten-3">
          Log Out
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating grey darken-2">
          NN
        </NavLink>
      </li>
    </ul>
  );
};

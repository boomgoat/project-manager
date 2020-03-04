import React from "react";
import { NavLink } from "react-router-dom";

export const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signup" className="grey-text text-lighten-3">
          Sign Up
        </NavLink>
      </li>
      <li>
        <NavLink to="/signin" className="grey-text text-lighten-3">
          Log In
        </NavLink>
      </li>
    </ul>
  );
};

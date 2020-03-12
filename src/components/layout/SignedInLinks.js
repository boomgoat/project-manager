import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../Redux/Actions/authActions";

const SignedInLinks = props => {
  const { profile } = props;
  return (
    <ul className="right">
      <li>
        <NavLink to="/createproject" className="grey-text text-lighten-3">
          New Project
        </NavLink>
      </li>
      <li>
        <a onClick={props.signOut} className="grey-text text-lighten-3">
          Log Out
        </a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating grey darken-2">
          {profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);

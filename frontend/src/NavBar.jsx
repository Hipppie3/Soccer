import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ user, setUser }) {function handleLogoutClick() {

  fetch("/api/logout", { method: "DELETE" }).then((r) => {
    if (r.ok) {
      setUser(null);
    }
    });
  }
  
  return (
    <header>
      <div className="website">
        <NavLink  to="/" >BDM</NavLink>
      </div>
        {user ? (
          <>
            <NavLink to="/players">Players</NavLink>
            <NavLink to="/divisions">Divisions</NavLink>
            <NavLink to="/teams">Teams</NavLink>
            <NavLink to="/">
              <button className="click" onClick={handleLogoutClick}>Logout</button>
            </NavLink>
          </>
        ) : (
          <div>
            <NavLink to="/signup">Signup</NavLink>
            <NavLink to="/login">Login</NavLink>
          </div>
        )}
    </header>
      );
    }

export default NavBar;
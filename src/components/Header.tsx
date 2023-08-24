import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useDispatch } from "react-redux";
import { auth } from "../Firebase";
import { logout } from "../redux/authSlece";

function Header() {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch()

  const handleLogout = async () => {
    try {
      await auth.signOut()
      dispatch(logout())
    } catch ( error ) {
      console.log(error)
    }
  } 
  return (
    <nav className="header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        {user && (
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        )}
        {user ? (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <li>
            <Link to="/Login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Header;

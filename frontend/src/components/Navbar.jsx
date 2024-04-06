import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";
export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div>
      <div className="navbar">
        <div className="navbar-container">
          <Link to="/" className="nav-links">
            <HomeIcon
              className="icon"
              style={{ fontSize: 30, color: "red", marginRight: "0px" }}
            />
          </Link>
          <Link to="/NewScheme" className="nav-links">
            New Scheme
          </Link>
          <Link to="/Resources" className="nav-links">
            Resources
          </Link>
          <Link to="/bookMark" className="nav-links">
            <BookmarkIcon className="icon" style={{ fontSize: 30, color: "red", marginRight: "0px" }} />
          </Link>
        </div>
      </div>
    </div>
  );
}

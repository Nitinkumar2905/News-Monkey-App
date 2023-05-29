import React , {useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./logo.jpeg";
const Navbar = (props) => {
  const location = useLocation();
  useEffect(()=>{
    console.log(location.pathname)
  },[location]);
  return (
    <>
      <nav
        className={`border-bottom border-${
          props.mode
        }z-1 navbar navbar-expand-lg sticky-top  navbar-${props.mode} bg-${
          props.mode === "Dark" ? "dark" : "white"
        } fs-5 " text-${props.mode === "Dark" ? "white" : "dark"}`}
        style={{hover:'text-primary'}}
        >
        <div className="container-fluid justify-content-between d-flex flex-end">
          <Link
            className="navbar-brand"
            style={{
              color: `${props.mode === "Dark" ? "white" : "dark"}`,
            }}
            to="/">
            <img
              src={logo}
              style={{
                height: "40px",
                borderRadius: "40px",
                marginRight: "10px",
              }}
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              backgroundColor: "white",
              border: `1px solid ${props.mode === "Dark" ? "white" : "dark"}`,
              // borderRadius: "0.5rem",
            }}>
            <span
              className="navbar-toggler-icon"
              style={{
                color: `${props.mode === "Dark" ? "dark" : "white"}`,
              }}></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/home" ? "active" : ""
                  }`}
                  aria-current="page"
                  style={{
                    color: `${props.mode === "Dark" ? "white" : "black"}`,
                  }}
                  to="/general">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/home" ? "active" : ""
                  }`}
                  style={{
                    color: `${props.mode === "Dark" ? "white" : "black"}`,
                  }}
                  to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/home" ? "active" : ""
                  }`}
                  style={{
                    color: `${props.mode === "Dark" ? "white" : "black"}`,
                  }}
                  to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/home" ? "active" : ""
                  }`}
                  style={{
                    color: `${props.mode === "Dark" ? "white" : "black"}`,
                  }}
                  to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/home" ? "active" : ""
                  }`}
                  style={{
                    color: `${props.mode === "Dark" ? "white" : "black"}`,
                  }}
                  to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/home" ? "active" : ""
                  }`}
                  style={{
                    color: `${props.mode === "Dark" ? "white" : "black"}`,
                  }}
                  to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/home" ? "active" : ""
                  }`}
                  style={{
                    color: `${props.mode === "Dark" ? "white" : "black"}`,
                  }}
                  to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
                style={{cursor:'pointer'}}
              />
              <label
                className={`form-check-label pointer-cursor text-${
                  props.mode === "Dark" ? "white" : "primary"
                }`}
                htmlFor="flexSwitchCheckDefault"
                type="button" style={{cursor:'pointer'}}>
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

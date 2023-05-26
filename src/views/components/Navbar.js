import { NavLink, Link } from "react-router-dom";
import React, { useState } from "react";
import "../../assets/css/Cus.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <nav className="navbar navbar-expand-lg z-1000">
              <div className="container">
                <Link to="/" className="navbar-brand">
                  RepoHub
                </Link>
                <div
                  className={`${open ? "show" : ""} menu-icons`}
                  onClick={menu}
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasTop"
                  aria-controls="offcanvasTop"
                >
                  <span></span>
                  <span></span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-top"
        tabIndex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header"></div>
        <div className="offcanvas-body">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col col-lg-10">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item border-0">
                    <NavLink
                      to="/"
                      onClick={menu}
                      className={({ isActive }) =>
                        isActive
                          ? "text-danger h6 text-decoration-none"
                          : "h6 text-decoration-none"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="list-group-item border-0">
                    <NavLink
                      to="/story"
                      onClick={menu}
                      className={({ isActive }) =>
                        isActive
                          ? "text-danger h6 text-decoration-none"
                          : "h6 text-decoration-none"
                      }
                    >
                      Story
                    </NavLink>
                  </li>
                  <li className="list-group-item border-0">
                    <NavLink
                      to="/services"
                      onClick={menu}
                      className={({ isActive }) =>
                        isActive
                          ? "text-danger h6 text-decoration-none"
                          : "h6 text-decoration-none"
                      }
                    >
                      Services
                    </NavLink>
                  </li>
                  <li className="list-group-item border-0">
                    <NavLink
                      to="/contact"
                      onClick={menu}
                      className={({ isActive }) =>
                        isActive
                          ? "text-danger h6 text-decoration-none"
                          : "h6 text-decoration-none"
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

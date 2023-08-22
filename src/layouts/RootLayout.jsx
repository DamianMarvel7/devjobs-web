import React, { useEffect } from "react";
import logo from "../assets/desktop/logo.svg";
import iconMoon from "../assets/desktop/icon-moon.svg";
import iconSun from "../assets/desktop/icon-sun.svg";
import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  const selectedTheme = localStorage.getItem("theme");
  useEffect(() => {
    if (selectedTheme === "dark") {
      const bodyElement = document.querySelector("body");
      bodyElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const handleThemeChange = (event) => {
    const bodyElement = document.querySelector("body");

    const dataTheme = event.target.checked ? "dark" : "light";
    localStorage.setItem("theme", dataTheme);
    bodyElement.setAttribute("data-theme", dataTheme);
  };
  return (
    <div>
      <nav className="layout container flex">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="layout-theme flex">
          <img src={iconSun} alt="" />
          <label className="switch">
            <input
              type="checkbox"
              onChange={handleThemeChange}
              defaultChecked={selectedTheme == "dark"}
            />
            <div className="slider"></div>
          </label>
          <img src={iconMoon} alt="" />
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;

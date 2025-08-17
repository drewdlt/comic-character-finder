import { useState } from "react";
import { NavLink } from "react-router";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="mx-auto mt-3 flex w-11/12 flex-wrap content-center justify-between rounded-4xl bg-neutral-800 px-3 py-3 tracking-wider backdrop-opacity-50 lg:w-3/4">
        <NavLink
          className="self-center text-2xl font-bold text-white"
          style={{ textDecoration: "none" }}
        >
          Excelsior
        </NavLink>
        <div className="hidden gap-4 sm:flex">
          <NavLink
            to="/"
            className="text-2xl font-semibold text-white transition delay-0 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110"
            style={{ textDecoration: "none" }}
          >
            Home
          </NavLink>
          <NavLink
            to="lookup"
            className="text-2xl font-semibold text-white transition delay-0 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110"
            style={{ textDecoration: "none" }}
          >
            Characters
          </NavLink>
          <NavLink
            to="writers"
            className="text-2xl font-semibold text-white transition delay-0 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110"
            style={{ textDecoration: "none" }}
          >
            Writers
          </NavLink>
        </div>
        <button className="sm:hidden" onClick={toggleNavbar}>
          {isOpen ? (
            <img
              src="close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
              alt="menu"
              className="h-9"
            />
          ) : (
            <img
              src="menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
              alt="menu"
              className="h-9"
            ></img>
          )}
        </button>
        {isOpen && (
          <div className="flex w-full flex-col items-center sm:hidden">
            <NavLink
              to="/"
              className="w-full border-b-1 py-1.5 text-center text-2xl text-white"
              style={{ textDecoration: "none" }}
            >
              Home
            </NavLink>
            <NavLink
              to="lookup"
              className="w-full border-b-1 py-1.5 text-center text-2xl text-white"
              style={{ textDecoration: "none" }}
            >
              Characters
            </NavLink>
            <NavLink
              to="writers"
              className="py-1.5 text-2xl text-white"
              style={{ textDecoration: "none" }}
            >
              Writers
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;

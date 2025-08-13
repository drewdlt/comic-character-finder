import { useState } from "react";
import { NavLink } from "react-router";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

  return (
    <>
        <nav className="flex justify-between content-center py-3 px-3 tracking-wider flex-wrap w-11/12 mx-auto bg-black/40 backdrop-opacity-50 rounded-4xl lg:w-3/4">
            <NavLink className="text-white text-2xl font-bold" style={{textDecoration: 'none'}}>Excelsior</NavLink>
            <div className="gap-4 hidden sm:flex">
                <NavLink to="/" className="text-white text-2xl font-semibold transition delay-0 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110" style={{textDecoration: 'none'}}>Home</NavLink>
                <NavLink to="" className="text-white text-2xl font-semibold transition delay-0 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110" style={{textDecoration: 'none'}} >Characters</NavLink>
                <NavLink to="writers" className="text-white text-2xl font-semibold transition delay-0 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110" style={{textDecoration: 'none'}} >Writers</NavLink>
            </div>
            <button className="sm:hidden" onClick={toggleNavbar}>
                {isOpen ? 
                <img src="close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="menu" className="h-9" /> 
                : 
                <img src="menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="menu" className="h-9"></img>}
            </button>
            {isOpen && (
                <div className="flex w-full flex-col items-center sm:hidden">
                    <NavLink to="/" className="text-white text-2xl border-b-1 w-full text-center py-1.5" style={{textDecoration: 'none'}}>Home</NavLink>
                    <NavLink to="" className="text-white text-2xl border-b-1 w-full text-center py-1.5" style={{textDecoration: 'none'}} >Characters</NavLink>
                    <NavLink to="writers" className="text-white text-2xl py-1.5" style={{textDecoration: 'none'}} >Writers</NavLink>
                </div>
            )}
        </nav>
    </>
  );
}

export default Navbar;

function Navbar() {

    return (
        <nav className="navbar sticky-top bg-dark-subtle">
            <div className="container">
                <a className="navbar-brand display-1 fs-2 fw-bolder" href="#">Excelsior</a>
                <div>
                    <a className="fs-4 text-body-emphasis mx-4 link-underline link-underline-opacity-0 link-body-emphasis" href="#">About</a>
                    <a className="fs-4 text-body-emphasis link-underline link-underline-opacity-0 link-body-emphasis" href="#">Writers</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar
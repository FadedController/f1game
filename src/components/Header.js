const Header = () => {
  return (
    <nav className="row navbar navbar-expand-md bg-danger navbar-dark pl-3 pr-3">
      <a className="navbar-brand pl-1" href="#">
        <img class="logo" src="img/f1.png" />
      </a>
      <button
        className="navbar-toggler mov"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link mov" href="#">
              Login
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle mov"
              href="#"
              id="navbardrop"
              data-toggle="dropdown"
            >
              Personal
            </a>

            <div className="dropdown-menu">
              <a className="dropdown-item" href="max.html">
                Max Verstappen
              </a>
              <a className="dropdown-item" href="sergio.html">
                Sergio Pérez
              </a>
              <a className="dropdown-item" href="marko.html">
                Helmut Marko
              </a>
              <a className="dropdown-item" href="horner.html">
                Christian Horner
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle mov"
              href="#"
              id="navbardrop"
              data-toggle="dropdown"
            >
              Socials
            </a>

            <div className="dropdown-menu">
              <a
                className="dropdown-item"
                href="https://twitter.com/redbullracing"
                target="_blank"
              >
                Twitter
              </a>
              <a
                className="dropdown-item"
                href="https://www.instagram.com/redbullracing/"
                target="_blank"
              >
                Instagram
              </a>
              <a
                className="dropdown-item"
                href="https://www.youtube.com/user/redbullracing"
                target="_blank"
              >
                Youtube
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

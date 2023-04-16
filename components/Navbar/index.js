/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */
import React, { useContext } from 'react';
import Link from '../ActiveLink';
/* -------------------------- Internal Dependencies ------------------------- */
import { Header } from '../Layout/style';
/* import Link from '../ActiveLink'; */
import AppContext from '../Utils/context';

/* ---------------------------- Image Dependency ---------------------------- */
import { Logo, Moon, Icon } from '../Icons';

const Navbar = () => {
  const { show, handleOpen, setTheme, closeShow, theme } = useContext(
    AppContext
  );
  return (
    <>
      <Header>
        <nav className="navbar navbar-expand-lg bg-light navbar-light">
          <div className="container">
            {/* <Link legacyBehavior href="/">
              <a
                href="#!"
                className="navbar-brand"
                aria-label="Komal Singh Home"
                tabIndex={show ? '-1' : undefined}
              >
                <Logo />
              </a>
            </Link> */}

            <button
              className="navbar-toggler"
              type="button"
              onClick={handleOpen}
              tabIndex={show ? '-1' : undefined}
              aria-label="Open Button Toggle"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className={`collapse navbar-collapse  ${show && 'show'}`}
              id="collapsibleNavbar"
            >
              <button
                className="d-block d-md-none close-nav"
                onClick={handleOpen}
              >
                <Icon />
              </button>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item hover__bottom d-block d-md-none">
                  <Link legacyBehavior href="/" activeClassName="is-active">
                    <a
                      className="nav-link"
                      id="cardHover"
                      onClick={closeShow}
                      href="#!"
                      aria-label="Go Home"
                      title="Home"
                    >
                      Home
                    </a>
                  </Link>
                </li>
                {/* <li className="nav-item hover__bottom">
                <Link legacyBehavior href="/about" activeClassName="is-active">
                    <a
                      className="nav-link"
                      id="cardHover"
                      onClick={closeShow}
                      href="#!"
                      aria-label="Go To About Page"
                      title="About"
                    >
                      About
                    </a>
                </Link>
                </li> */}
                {/*  <li className="nav-item hover__bottom">
                   <Link legacyBehavior href="/projects" activeClassName="is-active"> 
                    <a
                      className="nav-link"
                      id="cardHover"
                      onClick={closeShow}
                      href="#!"
                      aria-label="Go To Projects Page"
                      title="Projects"
                    >
                      Projects
                    </a>
                  </Link> 
                </li> */}
                <li className="nav-item hover__bottom">
                  <Link legacyBehavior href="/resume" activeClassName="is-active">
                    <a
                      className="nav-link"
                      id="cardHover"
                      onClick={closeShow}
                      href="#!"
                      aria-label="Go To Resume Page"
                      title="Resume"
                    >
                      Resume
                    </a>
                  </Link>
                </li>
                <li className="nav-item hover__bottom">
                  <Link legacyBehavior href="/contact" activeClassName="is-active">
                    <a
                      className="nav-link"
                      id="cardHover"
                      onClick={closeShow}
                      href="#!"
                      aria-label="Go To Contacts Page"
                      title="Contact"
                    >
                      Contact
                    </a>
                  </Link>
                </li>
                <li className="nav-item pl-md-3">
                  <Link legacyBehavior href="#0">
                    <a
                      className="nav-link nav-svg"
                      aria-label={`Turn On ${theme === false ? 'Light' : 'Dark'
                        } Mood`}
                      onClick={setTheme}
                      href="#!"
                    >
                      <Moon />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Header>
    </>
  );
};

export default Navbar;

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";
const { topHeader, userAuth, navbar, navLink, navbarBrand } = styles;

const Header = () => {
  return (
    <header>
      <div className={`${topHeader}`}>
        <Container fluid>
          <a href="#" className={userAuth}>
            <span>
              <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
            </span>
            <span className="me-3">تسجيل الدخول</span>
          </a>
        </Container>
      </div>
      <Navbar expand="lg" className={navbar}>
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/" className={navbarBrand}>
            نب<span>ض</span> منطقتك
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" className={navLink}>
                الرئيسية
              </Nav.Link>
              <Nav.Link as={NavLink} to="last-news" className={navLink}>
                أخبار عاجلة
              </Nav.Link>
              <NavDropdown
                title="صحة"
                id="basic-nav-dropdown"
                className={`${navLink} `}
              >
                <NavDropdown.Item
                  href="#action/3.1"
                  className={`${navLink} text-end`}
                >
                  غذاء
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link" className={navLink}>
                رياضة
              </Nav.Link>
              <Nav.Link href="#link" className={navLink}>
                وظائف
              </Nav.Link>
              <Nav.Link href="#link" className={navLink}>
                منح دراسية
              </Nav.Link>
              <Nav.Link href="#link" className={navLink}>
                وفيات
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

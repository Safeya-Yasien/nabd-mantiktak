import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

import styles from "./header.module.scss";
const { topHeader, userAuth, navbar, navLink } = styles;

const Header = () => {
  return (
    <header>
      <div className={`${topHeader}`}>
        <Container fluid>
          <div className={userAuth}>
            <span>
              <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
            </span>
            <span className="me-3">تسجيل الدخول</span>
          </div>
        </Container>
      </div>
      <Navbar expand="lg" className={navbar}>
        <Container fluid>
          <Navbar.Brand href="#home">نبض منطقتك</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">الرئيسية</Nav.Link>
              <Nav.Link href="#link">أخبار عاجلة</Nav.Link>
              <NavDropdown title="صحة" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">غذاء</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link" className={navLink}>
                رياضة
              </Nav.Link>
              <Nav.Link href="#link">وظائف</Nav.Link>
              <Nav.Link href="#link">منح دراسية</Nav.Link>
              <Nav.Link href="#link">وفيات</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

import { Container } from "react-bootstrap";
import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

const { topHeader, userAuth } = styles;

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
    </header>
  );
};

export default Header;

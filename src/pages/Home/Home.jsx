import { Col, Container, Row } from "react-bootstrap";

import styles from "./home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Home_section2 from "../../components/nabdMantiktak/Home_section2/Home_section2";
import Home_sectionPart2 from "../../components/nabdMantiktak/Home_section2/Home_sectionPart2";

const {
  introVideo,
  latestNews,
  continuousCoverage,
  latestNewsList,
  date,
  title,
  singleNew,
  content,
  label,
} = styles;

const Home = () => {
  return (
    <section>
      <Container fluid>
        <Row>
          <Col lg={6}>
            <div className={introVideo}>
              <video src="" controls className="w-100"></video>
              <div className={latestNews}>
                <div className={continuousCoverage}>
                  {/* {continous converage} */}
                  <h3>تطورات إصلاح طرق بني سويف</h3>
                </div>

                <div className={latestNewsList}>
                  <ul>
                    <li>
                      <a href="#">
                        <div className={date}>
                          <span>
                            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                          </span>
                          <span> قبل 3 دقائق</span>
                        </div>
                        <h3 className={title}>بناء كوبرى</h3>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className={date}>
                          <span>
                            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                          </span>
                          <span> قبل 3 دقائق</span>
                        </div>
                        <h3 className={title}>بناء كوبرى</h3>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={6}>
                <div className={singleNew}>
                  <a href="#">
                    <div>
                      <img src="src\assets\2.jpg" alt="new" className="w-100" />
                      <div className={label}>شرق اوسط</div>
                    </div>
                    <div className={content}>
                      <h3>خبر عاجل مش عارف ايه</h3>
                    </div>
                  </a>
                </div>
              </Col>
              <Col lg={6}>
                <div className={singleNew}>
                  <a href="#">
                    <div>
                      <img src="src\assets\2.jpg" alt="new" className="w-100" />
                      <div className={label}>شرق اوسط</div>
                    </div>
                    <div className={content}>
                      <h3>خبر عاجل مش عارف ايه</h3>
                    </div>
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Row className="row m-0" style={{ background: "rgb(239 239 239 / 31%)" }}>
        <Col lg={9}>
          <Home_section2 />
        </Col>
        <Col lg={3}>
          <Home_sectionPart2 />
        </Col>
      </Row>
    </section>
  );
};

export default Home;

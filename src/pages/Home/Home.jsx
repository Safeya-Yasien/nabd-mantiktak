import { Col, Container, Row } from "react-bootstrap";
import img from "./../../Assets/sport3.webp";
import imge from "./../../Assets/sport2.webp";

import styles from "./home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { SingleNew } from "../../components/nabdMantiktak";
import { Home_section2 } from "../../components/nabdMantiktak";
import { Home_sectionPart2 } from "../../components/nabdMantiktak";
import { Sport } from "../../components/nabdMantiktak";

const {
  introVideo,
  latestNews,
  continuousCoverage,
  latestNewsList,
  date,
  title,
  title_sport,
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
                <SingleNew />
              </Col>
              <Col lg={6}>
                <SingleNew />
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
      <Row className="row m-0" style={{ background: "rgb(239 239 239 / 31%)" }}>
        <Col lg={9}>
          <Sport />
        </Col>
        <Col lg={3}>
          <div className="m-1">
            <h3 className={title_sport}>استطلاع</h3>
            <img
              src={img}
              className="mb-3"
              width={"100%"}
              height={"100%"}
              alt=""
            />
            <img src={imge} width={"100%"} height={"100%"} alt="" />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Home;

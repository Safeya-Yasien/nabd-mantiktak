import News from "../../components/LastNewsComponents/News";
import "./LastNews.scss";
import LastNews_Component from "../../components/LastNews_component/Lastnews";
import { Row } from "react-bootstrap";

const LastNews = () => {
  const newsComponents = Array.from({ length: 36 }, (_, index) => (
    <div className="col-lg-6 col-sm-12" key={index}>
      <LastNews_Component />
    </div>
  ));

  return (
    <section style={{ background: "rgb(239 239 239 / 78%)", cursor: "pointer" }}>
      <div className="contain">
        <div className="row">
          <div className="col-lg-8 col-sm-12">
            <News />
            <Row>{newsComponents}</Row>
          </div>
          <div className="col-lg-4 col-sm-12"></div>
        </div>
      </div>
    </section>
  );
};

export default LastNews;

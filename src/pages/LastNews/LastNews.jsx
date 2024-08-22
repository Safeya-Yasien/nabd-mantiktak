import News from "../../components/LastNewsComponents/News";
import LastNews_Component from "../../components/LastNews_component/Lastnews";
import { Container, Row } from "react-bootstrap";

import styles from "./lastNews.module.scss";
const { breakingNews, title, breakingNewsItem, header, content } = styles;

const LastNews = () => {
  const newsComponents = Array.from({ length: 36 }, (_, index) => (
    <div className="col-lg-6 col-sm-12" key={index}>
      <LastNews_Component />
    </div>
  ));

  return (
    <section>
      <Container fluid>
        <div className="row">
          <div className="col-lg-8 col-sm-12">
            <News />
            <Row>{newsComponents}</Row>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className={breakingNews}>
              <div className={title}>
                <h2 className=" fw-bold">الأخبار العاجلة</h2>
              </div>
              <div className={breakingNewsItem}>
                <a href="#">
                  <div className={header}>عاجل</div>
                  <div className={content}>
                    يُذكر أن محافظ بني سويف، كان قد أعتمد في 24 يونيو الماضي،
                    تنسيق القبول بالصف الأول الثانوى العام، للعام الدراسى
                    2024/2025 بحد أدنى 233 درجة لطلاب الشهادة الإعدادية العامة،
                    وتحديد الحد الأدني للقبول بمدارس الخدمات للثانوي العام
                    بمجموع 180 درجة ـ بناءا على مذكرة المديرية.
                  </div>
                </a>
              </div>
              <div className={breakingNewsItem}>
                <div className={header}>عاجل</div>
                <div className={content}>
                  يُذكر أن محافظ بني سويف، كان قد أعتمد في 24 يونيو الماضي،
                  تنسيق القبول بالصف الأول الثانوى العام، للعام الدراسى
                  2024/2025 بحد أدنى 233 درجة لطلاب الشهادة الإعدادية العامة،
                  وتحديد الحد الأدني للقبول بمدارس الخدمات للثانوي العام بمجموع
                  180 درجة ـ بناءا على مذكرة المديرية.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LastNews;

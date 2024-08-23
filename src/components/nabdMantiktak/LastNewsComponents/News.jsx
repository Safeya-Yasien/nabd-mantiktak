import { title } from "../../../styles/shared.module.scss";
import styles from "./news.module.scss";

const { content, info } = styles;

const News = () => {
  return (
    <section>
      <div className={title}>
        <h2>آخر الأخبار</h2>
      </div>
      <div className={`${content} d-flex`}>
        <h3 className="text-light fs-3">تغطية مستمرة</h3>
        <div className={`${info} d-flex  p-3`}>
          <h2 className="text-light fw-bold fs-1">
            امحافظ بنى سويف يبحث تعظيم سبل التعاون مع جهاز تنمية التجارة
            الداخلية بوزارة التموين
          </h2>
          <span className="text-light fs-5">l آخر تحديث قبل 3 ساعات</span>
        </div>
      </div>
    </section>
  );
};

export default News;

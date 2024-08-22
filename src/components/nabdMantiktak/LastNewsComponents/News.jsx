import "./News.scss";

const News = () => {
  return (
    <div className="container mt-5">
      <div className="title">
        <h2 className=" fw-bold">آخر الأخبار</h2>
      </div>
      <div className="body  d-flex">
        <h3 className="text-light fs-3">تغطية مستمرة</h3>
        <div className="d-flex info p-3">
          <h2 className="text-light fw-bold fs-1">
            امحافظ بنى سويف يبحث تعظيم سبل التعاون مع جهاز تنمية التجارة
            الداخلية بوزارة التموين
          </h2>
          <span className="text-light fs-5">l آخر تحديث قبل 3 ساعات</span>
        </div>
      </div>
    </div>
  );
};

export default News;

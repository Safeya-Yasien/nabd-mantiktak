import "./Home_section2.scss";
import img from "../../Assets/4.webp";

const Home_section2 = () => {
  const newsComponents = Array.from({ length: 6 }, (_element, index) => (
    <div className="col-lg-4 col-sm-12" key={index}>
      <div className="card shadow rounded-0 p-0 mb-3">
        <img src={img} className="card-img-top rounded-0" alt="Home" />
        <div className="card-body rounded-0 ">
          <h5 className="card-title fs-4 fw-bold mb-1"> عالم</h5>
          <p className="card-text fs-5 mb-1">
            مقتل 3 فلسطينيين بقصف طائرة مسيّرة في مخيم طولكرم
          </p>
          <span>l قبل 1 ساعة </span>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="container Home-section2">
        <h2 className="fs-1 fw-bold mb-3 ">آخر الأخبار</h2>
        <div className="row">{newsComponents}</div>
      </div>
    </div>
  );
};

export default Home_section2;

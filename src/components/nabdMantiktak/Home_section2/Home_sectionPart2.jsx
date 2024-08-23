import image from "../../../Assets/3.jpg";
import "./Home_section2.scss";

function Home_sectionPart2() {
  const newsComponents = Array.from({ length: 3 }, (_element, index) => (
    <div className="card rounded-0 border-0 p-2 mb-2 shadow" key={index}>
      <div className="row g-0">
        <div className="col-md-4 mt-3 p-0">
          <img src={image} className="img-fluid" width={"100%"} alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body p-3 mb-2 ">
            <h5 className="card-title fs-5 fw-bold mb-1"> عالم</h5>
            <p className="card-text fs-6 mb-1">
              مقتل 3 فلسطينيين بقصف طائرة مسيّرة في مخيم
            </p>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div className="container-fluid Home_section_Part2">
        <h2 className="fs-3 fw-bold mb-4">زوارنا يتصفحون الآن </h2>
        <div>{newsComponents}</div>
      </div>
    </div>
  );
}

export default Home_sectionPart2;

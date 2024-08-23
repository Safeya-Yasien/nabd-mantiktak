import img from "../../../Assets/sport2.webp";
import image from "../../../Assets/sport1.webp";

import "./Sport_section.scss";

function Sport_Section() {
  const newsComponents = Array.from({ length: 3 }, (_element, index) => (
    <div className="col-lg-4 sport mb-5" key={index}>
      <h2 className="fs-3 fw-bold ">رياضة</h2>
      <div className="singleNew">
        <a href="#">
          <div>
            <img src={img} alt="new" className="w-100" />
          </div>
          <div className="content">
            <h3 className="fs-5 ">
              النجم الأرجنتيني باولو ديبالا ديبالا يودع روما "متأثرا" ويتوجه إلى
              السعودية
            </h3>
          </div>
        </a>
      </div>
    </div>
  ));
  const newsComponent = Array.from({ length: 9 }, (_element, index) => (
    <div className="col-lg-4" key={index}>
      <div className="card border-0 rounded-0 m-0 shadow mb-3">
        <div className="row">
          <div className="col-lg-5 col-sm-12">
            <img src={image} width={"100%"} height={"100%"} alt="..." />
          </div>
          <div className="col-lg-7 col-sm-12">
            <h5 className="card-title fs-5 fw-bold p-3">
              اللعب الدولى حارس مرمى سويسرا يان سومر يعتزل اللعب الدولي
            </h5>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="row">{newsComponents}</div>
      <div className="row">{newsComponent}</div>
    </div>
  );
}

export default Sport_Section;

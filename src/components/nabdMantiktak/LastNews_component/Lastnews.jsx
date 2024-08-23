import image from "../../../Assets/2.jpg";
import styles from "./LastNews.module.scss";

const { title } = styles;

function LastNews_Component() {
  return (
    <div className="container mt-4 ">
      <div className="card rounded-0 border-0 m-0 ">
        <div className="row">
          <div className="col-md-5">
            <img src={image} width={"100%"} height={"100%"} alt="..." />
          </div>
          <div className="col-md-7">
            <div className={`card-body p-1`}>
              <h4 className={` ${title} fs-4 fw-bold`}>منوعات </h4>
              <h5 className="card-title fs-5 mb-3">
                ختام فعاليات القافلة المائية بقرية بنى بخيت بمركز بنى سويف
              </h5>
              <p className="card-text">
                <small className="text-muted text-secondary ">
                  2024 10:30 ص
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastNews_Component;

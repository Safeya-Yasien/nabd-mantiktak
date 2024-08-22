import styles from "./singleNew.module.scss";

const { singleNew, content, label } = styles;

const SingleNew = () => {
  return (
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
  );
};

export default SingleNew;

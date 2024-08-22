<<<<<<< HEAD
import styles from "./footer.module.scss";
const { footerTop, footerTitle, menu, menuTitle } = styles;
=======
>>>>>>> a25870dd50bffe4b53448952593c57807d701cc1
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={footerTop}>
          <div className="row">
            <div className="col-md-3 col-lg-3">
              <h3 className={footerTitle}>
                نب<span>ض</span> منطقتك
              </h3>
              <ul className={menu}>
                <li>
                  <a href="">انصل بنا</a>
                </li>

                <li>
                  <a href="">حول نبض منطقتك</a>
                </li>
                <li>
                  <a href="">برنامج التدريب</a>
                </li>
                <li>
                  <a href="">الشروط والاحكام</a>
                </li>
                <li>
                  <a href="">سياسة الخصوصية</a>
                </li>
                <li>
                  <a href="">وظائف شاغرة</a>
                </li>
                <li>
                  <a href="">أعلن معنا</a>
                </li>
                <li>
                  <a href="">شاركنا برأيك</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-lg-3">
              <div className="footer-title">
                <h4 className={menuTitle}>تابعونا</h4>
              </div>
              <ul className={menu}>
                <li>
                  <a href="#">تطبيقاتنا</a>
                </li>
                <li>
                  <a href="#">راديو مباشر</a>
                </li>
                <li>
                  <a href="#">ترددات القناة</a>
                </li>
                <li>
                  <a href="#">البث المباشر</a>
                </li>
                <li>
                  <a href="#">دليل البث</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-lg-3">
              <div className="footer-title">
                <h4>الأقسام</h4>
              </div>
              <ul className={menu}>
                <li>
                  <a href="#">صحة</a>
                </li>
                <li>
                  <a href="#">رياضة</a>
                </li>
                <li>
                  <a href="#">وظائف</a>
                </li>
                <li>
                  <a href="#">منح دراسية</a>
                </li>
                <li>
                  <a href="#">وفيات</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-lg-3 text-center">
              <img src="src\assets\design.png" alt="new" className="w-100" />
              <p>لبلدنا والناس والحرية</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="row">
            <div className="col-sm-10">
              <p>
                كافة العلامات التجارية الخاصة بـ نبض وكل ما تتضمنه من حقوق
                الملكية الفكرية هي ملك لمجموعة نبض منطقتك ولا تستخدم إلا بتصريح
                مسبق.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

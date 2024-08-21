import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-md-6 col-lg-3 about-footer">
              <h3>
                نب<span>ض</span> منطقتك
              </h3>
              <ul>
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
            <div className="col-md-6 col-lg-2 about-footer">
              <div className="footer-title">
                <h4>تابعونا</h4>
              </div>
              <ul>
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

            <div className="col-md-6 col-lg-3 about-footer">
              <div className="footer-title">
                <h4>الأقسام</h4>
              </div>
              <ul>
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

import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components/common";

import styles from "./mainLayout.module.scss";
const { wrapper } = styles;

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className={wrapper}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Router";

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;

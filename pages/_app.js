import { Provider } from "react-redux";
import store from "../redux/store";
// import { Toaster } from "react-hot-toast";
import "../styles/globals.css";
import "../components/HomePage/Container1/Swiper/swiper1.scss";
import "../components/HomePage/Container5/Swiper/swiper2.scss";
import "../components/AboutUzbPage/UzMap/box9.scss";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        {/* <Toaster /> */}
      </Provider>
    </>
  );
}

export default MyApp;

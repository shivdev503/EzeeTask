import Banner from "./components/entryPage/Banner";
import Footer from "./components/footer/Footer";
import Homepage from "./components/home/Homepage";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Homepage /> */}
      <Banner />
      <Footer />
    </>
  );
}

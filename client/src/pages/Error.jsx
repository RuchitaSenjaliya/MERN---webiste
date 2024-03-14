import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Error() {
  return (
    <>
      <Navbar />
      <div className="error">
        <div className="error-code">404</div>
        <div className="para">Something went wrong.</div>
      </div>
      <Footer />
    </>
  );
}

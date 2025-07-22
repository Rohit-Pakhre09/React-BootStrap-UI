import "bootstrap/dist/css/bootstrap.min.css";
import Information from "./components/Information";
import Image from "./components/Image";

const App = () => {
  return (
    <section className="min-vh-100">
      <div className="container h-100">
        <div className="row h-100 d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-5 col-md-7 col-lg-7 d-flex">
            <Information />
          </div>

          <div className="col-12 col-md-7 col-lg-5 d-flex justify-content-end">
            <Image />
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;

import React from "react";
import MenuBtn from "../components/MenuBtn";
import './Home.css'


const Home = () => {
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align items-center text-light shadow">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
              <h2 className="mb-6 text-dark fw-bold"> Welcome To</h2>
              <h1 className="mb-6 text-dark fw-bold text-center text-sm-start">Toddys Restaurant</h1>
              <MenuBtn />
            </div>
          </div>
        </div>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
            <img src="" className="img-fluid w-50" alt="about img"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

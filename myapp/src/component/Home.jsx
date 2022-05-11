import React from 'react';
import mob1 from './images/mob1.jpg'
import mob2 from './images/mob2.jpg'
import mob3 from './images/mob3.jpg'
import mob4 from './images/mob4.jpg'
import Product from './Product';
const Home = () => {
    return (
        <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={mob1} className="d-block w-100" alt="" height='450px'/>
          </div>
          <div className="carousel-item">
            <img src={mob2} className="d-block w-100" alt="..." height='450px'/>
          </div>
          <div className="carousel-item">
            <img src={mob3} className="d-block w-100" alt="..." height='450px'/>
          </div>
          <div className="carousel-item">
          <img src={mob4} className="d-block w-100" alt="..." height='450px'/>
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        <Product/>
        </div>
    );
};

export default Home;
import React from 'react';
import plantasImage from '../assets/images/plantas.png';
import macetasImage from '../assets/images/macetas2.jpeg';
import sustratosImage from '../assets/images/sustrato2.png';

const Carousel = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="3000">
                                <img src={plantasImage} className="d-block" style={{ width: '700px' }} alt="plantas" />
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src={macetasImage} className="d-block" style={{ width: '700px', maxHeight: '500px'}} alt="macetas" />
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src={sustratosImage} className="d-block" style={{ width: '700px' }} alt="sustratos" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Carousel;

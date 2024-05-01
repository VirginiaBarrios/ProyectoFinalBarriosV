import { Link } from "react-router-dom";
import bannerPlantas from "../assets/images/plantas3.jpg";
import bannerMacetas from "../assets/images/macetas.png";
import bannerSustratos from "../assets/images/humus-lombriz.jpg";


const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerPlantas})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320, marginRight:20}}>
                    <Link to={"/category/plantas"} className="text-decoration-none">
                        <span className="text-black text-uppercase px-3 py-2 efecto-glass">Plantas</span>
                    </Link>
                </div>
                
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerMacetas})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320}}>
                    <Link to={"/category/macetas"} className="text-decoration-none">
                        <span className="text-black text-uppercase px-3 py-2 efecto-glass">Macetas</span>
                    </Link>
                </div>

                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerSustratos})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320, marginLeft:20}}>
                    <Link to={"/category/sustratos"} className="text-decoration-none">
                        <span className="text-black text-uppercase px-3 py-2 efecto-glass">Sustratos</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;
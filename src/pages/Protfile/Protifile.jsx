import React, { useEffect } from 'react'
import "./Protfile.css"
import Aos from 'aos'
import "aos/dist/aos.css"
import onee from "../../assets/onee.png"
import two from "../../assets/two.png"
import three from "../../assets/three.png"
import four from "../../assets/four.png"
import five from "../../assets/five.png"
import six from "../../assets/six.png"

const Protifile = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, offset: 10, })
    })
    return (
        <>
            <div className="profile-contanier">

                <div className="all-head">
                    <h1 className='heads' data-aos="zoom-in" data-aos-delay="400">
                        My <span className='dif-color'> Protfolio</span>
                    </h1>    
                    </div>

                    <div className="second-profile-head">
                        <div className="profBox" data-aos="fade-up" data-aos-delay="700">
                            <img src={onee} alt="" />
                            <a href="https://anasalidev.github.io/MaestroPizzini/" >
                            See More</a>
                        </div>
                        <div className="profBox" data-aos="fade-up" data-aos-delay="700">
                            <img src={two} alt="" />
                            <a href="https://anasalidev.github.io/checkweather/" >See More</a>
                        </div>
                        <div className="profBox" data-aos="fade-up" data-aos-delay="700">
                            <img src={four} alt="" />
                            <a href="https://anasalidev.github.io/foodwebsite/" >See More</a>
                        </div>
                        <div className="profBox" data-aos="fade-up" data-aos-delay="900">
                            <img src={three} alt="" />
                            <a href="https://anasalidev.github.io/reactwebsite/"  >See More</a>
                        </div>
                        
                   
                        <div className="profBox" data-aos="fade-up" data-aos-delay="900">
                            <img src={six} alt="" />
                            <a href="https://github.com/anasalidev">See More</a>
                        </div>
                        <div className="profBox" data-aos="fade-up" data-aos-delay="900">
                            <img src={five} alt="" />
                            <a href=" https://anasalidev.github.io/FitnessClub/" >See More</a>
                        </div>
                       
                    </div>
            </div>

        </>
    )
}

export default Protifile

import React, { useEffect } from 'react'
import "./Service.css"
import Aos from 'aos'
import "aos/dist/aos.css"
import { useState } from 'react'
import Serviceitem from './Serviceitem'

const Service = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, offset: 10, })
    })
    const [item] = useState(Serviceitem)
    return (
        <div>
            <div className="service-contanier">

                <div className="all-head">
                    <h1 className='heads' data-aos="zoom-in" data-aos-delay="400">
                        Our <span className='dif-color'> Service </span>
                    </h1>
                    <p data-aos="zoom-in" data-aos-delay="800">
                        Hi there! At Anas Ali, we're all about  creating websites that look great and work really well. As a front-end web developer, we focus on bringing your digital ideas to life in a way that's smooth and interesting for people who visit your site.
                    </p>
                </div>



                <div className="second-service-head">
                    {
                        item.map((element) => {
                            const{names, number, description} = element;
                            return (
                                <div className="service-box" data-aos="zoom-in-down" data-aos-delay="1000">
                                    <h1>{number} </h1>
                                    <h4>{names} </h4>
                                    <p>{description} </p>
                                </div>
                            )
                        })

                    }
                </div>

            </div>

        </div>
    )
}

export default Service

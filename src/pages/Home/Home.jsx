import React, { useEffect } from 'react'
import "./Home.css"
import About from '../About/About';
import Service from '../Service/Service';
import Protifile from '../Protfile/Protifile';
import Contact from '../Contact/Contact';
import { FaArrowRight } from "react-icons/fa";
import mypic from "../../assets/mee.png"
import Aos from 'aos'
import "aos/dist/aos.css"
import cv from "./new cv.pdf"

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })
  return (
    <>
      <div className="contanier">

        <div className="contanier-Bx" id='imgBox' data-aos="fade-right" data-aos-delay="600" >
          <img src={mypic} alt='' />
        </div>


        <div className="contanier-Bx" id='heading' >
          <h1 className='head' data-aos="fade-left" data-aos-delay="400">
            <span className='dif-color'> I'm Anas Ali</span>
            <br /> Web Developer</h1>
          <p data-aos="fade-left" data-aos-delay="1000">
            I'm a  web designer & front-end developer focused on crafting clean & user-friendly experiences, I am passionate about building excellent website that improves the lives of those around me.
          </p>

          <div className='btn' data-aos="fade-left" data-aos-delay="1600">
            <a href={cv} download >Download CV</a>
            <FaArrowRight className='icon' />
          </div>

        </div>


      </div>
      <About />
      <Service />
      <Protifile />
      <Contact />
    </>
  )
}

export default Home;

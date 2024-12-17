import React, { useEffect } from 'react'
import "./Contact.css"
import Aos from 'aos'
import "aos/dist/aos.css"
import me from "../../assets/anas1.png"
import cv from "./Anas Resume.pdf"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdInsertDriveFile } from "react-icons/md";




const Contact = () => {


    useEffect(() => {
        Aos.init({ duration: 1000, offset: 10, })
    })
    return (
        <>
            <div className="contact-contanier">
                <div className="all-head">
                    <h1 className="heads" data-aos="zoom-in" data-aos-delay="400">
                        Contact<span className='dif-color'> Me</span>
                    </h1>
                </div>


                <div className="second-contact-head">



                    <div className="contact-box" id="left-box" data-aos="fade-up" data-aos-delay="500">
                        <div className="imgBox" >
                            <img src={me} alt="" />
                        </div>
                        <div className="textBox">
                            <h1 className='samll-head'>Get In<span className='dif-color'> Touch </span> </h1>
                            <p>Thank you for exploring my portfolio! I'm excited to connect with you. Whether you have a potential project, collaboration idea, or just want to chat, feel free to reach out.</p>
                            <div className="icons">
                                <a href="https://www.linkedin.com/in/anasalibinanwar/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                                <a href="https://github.com/anasalidev" target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
                                <a href={cv} download><MdInsertDriveFile /></a>
                            </div>
                        </div>

                    </div>





                    <div className="contact-box" id='right-box' data-aos="fade-up" data-aos-delay="700">
                        <h1 className='samll-head'>Ways to <span className='dif-color'>Connect:</span> </h1>
                        <div className="input-box">

                            <div className="inputs">
                                <label>Name</label>
                                <input type="text" />
                            </div>
                            <div className="inputs">
                                <label>Gmail</label>
                                <input type="gmail" />
                            </div>
                            <div className="inputs">
                                <label>Phone Number</label>
                                <input type="number" />
                            </div>
                            <div className="inputs">
                                <label>Massage</label>
                                <textarea type="massage" cols="30" rows="2"></textarea>
                            </div>

                            <div className="butn">
                                <button >Submit</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact

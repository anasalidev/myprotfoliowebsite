import React, { useEffect, useState } from 'react'
import "../About/About.css"
import { Circle } from 'rc-progress';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import { FaArrowRight } from 'react-icons/fa';
import Aos from 'aos'
import "aos/dist/aos.css"

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, offset: 10, })
    })
    const [countUpp, setcountUp] = useState(false)
    return (
        <>
            <div className="about-contanier">
                <div className="all-head">
                    <h1 className='heads' data-aos="zoom-in" data-aos-delay="300">
                        About <span className='dif-color'> Me </span>
                    </h1>
                </div>
                {/* ========================================= */}
                <div className="second-head">
                    <h2 className='samll-head' data-aos="zoom-in" data-aos-delay="500">Persnol information </h2>
                    <div className="infomation">
                        <h4 data-aos="zoom-in" data-aos-delay="800"><span>Name: </span>  <span>Anas Ali</span> </h4>
                        <h4 data-aos="zoom-in" data-aos-delay="800"><span>Phone: </span> <span>+923104225157</span> </h4>
                        <h4 data-aos="zoom-in" data-aos-delay="800"><span>Gmail: </span> <span>anasalibinanwar@gamil.com</span> </h4>
                        <h4 data-aos="zoom-in" data-aos-delay="800"><span>Adress: </span> <span>Township, Lahore</span> </h4>
                    </div>

                    <div className='btn' data-aos="fade-up" data-aos-delay="800">
                        <a href="#a">Learn More</a>
                        <FaArrowRight className='icon' />
                    </div>

                </div>
                {/* ====================================== */}

                <div className="third-head">
                    <h2 className='samll-head' data-aos="zoom-in" data-aos-delay="800">My skills</h2>
                    <ScrollTrigger onEnter={() => setcountUp(true)} onExit={() => setcountUp(false)}>
                        <div className="skill-information">
                            {/* ========= */}
                            <div className="skill-box">
                                <p>HTML</p>
                                <h1>{countUpp && <CountUp strat={0} end={95} duration={3} delay={0} scrollSpyDelay={600} />} % </h1>
                                <Circle value={90} percent={95} strokeWidth={7} trailWidth={7} strokeColor="var(--first-color)" className='pro-line' />
                            </div>

                            {/* ========= */}
                            {/* ========= */}
                            <div className="skill-box">
                                <p>CSS</p>
                                <h1>{countUpp && <CountUp strat={0} end={85} duration={3} delay={0} />} % </h1>
                                <Circle percent={85} strokeWidth={7} trailWidth={7} strokeColor="var(--first-color)" className='pro-line' />
                            </div>

                            {/* ========= */}
                            {/* ========= */}
                            <div className="skill-box">
                                <p>JavaScrip</p>
                                <h1>{countUpp && <CountUp strat={0} end={50} duration={3} delay={0} />} % </h1>
                                <Circle percent={50} strokeWidth={7} trailWidth={7} strokeColor="var(--first-color)" className='pro-line' />
                            </div>

                            {/* ========= */}
                            {/* ========= */}
                            <div className="skill-box">
                                <p>React JS</p>
                                <h1>{countUpp && <CountUp strat={0} end={70} duration={3} delay={0} />} % </h1>
                                <Circle percent={75} strokeWidth={7} trailWidth={7} strokeColor="var(--first-color)" className='pro-line' />
                            </div>

                            {/* ========= */}
                            {/* ========= */}
                            <div className="skill-box">
                                <p>Bootstrap</p>
                                <h1>{countUpp && <CountUp strat={0} end={75} duration={3} delay={0} />} % </h1>
                                <Circle percent={75} strokeWidth={7} trailWidth={7} strokeColor="var(--first-color)" className='pro-line' />
                            </div>

                            {/* ========= */}
                            <div className="skill-box">
                                <p>REST Apis</p>
                                <h1>{countUpp && <CountUp strat={0} end={50} duration={3} delay={0} />} % </h1>
                                <Circle percent={50} strokeWidth={7} trailWidth={7} strokeColor="var(--first-color)" className='pro-line' />
                            </div>

                            {/* ========= */}
                            <div className="skill-box">
                                <p>Node JS</p>
                                <h1>{countUpp && <CountUp strat={0} end={40} duration={3} delay={0} />} % </h1>
                                <Circle percent={40} strokeWidth={7} trailWidth={7} strokeColor="var(--first-color)" className='pro-line' />
                            </div>

                            {/* ========= */}
                        </div>
                    </ScrollTrigger>
                </div>


            </div>

        </>
    )
}

export default About

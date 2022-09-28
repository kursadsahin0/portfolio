import React from 'react';
import './projects.css';
import image1 from './assets/image1.jpeg'
import image2 from './assets/image2.jpeg';
import image3 from './assets/image3.jpeg';
import image4 from './assets/image4.jpeg';
import image5 from './assets/image5.jpeg';
import image6 from './assets/image6.jpeg';
import { Link } from "react-router-dom";
function Projects() {
    return (
        <div>
            <div className='navbar'>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
            </div>
            <div className='project'>
                <div className='project1'>
                  <a href="https://t.co/hwZDb5ulju" aria-label="foodApp" rel="noopener" target="_blank">  <img src={image1} alt="" className='image1' /></a>
                  <a href="https://t.co/hwZDb5ulju" aria-label="foodApp" rel="noopener" target="_blank">  <h3 className='skills'>Skills: <span>React, Scss</span></h3></a>
                </div>
                <div className='project1'>
                <a href="https://exquisite-taiyaki-9dde73.netlify.app/" aria-label="ecommerce" rel="noopener" target="_blank">  <img src={image2} alt="" className='image1' /></a>
                <a href="https://exquisite-taiyaki-9dde73.netlify.app/" aria-label="ecommerce" rel="noopener" target="_blank">  <h3 className='skills'>Skills: <span>React, css</span></h3></a>
                </div>
                <div className='project1'>
                <a href="https://kursadsahin0.github.io/e-commerce/" aria-label="ecommerce2" rel="noopener" target="_blank">   <img src={image3} alt="" className='image1' /></a>
                <a href="https://kursadsahin0.github.io/e-commerce/" aria-label="ecommerce2" rel="noopener" target="_blank">   <h3 className='skills'>Skills: <span>Javascript, css</span></h3></a>
                </div>
            </div>
            <div className='project'>
                <div className='project1'>
                <a href="https://genuine-chaja-4c6e01.netlify.app/" aria-label="music" rel="noopener" target="_blank">    <img src={image4} alt="" className='image1' /></a>
                <a href="https://genuine-chaja-4c6e01.netlify.app/" aria-label="music" rel="noopener" target="_blank">    <h3 className='skills'>Skills: <span>React, css</span></h3></a>
                </div>
                <div className='project1'>
                <a href="https://grand-seahorse-293d4a.netlify.app" aria-label="coffee" rel="noopener" target="_blank">    <img src={image5} alt="" className='image1' /></a>
                <a href="https://grand-seahorse-293d4a.netlify.app" aria-label="coffee" rel="noopener" target="_blank">  <h3 className='skills'>Skills: <span>React, css</span></h3></a>
                </div>
                <div className='project1'>
                <a href="https://kursadsahin0.github.io/wikipedia_search/" aria-label="wikipedia" rel="noopener" target="_blank">  <img src={image6} alt="" className='image1' /></a>
                <a href="https://kursadsahin0.github.io/wikipedia_search/" aria-label="wikipedia" rel="noopener" target="_blank">  <h3 className='skills'>Skills: <span>Javascript,API, css</span></h3></a>
                </div>
            </div>
        </div>
    )
}

export default Projects

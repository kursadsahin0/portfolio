import React from 'react'
import './App.css';
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import {  Link } from "react-router-dom";
function Home() {

    return (
        <div className="App">

            <div className="navbar">
             
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
            </div>


            <div className="banner">
                <div className='hi'>
                    <h1 >Hi,<span> My name is Kürşat</span></h1>
                </div>
                <div className='descript'>
              <p><span>A Frontend developer with a passion for learning  and creating.</span><br/><br/> <br/>I graduated from Bartın University Management information system. <br/> I’m interested in Web development since second year of the university.<br/> I started to develop Project with Javascript and React.<br/> I develope myself in terms of research, self-motivation and acquiring different abilities.<br/> I’m a team player, willing to be trained for growth.<br/> I’m believe that everyday is a new start.</p>
                </div>
                <div className="button">
                    <a href="https://www.linkedin.com/in/kursat-sahin0/" aria-label="Linkedin" rel="noopener" target="_blank">
                        <FaLinkedin className="linkedin" />
                    </a>
                    <a href="https://github.com/kursadsahin0" aria-label="Github" rel="noopener" target="_blank">
                        <FaGithub className="github" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCr1FDfmkMKWax2IJw8JlkTQ/featured" aria-label="Youtube" rel="noopener" target="_blank">
                        <FaYoutube className="youtube" />
                    </a>
                    <a href="mailto:kursatsahin565@gmail.com" rel="noopener" target="_blank">
                        <FaEnvelope className="mail" />
                    </a>
                </div>
            </div>
        </div>

    );

}


export default Home

import {FaHome, FaToolbox, FaBriefcase, FaRocket } from 'react-icons/fa'
import {useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    const loadProjects = () => {
        navigate("/projects")
    }

    const loadHome = () => {
        navigate("/")
    }

    useEffect(()=> {

        const handleScroll = ()=> {
            //if we scroll down even 10 pixels, show the navbar
            if (window.scrollY > 5) {
                setIsScrolled(true);
            }
            else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);


        //clean up listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }


    }, []); // empty array : this component runs once when the component mounts

    return (  

        //this navbar will have homepage, projects, and experience & space
        <div className={`navbar ${isScrolled ? 'visible' : 'hidden'}`}>
            <button aria-label="home" onClick={loadHome}><FaHome/></button>
            <button aria-label="projects" onClick={loadProjects}><FaToolbox/></button>
            <button aria-label="experience"><FaBriefcase/></button>
            <button aria-label="Space"><FaRocket/></button>
        </div>

    );
}
 
export default Navbar;
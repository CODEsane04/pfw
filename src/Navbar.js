import {FaHome, FaToolbox, FaBriefcase, FaRocket } from 'react-icons/fa'

const Navbar = () => {
    return (  

        //this navbar will have homepage, projects, and experience & space
        <div className="navbar">
            <button aria-label="home"><FaHome/></button>
            <button aria-label="projects"><FaToolbox/></button>
            <button aria-label="experience"><FaBriefcase/></button>
            <button aria-label="Space"><FaRocket/></button>
        </div>

    );
}
 
export default Navbar;
import { useEffect, useRef } from 'react';

// Fa = FontAwesome (Great for generic icons like files and mail)
import { FaFileAlt, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
// Si = SimpleIcons (Great for specific tech brand logos)
import { SiLeetcode } from 'react-icons/si';

const Intro = () => {
    // 1. Create a reference to target the name div directly
    const nameRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            
            // DEBUG: Open your browser console. If this doesn't print numbers as you scroll, 
            // the window isn't scrolling, a parent div is!
            console.log("Current Scroll Position:", scrollY); 
            
            // Calculate the blur (caps at 10px)
            const calculatedBlur = Math.min(scrollY / 30, 10); 
            
            // 2. Apply the blur directly to the DOM element for max performance
            if (nameRef.current) {
                nameRef.current.style.filter = `blur(${calculatedBlur}px)`;
                
                // Optional bonus: smoothly fade the text out as it blurs
                nameRef.current.style.opacity = 1 - (scrollY / 400); 
            }
        };

        // Attach the listener
        window.addEventListener('scroll', handleScroll);
        
        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return ( 
        <div className="home-container">
            
            {/* 3. Attach the ref to the hero section */}
            <div className="name hero-section" ref={nameRef}>
                <p className="first-name">Debjit.</p>
            </div>

            <div className="content-section">

                <div className="about-me-grid">

                    <div className="about-me-text">
                        <p className="scroll-reveal">
                            <span className='p1'>Hi, I'm Debjit from IIT Jodhpur, persuing B.tech in Engineering Science, Majors in Computer Science. I love building real-world applications that solve actual problems. Roam around, Look at my projects, connect with me, see you around!</span>
                        </p>
                    </div>

                </div>

                {/* NEW: The 5-Column Links Section */}
                <div className="links-grid">
    
                    {/* Card 1: Resume */}
                    <div className="link-card-container">
                        {/* Replace href with the actual path to your PDF */}
                        <a href="/Debjit_Resume.pdf" target="_blank" rel="noreferrer" className="link-card">
                            <FaFileAlt className="card-icon" />
                        </a>
                        <button className="link-btn">DOWNLOAD RESUME</button>
                    </div>

                    {/* Card 2: LinkedIn */}
                    <div className="link-card-container">
                        <a href="https://www.linkedin.com/in/debjit-ghorai-23a22728a/" target="_blank" rel="noreferrer" className="link-card">
                            <FaLinkedin className="card-icon" />
                        </a>
                        <button className="link-btn">CONNECT</button>
                    </div>

                    {/* Card 3: Gmail */}
                    <div className="link-card-container">
                        <a href="mailto:debjitghorai18@gmail.com" className="link-card">
                            <FaEnvelope className="card-icon" />
                        </a>
                        <button className="link-btn">GMAIL</button>
                    </div>

                    {/* Card 4: GitHub */}
                    <div className="link-card-container">
                        <a href="https://github.com/CODEsane04" target="_blank" rel="noreferrer" className="link-card">
                            <FaGithub className="card-icon" />
                        </a>
                        <button className="link-btn">GITHUB</button>
                    </div>

                    {/* Card 5: LeetCode */}
                    <div className="link-card-container">
                        <a href="https://leetcode.com/u/GODsane04/" target="_blank" rel="noreferrer" className="link-card">
                            <SiLeetcode className="card-icon" />
                        </a>
                        <button className="link-btn">LEETCODE</button>
                    </div>

                </div>
                
                {/* Temporary spacer to ensure the page is scrollable */}
                <div style={{ height: '15vh' }}></div>
            </div>

        </div>
    );
}
 
export default Intro;
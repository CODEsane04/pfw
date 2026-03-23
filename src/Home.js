import { useEffect, useRef } from 'react';

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
                
                {/* Temporary spacer to ensure the page is scrollable */}
                <div style={{ height: '150vh' }}></div>
            </div>

        </div>
    );
}
 
export default Intro;
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
                <div className="about-me">
                    <p>Hi I am debjit from IIT jodhpur, I love to build applications which solve a real world problem. Take some time, roam around my profile, happy to connect with you</p>
                </div>
                
                {/* Temporary spacer to ensure the page is scrollable */}
                <div style={{ height: '150vh' }}></div>
            </div>

        </div>
    );
}
 
export default Intro;
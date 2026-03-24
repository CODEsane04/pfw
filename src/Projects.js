const Projects = () => {
    return (
        <div className="projects-container text-white">

            <h1 className="ftitle">PROJECTS</h1>
            
            {/* The Global 12-Column Grid Row */}
            <div className="project-row">
                
                {/* LEFT SIDE: 4 Columns for the Project Card */}
                <div className="project-card-wrapper">
                    <div className="project-card">
                        
                        {/* Internal Grid Row 1: The Header */}
                        <div className="project-card-header">
                            <span>Project - 1</span>
                        </div>
                        
                        {/* Internal Grid Rows 2, 3, 4: Content & Buttons */}
                        <div className="project-card-body">
                            <h2 className="project-title">Link Hunter</h2>
                            <p className="project-short-desc">A Full stack AI chrome extension, which serves you YouTube tutorial links with just a right click over any relevant image</p>
                            
                            <div className="project-buttons">
                                <a href="https://github.com/CODEsane04/Link-Hunter.git" target="_blank" rel="noopener noreferrer" className="project-btn">
                                    Github
                                </a>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="#" target="_blank" rel="noopener noreferrer" className="project-btn">
                                    Live
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* RIGHT SIDE: 8 Columns for Details & Tech Stack */}
                <div className="project-details-wrapper">
                    <h3 className="details-heading">Detailed Description</h3>
                    <ul className="details-list">
                        <li>
                            Architected an AI-powered Chrome Extension and Node.js/Python microservice that processes user-selected web images using Hugging Face's Qwen2.5-VL model, employing Base64 encoding to reliably bypass host-site anti-bot protections.
                        </li>
                        <li>
                            Engineered a resilient search and ranking pipeline featuring LLM-driven guardrails via structured JSON prompting, dual-query expansion (precision vs. discovery), and a custom mathematical "Freshness Decay" algorithm to dynamically rank YouTube tutorials by balancing lifetime views and recency.
                        </li>
                    </ul>
                    
                    <div className="tech-stack-list">
                        <span className="tech-tag">React</span>
                        <span className="tech-tag">Express.js</span>
                        <span className="tech-tag">Node.js</span>
                        <span className="tech-tag">Python 3</span>
                        <span className="tech-tag">Hugging Face Inference API</span>
                        <span className="tech-tag">Qwen2.5-VL-7B-Instruct</span>
                    </div>
                </div>

            </div>

            {/* PROJECT - 2 */}

            <div className="project-row">
                
                {/* LEFT SIDE: 4 Columns for the Project Card */}
                <div className="project-card-wrapper">
                    <div className="project-card">
                        
                        {/* Internal Grid Row 1: The Header */}
                        <div className="project-card-header">
                            <span>Project - 2</span>
                        </div>
                        
                        {/* Internal Grid Rows 2, 3, 4: Content & Buttons */}
                        <div className="project-card-body">
                            <h2 className="project-title">URL Shortener</h2>
                            <p className="project-short-desc">A full-stack React and Node.js web app, which transforms long, bulky URLs into clean, shareable links instantly.</p>
                            
                            <div className="project-buttons">

                                <a href="https://github.com/CODEsane04/URL-shortener.git" target="_blank" rel="noopener noreferrer" className="project-btn">
                                    Github
                                </a>
                                <a href="https://urlshortener-blush-nu.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-btn">
                                    Live
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* RIGHT SIDE: 8 Columns for Details & Tech Stack */}
                <div className="project-details-wrapper">
                    <h3 className="details-heading">Detailed Description</h3>
                    <ul className="details-list">
                        <li>
                            Architected a scalable full-stack MVC application using the MERN stack (React, Node.js, Express, MongoDB) to deliver secure, authenticated URL shortening and high-speed client redirection.
                        </li>
                        <li>
                            Engineered a robust authentication system by implementing stateful user sessions via JSON Web Tokens (JWT) and HTTP-only cookies, effectively securing critical API endpoints against common web vulnerabilities.
                        </li>
                    </ul>
                    
                    <div className="tech-stack-list">
                        <span className="tech-tag">React</span>
                        <span className="tech-tag">Node.js</span>
                        <span className="tech-tag">Express.js</span>
                        <span className="tech-tag">MongoDB</span>
                        <span className="tech-tag">J.W.T</span>
                    </div>
                </div>

            </div>

            {/* PROJECT - 3 */}
            <div className="project-row">
                
                {/* LEFT SIDE: 4 Columns for the Project Card */}
                <div className="project-card-wrapper">
                    <div className="project-card">
                        
                        {/* Internal Grid Row 1: The Header */}
                        <div className="project-card-header">
                            <span>Project - 3</span>
                        </div>
                        
                        {/* Internal Grid Rows 2, 3, 4: Content & Buttons */}
                        <div className="project-card-body">
                            <h2 className="project-title">Grid Navigator</h2>
                            <p className="project-short-desc">An interactive web application for visualizing complex graph algorithms</p>
                            
                            <div className="project-buttons">
                                <a href="https://github.com/hecker-200/DSAFINAL.git" target="_blank" rel="noopener noreferrer" className="project-btn">
                                   Github
                                </a>
                                <a href="https://hecker-200.github.io/DSAFINAL/" target="_blank" rel="noopener noreferrer" className="project-btn">
                                    Live
                                </a>
                                
                            </div>
                        </div>

                    </div>
                </div>

                {/* RIGHT SIDE: 8 Columns for Details & Tech Stack */}
                <div className="project-details-wrapper">
                    <h3 className="details-heading">Detailed Description</h3>
                    <ul className="details-list">
                        <li>
                            Engineered an interactive web application to visualize complex graph traversal algorithms—including Dijkstra’s, A* Search, BFS, and DFS—bringing abstract data structures to life through real-time execution.
                        </li>
                        <li>
                            Designed a dynamic, grid-based interface that empowers users to map custom wall obstacles and define start/target nodes, providing immediate visual feedback on pathfinding efficiency and algorithmic behavior.
                        </li>
                    </ul>
                    
                    <div className="tech-stack-list">
                        <span className="tech-tag">HTML5</span>
                        <span className="tech-tag">CSS3</span>
                        <span className="tech-tag">JavaScript</span>
                    </div>
                </div>

            </div>
            
            {/* You can just copy/paste the <div className="project-row"> block for Project 2, Project 3, etc. */}

        </div>
    );
}

export default Projects;
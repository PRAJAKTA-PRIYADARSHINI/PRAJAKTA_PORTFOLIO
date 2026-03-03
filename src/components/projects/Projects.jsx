import { FaGithub } from "react-icons/fa"
import { motion } from "framer-motion";

const Projects=()=>{
    return(
        <div id="projects">
             <div className="projectheading">
            <span>P</span>
            <span>R</span>
            <span>O</span>
            <span>J</span>
            <span>E</span>
            <span>C</span>
            <span>T</span>
            <span>S</span>
        </div>
    <div className="projects" >
        
        <div className="project1">
            <h3>Edusphere</h3><br/><br/>
            <p>Tech Stack : HTML, CSS, Bootstrap, Javascript, PHP, JSON, MariaDB, RESTFUL API</p><br/><br/>
            <p>Created a simple React e-commerce site with product listing, product details, and a working cart system. Used Context API for state management and fetched product data through APIs. Made the UI fully responsive for a smooth, user-friendly shopping experience</p><br/><br/>
            <a href="https://github.com/PRAJAKTA-PRIYADARSHINI/Edusphere"><FaGithub/>   Github</a>
        </div>

        <div className="project2">
             <h3>SpaceX Website Clone</h3><br/><br/>
            <p>Tech Stack : HTML, CSS, Bootstrap, Javascript, React</p><br/><br/>
            <p>Built a responsive clone of the SpaceX website using React.js and modern CSS, implementing reusable components, smooth navigation, and pixel-perfect layouts with Flexbox, Grid, and media queries to ensure performance, responsiveness, and an improved user experience.</p><br/><br/>
            <a href=""><FaGithub/>   Github</a>
        </div>
        
        <div className="project3">
             <h3>B-Planet</h3><br/><br/>
            <p>Tech Stack : HTML, CSS, Javascript, React</p><br/><br/>
            <p>Created a simple React e-commerce site with product listing, product details, and a working cart system. Used Context API for state management and fetched product data through APIs. Added clean navigation with React Router and made the UI fully responsive for a smooth, user-friendly shopping experience</p><br/><br/>
            <a href="https://github.com/PRAJAKTA-PRIYADARSHINI/b-planet" target="blank"><FaGithub/>   Github</a>
        </div>
        </div>
        </div>
    )
}
export default Projects
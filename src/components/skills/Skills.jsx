import { FaBootstrap, FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { SiMongodb } from "react-icons/si"

const Skills=()=>{
    return(
        <div id="skills">
             <p class="skillsheading" >
            <span>S</span>
            <span>K</span>
            <span>I</span>
            <span>L</span>
            <span>L</span>
            <span>S</span>
        </p>
        <div class="skills" >
        <div class="sk"><FaHtml5 className="skillsIcon"/>HTML</div>
        <div class="sk"><FaCss3Alt className="skillsIcon"/>CSS</div>
        <div class="sk"><FaBootstrap className="skillsIcon"/>Bootstrap</div>
        <div class="sk"><IoLogoJavascript className="skillsIcon"/>Javascript</div>
        <div class="sk"><FaNodeJs className="skillsIcon"/>NodeJS</div>
        <div class="sk"><SiMongodb className="skillsIcon"/>MongoDB</div>
         <div class="sk"><FaReact className="skillsIcon"/>ReactJS</div>

        
        </div>
        </div>
    )
}
export default Skills
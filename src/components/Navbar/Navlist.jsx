import PrajaktaResume from "../../assets/Prajakta_resume.pdf"
const Navlist=()=>{
    return(
         <div className="navlist">
                <ul>
                    <li><a href="#home" >HOME</a></li>
                    <li><a href="#aboutme">ABOUT</a></li>
                    <li><a href="#skills">SKILLS</a></li>
                    <li><a href="#projects">PROJECTS</a></li>
                    <li><a href="#contacts">CONTACT</a></li>
                    <li><a href={PrajaktaResume} download>DOWNLOAD CV</a></li>
                </ul>
            </div>
    )
}
export default Navlist
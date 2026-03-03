import Aboutme from "./About/Aboutme"
import Contact from "./Contact/Contact"
import Footer from "./footer/Footer"
import Mainsection from "./mainsection/Mainsection"
import Navbar from "./Navbar/Navbar"
import Projects from "./projects/projects"
import Skills from "./skills/skills"

const Homepage=()=>{
    return(
        <div className="main">
            <Navbar/>
            <Mainsection/>
            <Aboutme/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    )
}
export default Homepage
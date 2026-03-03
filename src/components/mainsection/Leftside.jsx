import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Leftside=()=>{
    return(
        <div className="about">
                {/* <div className="aboutt"> */}
                <div className="prajakta">Prajakta Priyadarshini Behera
                </div>
                <div className="hello">Hello I'm</div>
                <h1>Prajakta Priyadarshini Behera</h1>
                {/* <h3>
                    <p className="and" style="color: white;">And I'm a<p/>
                    <p className="fullstack">Fullstack Developer</p>
                </h3> */}
                <h3 className="and" style={{ color: "white" }}>And I'm a <span className="fullstack" style={{ color:" #2FB7E3" ,marginLeft: "5px" }}>Fullstack Developer</span>
                </h3>

                <p className="desc">Full-stack developer crafting scalable web applications with clean architecture and intuitive user experiences.</p>

                <div className="icon">
                    <a href="https://x.com/prajakta_behera?t=LuLma9JDRDOEEvgk3hm_AA&s=08" target="blank"><FaTwitter/></a>
                    <a href="https://www.linkedin.com/in/prajakta-priyadarshini-behera-1576a8242/" target="blank"><FaLinkedin /></a>
                    <a href="https://github.com/PRAJAKTA-PRIYADARSHINI" target="blank"><FaGithub/></a>
                </div>
                
            {/* </div>  */}
            </div>
    )
}
export default Leftside
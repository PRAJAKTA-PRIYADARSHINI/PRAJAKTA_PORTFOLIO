import profilepic from "../../assets/profilepic.png"
const Rightside=()=>{
    return(
        <div class="photo">
                <div class="imagecircle">
                    <div class="profilepic">
                        <img src={profilepic} alt="Prajakta profile photo"/>
                    </div>
                    <div class="highlightcircle"></div>
                </div>
            </div>
    )
}
export default Rightside
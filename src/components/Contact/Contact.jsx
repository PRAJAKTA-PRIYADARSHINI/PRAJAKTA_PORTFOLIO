import { FaArrowTurnDown,FaEnvelope } from "react-icons/fa6"
import { IoIosSend } from "react-icons/io"

const Contact=()=>{
    return(
        <div id="contacts">
        <div class="contactheading">
            <span>C</span>
            <span>O</span>
            <span>N</span>
            <span>T</span>
            <span>A</span>
            <span>C</span>
            <span>T</span>
        </div>
    <div class="contact" >
        <div class="findme">
            <div class="box">
                <div class="find"><p>Find me  <FaArrowTurnDown className="contacticon"/></p></div>
                <div class="email"><FaEnvelope className="contacticon" style={{marginRight:"10px"}}/>    prajaktapriyadarshinibehera@gmail.com</div>
            </div>
        </div>
        <div class="mail">
            <div class="first"> 
                <input type="text" placeholder=" Name" name="name" id="name"/>
                <input type="email" placeholder=" Email" name="email" id="name"/>
            </div>
           
            <textarea  id="" placeholder="Message" name="message"  rows="20" cols="78"></textarea>
            <button><IoIosSend />Send</button>
        </div>
    </div>
        </div>
    )
}
export default Contact
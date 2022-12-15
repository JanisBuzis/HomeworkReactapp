import In_icon from './in.svg'
import Inst_icon from './inst.svg'
import Be_icon from './be.svg'
import Ball_icon from './ball.svg'

import './Footer.css'


function Footer () {
    return (
        <div className = "footer_wrapper">
            <h3 className ="h3">Contacts</h3>
            <p className = "footer_p">Want to know more or just chat?<br/>You are welcome!</p>
            <button className = "button">Send message</button>
            <div className = "icons">
                <img className = "icon_img" src={In_icon} alt="icons"/>
                <img className = "icon_img" src={Inst_icon} alt="icons"/>
                <img className = "icon_img" src={Be_icon} alt="icons"/>
                <img className = "icon_img" src={Ball_icon} alt="icons"/>
            </div>
            <p className = "icon_desc1">Like me on <br/> LinkedIn, Instagram, Behance, Dribble</p>
        </div>  
    )
}

export default Footer
import './Skills.css'

import Html_icon from './html_icon.svg'
import Css_icon from './css_icon.svg'
import Js_icon from './js_icon.svg'
import React_icon from './react_icon.svg'
import Stars_ratings from './stars_ratings.png'

function Skills () {
    return (
        <div className = "skills_wrapper">
            <h2 className = "h2">Skills</h2>
            <p className = "p_skills">I work in such technologies as</p>
            <div className = "skills_icons">
                <div className = "html_icon">
                    <img src={Html_icon} alt="html_icon"/>
                    <p className = "icon_desc">HTML5</p>
                    <img className = "stars_ratings" src={Stars_ratings} alt="stars_ratings"/>
                </div>
                <div className = "css_icon">
                    <img src={Css_icon} alt="css_icon"/>
                    <p className = "icon_desc">CSS3</p>
                    <img className = "stars_ratings" src={Stars_ratings} alt="stars_ratings"/>
                </div>
                <div className = "js_icon">
                    <img src={Js_icon} alt="js_icon"/>
                    <p className = "icon_desc">Javascript</p>
                    <img className = "stars_ratings" src={Stars_ratings} alt="stars_ratings"/>
                </div>
                <div className = "react_icon">
                    <img src={React_icon} alt="react_icon"/>
                    <p className = "icon_desc_react">React</p>
                    <img className = "stars_ratings" src={Stars_ratings} alt="stars_ratings"/>
                </div>
            </div>
        </div>
    )
}

export default Skills
import "./Info.css"

import Photo from "./photo.svg"

function Info () {
    return (
        <div className="description_wrapper">
            <div className='description'>
                <p className="name">Inants<br/>Hayk</p>
                <p className="age">web developer<br/> 28 years old, Yerevan</p>
                <p className="language">RU | ENG</p>
            </div>
            <div className="photo">
                    <img className="photo_image" src={Photo} alt="photo"/> 
            </div>
        </div>
    )
}

export default Info
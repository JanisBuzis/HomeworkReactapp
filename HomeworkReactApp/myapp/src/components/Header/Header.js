import './Header.css'

function Header(){
    return(
      <div className="header_wrapper">
        <div className="menu_wrapper">
            <p className='text_style'>Home</p>
            <p className='text_style'>About Me</p>
            <p className='text_style'>Skills</p>
            <p className='text_style'>Portfolio</p>
            <p className='text_style'>Contacts</p>
        </div>
        <div className='line'></div>
      </div>
    )
  }

  export default Header
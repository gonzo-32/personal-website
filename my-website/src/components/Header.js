import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'



function Header() {
  return(
    <div className='col col-12' style={{
      backgroundImage: "url(images/headerbg.jpg)",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '75vh',
      
      backgroundPosition: 'top center'}}>

    </div>
  )
}

export default Header;


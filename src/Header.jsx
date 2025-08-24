import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <>
<Navbar className="bg-danger " id='navbar'>
        <Container>
          <Navbar.Brand href="/">
            <div className=' bg-light' id='headerimgdiv'>
            <img
              alt="image gallery logo/icon"
              src="https://www.kpc.co.id/wp-content/uploads/2020/06/Gallery.png"
              width="50"
              height="35"
              className="d-inline-block align-top "
              
            />
            </div>
           
          </Navbar.Brand>
          <span className='text-light fs-3' style={{fontWeight:"bold"}}>Img-Gallery</span>
          
        </Container>
      </Navbar>
    </>
  )
}

export default Header


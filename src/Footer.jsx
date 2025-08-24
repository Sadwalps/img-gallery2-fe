import React from 'react'
import { faSquareFacebook, faSquareInstagram, faSquareWhatsapp, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer() {
  return (
   <>
 <div className='bg-danger container-fluid pt-4 pb-4'>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 d-flex justify-content-center align-items-center gap-3">
          <div className='text-light footerlogos' ><FontAwesomeIcon icon={faSquareWhatsapp} /></div>
          <div className='text-light footerlogos' ><FontAwesomeIcon icon={faSquareInstagram} /></div>
          <div className='text-light footerlogos' ><FontAwesomeIcon icon={faSquareXTwitter} /></div>
          <div className='text-light footerlogos' ><FontAwesomeIcon icon={faSquareFacebook} /></div>

        </div>
        <div className="col-md-4"></div>
        
      </div>


    </div>
   </>
  )
}

export default Footer
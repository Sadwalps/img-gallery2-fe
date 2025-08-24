import React from 'react'
import { Link } from 'react-router-dom'

function Pagenotfound() {
  return (
    <>
      <div className='container-fluid bg-danger'>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 p-lg-1 p-3 d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
            <h1 id='pnfheading1' className='text-light'>404</h1>
            <h2 id='pnfheading2' className='text-light '>WE ARE SORRY, BUT THE PAGE YO REQUESTED WAS NOT FOUND</h2>
            <Link to={'/'}><button className='mt-3 btn btn-light text-danger'>Go Home</button></Link>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  )
}

export default Pagenotfound
import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Displayimages from './Displayimages';
import { addImageAPI, getImageAPI } from './service/allApi';
function Home() {
    const [show, setShow] = useState(false);
    const [images,setImages] =useState([])
    

    const [imgdeatils, setImgdeatils] = useState({
        title: "",
        url: ""
    })
    console.log(imgdeatils);

    const handleCancel = () => {
        setImgdeatils({
            title: "",
            url: ""
        })
    }

    const handleAdd = async() => {
        const { title, url } = imgdeatils
        console.log(title, url);
        if(!title || !url){
            alert(`Fill the form completely`)
        }else{
           const result = await addImageAPI({title,url})
           console.log(result);
           if(result.status>=200 && result.status<300){
             alert(`Image successfully added`)
             handleClose()
           } 
        }
    }

    const getImage = async()=>{
        const result = await getImageAPI()
        console.log(result);
         if(result.status>=200 && result.status<300){
            setImages(result.data)
         }
    }
    console.log(images);
    
    const handleClose = () => {
        setShow(false);
        handleCancel()
    }

    useEffect(()=>{
        getImage()
    },[])

    const handleShow = () => setShow(true);
    return (
        <>
            <Header />
            {/* Home section */}
            <div className='container-fluid' id='homesection' >
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ height: "90vh" }}>
                        <div className='bg-light shadow p-3'>
                            <h3 className='text-danger text-center' id='heading1'>A picture is a moment that never fades</h3>
                            <h4 className='text-dark text-center ' id='heading2' >Click here for add images </h4>
                            <div style={{ height: "50px" }} className='text-center'>
                                <button className='btn btn-danger ' id='addimagebtn' onClick={handleShow}><FontAwesomeIcon icon={faArrowUp} /></button>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modal heading</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <input type="text" value={imgdeatils.title} onChange={(e) => setImgdeatils({ ...imgdeatils, title: e.target.value })} className='form-control py-2 text-center' placeholder='Image Title' />
                                        <input type="text" value={imgdeatils.url} onChange={(e) => setImgdeatils({ ...imgdeatils, url: e.target.value })} className='form-control py-2 mt-2 text-center' placeholder='Image Url' />
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleCancel}>
                                            Cancel
                                        </Button>
                                        <Button variant="danger" onClick={handleAdd}>
                                            Add
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>

            {/*images's section */}
           {images?.length>0 ?<div className=' container-fluid pt-4 pb-4'>
                <div className="row">
                    {images?.map((item)=>(<div className="col-lg-3 col-6 p-2">
                        <Displayimages allimage={item}  />
                    </div>))}
                    
                </div>
            </div>:

            <div className='container-fluid bg-danger' >
                <div className="row">
                    <div className="col-3-md"></div>
                    <div className="col-6-md d-flex flex-column justify-content-center align-items-center p-2" style={{ height: "60vh" }}>
                        <h2 id='noimageheading' className='text-light'>No Image Added Yet !!!</h2>
                    </div>
                    <div className="col-3-md"></div>
                </div>
            </div>}

            <Footer />
        </>
    )
}

export default Home
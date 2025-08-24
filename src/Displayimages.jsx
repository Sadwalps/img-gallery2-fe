import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
function Displayimages() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
     <Card style={{ width: '100%', textAlign: "center", backgroundColor: "rgba(235, 229, 229, 1)" }}>
                <Card.Img variant="top" src="https://wallpaperaccess.com/full/534288.jpg" onClick={handleShow} className='cardimage' />
                <Card.Body>
                    <Card.Title className='text-dark' style={{ fontWeight: "bold" }}>Card Title</Card.Title>

                    <Button variant="danger mt-2">Delete</Button>
                    <Modal show={show} onHide={handleClose} size='lg' >
                        <Modal.Header closeButton>
                            <Modal.Title style={{ fontWeight: "bold" }}>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img src="https://wallpaperaccess.com/full/534288.jpg" alt="" className='w-100' />
                        </Modal.Body>
                    </Modal>

                </Card.Body>
            </Card>
    </>
  )
}

export default Displayimages
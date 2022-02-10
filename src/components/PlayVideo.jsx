import { useState } from 'react'
import { Image, Modal } from 'react-bootstrap'
import Buttons from './Buttons'
import ReactPlayer from 'react-player'
import '../styles/PlayVideo.css'

export default function PlayVideo () {
    const [show, setShow] = useState(false)
    const openModal = () => {
        setShow(true)
    }
    return (
        <div className='py-4'>
            <Image fluid src='https://bootstrapstudio.io/assets/img/app_4.jpg'/>
            <div className="play-button">
                <Buttons
                    action={openModal}
                    variant='link' 
                    value={
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#320dff" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                            </svg>
                        </span>
                    }
                />
            </div>
            <Modal className='youtube-modal' show={show} onHide={() => setShow(false)}>
                {/* <Modal.Header closeButton></Modal.Header> */}
                <ReactPlayer url={'https://youtu.be/41AaGPktHv8'} controls="true" />
            </Modal>
        </div>

    )
}
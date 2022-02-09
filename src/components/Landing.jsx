import { Card,
         Image 
        } from "react-bootstrap"
import Buttons from  './Buttons'
import '../styles/Landing.css'

export default function Landing () {
    return (
        <Card bg="dark" className="text-center">
            <Card.Body>
                <Card.Title className="text-white">
                    <h2><strong>Bootsrap Studio</strong></h2>
                </Card.Title>
                <Card.Text className="lead text-muted">
                    <div className="row d-flex justify-content-center">
                        <p className="col col-sm-6 col-md-6 col-lg-9">A powerful desktop app for creating
                        <span className='text-white'> responsive websites </span>
                        using the 
                        <span className="text-white"> Bootstrap framework</span>
                        .</p> 
                    </div>
                    <div className="py-5">
                        <Image fluid src="https://bootstrapstudio.io/assets/img/app_4.jpg" />
                    </div>
                    <div>
                        <Buttons 
                            value={
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                    </svg>
                                    <strong>Run Broswer Demo</strong>
                                </span>
                            }
                            variant="primary" />
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
import { Card,
         Image 
        } from "react-bootstrap"
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
                    <Image fluid src="https://bootstrapstudio.io/assets/img/app_4.jpg" />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
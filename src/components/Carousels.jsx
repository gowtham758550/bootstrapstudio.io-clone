import { Carousel, Image } from "react-bootstrap"
import '../styles/Carousels.css'

export default function Carousels(props) {
    return (
        <Carousel variant="dark" className="container">
        {
            props.imageList.map(
                image => 
                    // console.log(image.url)
                    <Carousel.Item>
                        <Image className="" fluid={true} src={image.url} alt={image.url} />
                    </Carousel.Item>
                
            )
        }
        </Carousel>
    )
}
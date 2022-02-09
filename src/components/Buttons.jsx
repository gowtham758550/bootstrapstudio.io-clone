import { Button } from 'react-bootstrap'
import '../styles/Buttons.css'

export default function Buttons (props) {
    return (
        <>
            <Button
                className='primary-button'
                variant={props.variant}
            >
                <strong className="button-value">
                    {props.value}
                </strong>
            </Button>
        </>
    )
}
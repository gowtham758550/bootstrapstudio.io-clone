import '../styles/Features.css'
import '../App.css'

import PlayVideo from './PlayVideo'

export default function Features () {
    return (
        <>
        <div className="text-center container">
            <h1 className='custom-padding-heading'>
                Bootstrap Studio is a powerful desktop app for 
                <span className="text-blue"> designing and prototyping</span>
                websites.
            </h1>
            <p className='text-muted custom-padding-paragraph lead'>
                It comes with a large number of built-in components, which you can drag and drop to assemble responseive web pages. The app is built on top of the hugely popular Bootstrap framework, and exports clean and semantic HTML.
            </p>
        </div>
        <div className='bg-light-blue text-center p-5'>
            <div className='container-fluid'>
                <h3>
                    <svg className='text-primary' xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                    </svg>&nbsp;
                    <strong>Bootstrap Studio 5.9.1 is here!</strong>
                    <span className="lead">
                        <br />
                        See What's new on our
                        &nbsp;
                        <a href="#">
                            releases page 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </a>
                    </span>
                </h3>
                <PlayVideo />
            </div>
        </div>
        </>
    )
}
import React from 'react'
import NotfoundImg from '../assets/img/404 Error.svg'

function NotFound() {
    return (
        <div className="flex justify-center flex-col">
            <img className="h-screen" src={NotfoundImg} alt="Not Found"/>
        </div>
    )
}

export default NotFound
